/* configs/nav.ts */
import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '首页', link: '/' },
  { text: '博客', items: [{ text: 'markdown示例', link: '/blog/markdown-examples' }] }
]
