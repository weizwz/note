import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/vitepress/': [
    {
      text: 'VitePress',
      items: [
        {
          text: '基础配置',
          items: [
            { text: '运行时 API', link: '/vitepress/basic/api-examples.md' }
          ]
        },
        {
          text: '进阶用法',
          items: [
            { text: 'Markdown 示例', link: '/vitepress/extend/markdown-examples.md' },
          ]
        },
        {
          text: '常见问题',
          items: [
            { text: 'Hydration completed but contains mismatches', link: '/vitepress/problem/error-mismatches.md' },
          ]
        },
      ]
    }
  ]
}