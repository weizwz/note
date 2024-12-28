import { createContentLoader } from 'vitepress'
import { basename, extname, sep, normalize } from 'path'
import { spawn } from 'child_process'
import { statSync } from 'fs'

export interface Post {
  title: string // 标题
  url: string // url
  date: [number, number] // 日期：创建日期，更新日期
  dateText: [string, string] // 日期文本
  abstract: string // 摘要
  tags?: string[] | undefined // 标签
}
export type Year = {
  [key: string]: Post[]
}
export type Tag = {
  [key: string]: Post[]
}

export interface Data {
  posts: Post[]
  years: Year
  tags: Tag
}

// 避免导入时报错
declare const data: Data
export { data }

// 获取并处理所有文档数据，供首页等使用
// https://vitepress.dev/zh/guide/data-loading#createcontentloader
export default createContentLoader(
  [
    'post/**/*.md' // 也可用过滤 "!(.vitepress|public|pages)/**/!(index|README).md",
  ],
  {
    // 包含原始 markdown 源
    includeSrc: true,
    async transform(data) {
      const promises: Promise<any>[] = []
      let posts: Post[] = []
      let years: Year = {}
      let tags: Tag = {}

      data.forEach(({ frontmatter, src, url }) => {
        // 优先取frontmatter里的标题，没有的话再去找源文中的标题
        let title = frontmatter.title
        if (!title) {
          title = src?.match(/^\s*#\s+(.*)\s*$/m)?.[1] || basename(url).replace(extname(url), '')
          // 标题可能用到了变量，需要替换
          const regexp = /\{\{\s*\$frontmatter\.(\S+?)\s*\}\}/g
          let match
          while ((match = regexp.exec(title)) !== null) {
            const replaceReg = new RegExp('\\{\\{\\s*\\$frontmatter\\.' + match[1] + '\\s*\\}\\}', 'g')
            title = title.replace(replaceReg, frontmatter[match[1]])
          }
        }
        let _tags = frontmatter?.tags

        // 链接去掉项目名
        const link = normalize(url)
          .split(sep)
          .filter((item) => item)
          .join(sep)
        // https://vitepress.dev/zh/guide/getting-started#file-structure
        // 如果你的文档在docs目录下，路径开头需要拼接 docs/ ，末尾需要拼接 .md
        const task = getGitTimestamp('docs/' + link.replace(/.html/, '') + '.md').then((date) => ({
          title,
          url: link.replace(/post\//, ''), // 由于使用了rewrites重定向，这里也对url作处理
          date, // 更新时间
          dateText: [new Date(date[0]).toLocaleDateString(), new Date(date[1]).toLocaleDateString()],
          abstract: src
            // 去除html标签
            ?.replace(/<[^>]+?>/g, '')
            // 去除frontmatter
            .replace(/^---[\s\S]*?---/, '')
            // 去除标题
            .replace(/^#+\s+.*?$/gm, '')
            // 去除引用
            .replace(/^\>/gm, '')
            // 只保留反引号内部内容
            .replace(/`(.+?)`/g, '$1')
            // 只保留加粗、倾斜符号中的内容
            .replace(/\*{1,3}(.+?)\*{1,3}/g, '$1')
            // 只保留跳转内容
            .replace(/\[(.+?)\]\(.+?\)/g, '$1')
            // 去除提示块
            .replace(/^:::.*$/gm, '')
            // 一个或多个空白字符统一替换为一个空格
            .replace(/\s+/g, ' ')
            // 去除首尾空格
            .trim()
            // 仅保留可能显示的部分，减小数据大小
            .slice(0, 200),
          tags: _tags
        }))
        // 过滤掉示例文档/非正式文档，以 -demo 为结尾
        const regDemo = new RegExp(/-demo$/);
        if (regDemo.test(link)) return
        promises.push(task)
      })

      const pages = await Promise.all(promises)
      // 发布时间降序排列
      posts = pages.sort((a, b) => b.date[0] - a.date[0]);
      // 更新时间降序排列
      // posts = pages.sort((a, b) => b.date[1] - a.date[1])

      // 根据年份排列
      posts.forEach((item) => {
        const year = new Date(item.date[1]).getFullYear()
        if (!years[year]) {
          years[year] = []
        }
        years[year].push(item)

        if (item.tags) {
          item.tags.forEach((tag) => {
            if (!tags[tag]) {
              tags[tag] = []
            }
            tags[tag].push(item)
          })
        }
      })

      return {
        posts,
        years,
        tags
      }
    }
  }
)

// 获取文件提交时间
function getGitTimestamp(filePath: string) {
  return new Promise<[number, number]>((resolve) => {
    let output: number[] = []

    // 开启子进程执行git log命令
    const child = spawn('git', ['--no-pager', 'log', '--pretty="%ci"', filePath])

    // 监听输出流
    child.stdout.on('data', (d) => {
      const data = String(d)
        .split('\n')
        .map((item) => +new Date(item))
        .filter((item) => item)
      output.push(...data)
    })

    // 输出接受后返回
    child.on('close', () => {
      if (output.length) {
        // 返回[发布时间，最近更新时间]
        resolve([+new Date(output[output.length - 1]), +new Date(output[0])])
      } else {
        // 没有提交记录时获取文件时间
        const { birthtimeMs, mtimeMs } = statSync(filePath)
        resolve([birthtimeMs, mtimeMs])
      }
    })

    child.on('error', () => {
      // 获取失败时使用文件时间
      const { birthtimeMs, mtimeMs } = statSync(filePath)
      resolve([birthtimeMs, mtimeMs])
    })
  })
}
