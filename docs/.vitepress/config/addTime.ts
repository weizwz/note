import { spawnSync } from 'child_process'
import { statSync } from 'fs'

// 读取源文件时间
const getFileMetaTime = (filePath) => {
  const { birthtimeMs, mtimeMs } = statSync(filePath)

  const dateOption = new Intl.DateTimeFormat('zh', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false 
  });

  return {
    firstCommit: dateOption.format(birthtimeMs).replace(/\//g, '-') + '+8:00',
    lastUpdated: dateOption.format(mtimeMs).replace(/\//g, '-') + '+8:00'
  }
}

// 读取 git 时间
const getGitTime = (command, cwd) => {
  const result = spawnSync('git', command, { cwd })
  return result.stdout.toString().trim()
}

const getFileTimes = (filePath, cwd) => {
  const firstCommit = getGitTime(['log', '--reverse', '--diff-filter=A', '--pretty="%ai"', filePath], cwd).replace(' +0800', '+8:00')
  const lastUpdated = getGitTime(['log', '-1', '--pretty="%ai"', filePath], cwd).replace(' +0800', '+8:00')

  if (!firstCommit && !lastUpdated) {
    return getFileMetaTime(filePath)
  }

  return {
    firstCommit,
    lastUpdated
  }
}

const addTime = (code, filePath) => {
  if (!code.match(/---\n([\s\S]*?)\n---/)) return code

  const frontmatter = code.match(/---\n([\s\S]*?)\n---/)[1]
  const hasFirstCommit = frontmatter.indexOf('firstCommit:') >= 0
  const hasLastUpdated = frontmatter.indexOf('lastUpdated:') >= 0

  if(hasFirstCommit && hasLastUpdated) return code

  const { firstCommit, lastUpdated } = getFileTimes(filePath, process.cwd())

  let addTime = `---\n`
  if (!hasFirstCommit) {
    addTime += `firstCommit: ${firstCommit}\n`
  }
  if (!hasLastUpdated) {
    addTime += `lastUpdated: ${lastUpdated}\n`
  }

  return code.replace('---\n', addTime)
}

export default addTime
