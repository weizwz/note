import { createContentLoader } from 'vitepress'
import fs from 'fs'
import path from 'path'
import { sep, normalize } from 'path'
import { formatDate } from '../utils/tools'
import { getGitTimestamp } from '../utils/fileTime'
import { Post } from '../utils/post'

export const loadPosts = async (mode) => {
  // 使用 createContentLoader 加载 Markdown 文件
  const posts = await createContentLoader('post/**/!(*-demo).md', {
    // 包含原始 markdown 源
    includeSrc: false,
    // 包含摘录
    excerpt: false,
  }).load()

  // 
  const promises: Promise<any>[] = []
  const _post: Post[] = []
  posts.forEach(({ frontmatter, src, url }) => {
    const title = frontmatter.title,
      _tags = frontmatter?.tags,
      category = frontmatter?.category,
      abstract = frontmatter?.description,
      // 获取手动设置的更新时间
      createdDate = frontmatter?.firstCommit ? +new Date(frontmatter.firstCommit) : '',
      updatedDate = frontmatter?.lastUpdated ? +new Date(frontmatter.lastUpdated) : '',
      // 日期格式
      dateOption = formatDate(),
      // 链接去掉项目名
      link = normalize(url).split(sep).filter((item) => item).join(sep);
    // 没有时间的文章根据git时间戳获取
    if (createdDate && updatedDate) {
      _post.push({
        title,
        url: link.replace(/post\//, ''),
        date: [createdDate, updatedDate],
        dateText: [ dateOption.format(createdDate), dateOption.format(updatedDate)],
        abstract: abstract,
        /** includeSrc=true才生效，摘取文章前200个字符
          || src
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
        */
        category: category,
        tags: _tags
      })
    } else {
      // https://vitepress.dev/zh/guide/getting-started#file-structure
      // 如果你的文档在docs目录下，路径开头需要拼接 docs/ ，末尾需要拼接 .md
      const task = getGitTimestamp('docs/' + link.replace(/.html/, '') + '.md').then((date) => ({
        title,
        url: link.replace(/post\//, ''), // 由于使用了rewrites重定向，这里也对url作处理
        date: [date[0], date[1]],
        dateText: [dateOption.format(date[0]), dateOption.format(date[1])],
        abstract: abstract,
        category: category,
        tags: _tags
      }))
      promises.push(task)
    }
  })
  let formattedPosts = _post.concat(await Promise.all(promises))
  // 发布时间降序排列
  formattedPosts = formattedPosts.sort((a, b) => b.date[0] - a.date[0])

  // 定义输出路径
  const outputPath = path.resolve(mode === 'production' ? './dist/posts.json' : './docs/posts.json')

  // 将数据写入 JSON 文件
  fs.writeFileSync(outputPath, JSON.stringify(formattedPosts, null, 2))

  console.log('Generated posts.json successfully!')
}
