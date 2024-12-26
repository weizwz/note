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
  ],
  '/css/': [
    {
      text: '实战特效',
      items: [
        { text: '巧用mask属性创建一个纯CSS图标库', link: 'css/apply/mask-svg-icon.md' }
      ]
    }
  ],
  '/domain/': [
    {
      text: '域名管理',
      items: [
        { text: '给网站设置三级域名', link: 'domain/third-level-domain.md' }
      ]
    }
  ],
  '/proxy/': [
    {
      text: '代理工具',
      items: [
        { text: 'Clash Verge 使用记录', link: 'proxy/clash-verge.md' }
      ]
    }
  ]
}