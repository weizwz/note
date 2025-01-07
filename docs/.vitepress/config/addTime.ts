import { spawnSync } from 'child_process'
import { statSync } from 'fs'
import { formatDate, dateToUTC8 } from '../utils/tools'

// 读取源文件时间
const getFileMetaTime = (filePath) => {
  const { birthtimeMs, mtimeMs } = statSync(filePath)
  const dateOption = formatDate(true);

  return {
    firstCommit: dateToUTC8(dateOption.format(birthtimeMs)),
    lastUpdated: dateToUTC8(dateOption.format(mtimeMs))
  }
}

// 读取 git 时间
const getGitTime = (command, cwd) => {
  const result = spawnSync('git', command, { cwd })
  return result.stdout.toString().trim()
}

const getFileTimes = (filePath, cwd) => {
  const firstCommit = dateToUTC8(getGitTime(['log', '--reverse', '--diff-filter=A', '--pretty="%ai"', filePath], cwd))
  const lastUpdated = dateToUTC8(getGitTime(['log', '-1', '--pretty="%ai"', filePath], cwd))

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
