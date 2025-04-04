export interface Post {
  title: string // 标题
  url: string // url
  date: [number, number] // 日期：创建日期，更新日期
  dateText: [string, string] // 日期文本
  abstract: string // 摘要
  category?: string | undefined // 分类
  tags?: string[] | undefined // 标签
}
export type Year = {
  [key: string]: Post[]
}
export type Category = {
  [key: string]: Post[]
}
export type Tag = {
  [key: string]: Post[]
}

export interface Data {
  posts: Post[]
  years: Year
  categories: Category
  tags: Tag
}

export const postsData = async () => {
  const response = await fetch(window.location.origin + '/posts.json')
  const posts: Post[] = await response.json()
  return posts
}

// 按年份显示文章
export const postsYearData = (posts: Post[]) => {
  const years: Year = {}
  posts.forEach((item) => {
    const year = new Date(item.date[0]).getFullYear()
    if (!years[year]) {
      years[year] = []
    }
    years[year].push(item)
  })
  return years
}

// 按分类显示文章
export const postsCategoryData = (posts: Post[]) => {
  const categories: Category = {}
  posts.forEach((item) => {
    if (item.category) {
      if (!categories[item.category]) {
        categories[item.category] = []
      }
      categories[item.category].push(item)
    }
  })
  return categories
}

// 按标签显示文章
export const postsTagData = (posts: Post[]) => {
  let tags: Tag = {}
  // 固定文章从最早发布日期开始，以便标签数组能稳定显示（不会因为新发布文章而导致顺序变化）
  const fixPosts = posts.sort((a, b) => a.date[0] - b.date[0])
  let tagNames: string[] = []
  fixPosts.forEach((item) => {
    item.tags?.forEach((tag) => {
      if (tagNames.indexOf(tag) === -1) {
        tagNames.push(tag)
        tags[tag] = []
      }
      tags[tag].push(item)
    })
  })
  return tags
}
