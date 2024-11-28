import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '唯知首页', link: '/' },
  {
    text: 'VitePress',
    items: [
      {
        text: '基础设置',
        items: [
          { text: 'API 示例', link: 'vitepress/basic/api-examples.md' }
        ]
      },
      {
        text: '进阶用法',
        items: [
          { text: 'Markdown 示例', link: '/vitepress/extend/markdown-examples.md' },
        ]
      },
    ]
  }
]
