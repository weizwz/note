/* configs/nav.ts */
import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '首页', link: '/' },
  {
    text: 'VitePress',
    items: [
      {
        text: '基础设置',
        items: [
          { text: 'api 示例', link: 'vitepress/basic/api-examples.md' }
        ]
      },
      {
        text: '扩展用法',
        items: [
          { text: 'markdown 示例', link: '/vitepress/extend/markdown-examples.md' },
        ]
      },
    ]
  }
]
