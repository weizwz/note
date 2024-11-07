/* configs/nav.ts */
import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '首页', link: '/' },
  {
    text: '写作',
    items: [
      {
        text: 'VitePress 语法',
        items: [
          { text: 'markdown 示例', link: '/write/vitepress/markdown-examples.md' },
          { text: 'VitePress api 示例', link: '/write/vitepress/api-examples.md' }
        ]
      }
    ]
  }
]
