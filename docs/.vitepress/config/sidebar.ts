import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/blog/': [
    {
      text: '博客',
      collapsed: false,
      items: [
        { text: 'Markdown 示例', link: '/blog/markdown-examples' },
        { text: 'Runtime API Examples', link: '/api-examples' }
      ]
    }
  ]
}