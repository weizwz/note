import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/write/': [
    {
      text: '写作',
      collapsed: false,
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
}