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
  '/hexo/': [
    {
      text: 'Hexo',
      items: [
        {
          text: '基础配置',
          items: [
            { text: 'GitHub + Hexo 搭建个人博客网站', link: '/hexo/basic/hexo-github-blog.md' },
            { text: '博客升级 - hexo记录', link: '/hexo/basic/hexo-update.md' }
          ]
        },
        {
          text: '进阶用法',
          items: [
            { text: 'hexo-butterfly-recommend 使用说明', link: '/hexo/extend/hexo-butterfly-recommend.md' },
            { text: 'hexo-butterfly-navctrl 使用说明', link: '/hexo/extend/hexo-butterfly-navctrl.md' },
          ]
        }
      ]
    }
  ],
  '/css/': [
    {
      text: 'CSS',
      items: [
        {
          text: '基础知识',
          items: [
          ]
        },
        {
          text: '实战特效',
          items: [
            { text: 'Github项目徽标', link: '/css/apply/icon-label-shields.md' },
            { text: '巧用mask属性创建一个纯CSS图标库', link: '/css/apply/mask-svg-icon.md' },
            { text: '你想要的龙年特效来了', link: '/css/apply/loong-effects.md' },
          ]
        },
      ]
    }
  ],
  '/site/': [
    {
      text: '站点管理',
      items: [
        { text: '给网站设置三级域名', link: '/domain/third-level-domain.md' }
      ]
    }
  ],
  '/proxy/': [
    {
      text: '代理工具',
      items: [
        { text: 'Clash Verge 使用记录', link: '/proxy/clash-verge.md' }
      ]
    }
  ],
  '/element/': [
    {
      text: 'Element UI',
      items: [
        { text: '巧用 Element 自适应布局', link: '/element/responsive-layout.md' }
      ]
    }
  ]
}