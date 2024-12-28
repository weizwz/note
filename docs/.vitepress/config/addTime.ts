import { spawnSync } from 'child_process'

const getGitTime = (command, cwd) => {
  const result = spawnSync('git', command, {
    cwd
  })
  return result.stdout.toString().trim()
}

const getFileTimes = (fileName, cwd) => {
  const lastUpdated = getGitTime(['log', '-1', '--pretty="%ai"', fileName], cwd).replace('+0800', '+8:00')
  const firstCommit = getGitTime(['log', '--reverse', '--diff-filter=A', '--pretty="%ai"', fileName], cwd).replace(
    '+0800',
    '+8:00'
  )
  return {
    firstCommit,
    lastUpdated
  }
}

const addTime = (code, path) => {
  const { firstCommit, lastUpdated } = getFileTimes(path, process.cwd())

  let addTime = `---\n`
  const frontmatter = code.match(/---\n([\s\S]*?)\n---/)[1]
  if (frontmatter.indexOf('firstCommit:') === -1) {
    addTime += `firstCommit: ${firstCommit}\n`
  }
  if (frontmatter.indexOf('lastUpdated:') === -1) {
    addTime += `lastUpdated: ${lastUpdated}\n`
  }

  return code.replace('---\n', addTime)
}

export default addTime
