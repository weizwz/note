import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/vitepress/': [
    {
      text: 'VitePress',
      items: [
        {
          text: '基础配置',
          items: [
            { text: '运行时API', link: '/vitepress/basic/api-examples.md' }
          ]
        },
        {
          text: '进阶用法',
          items: [
            { text: 'Markdown示例', link: '/vitepress/extend/markdown-examples.md' },
          ]
        },
        {
          text: '常见问题',
          items: [
            { text: '渲染报错Hydration', link: '/vitepress/problem/error-mismatches.md' },
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
            { text: 'GitHub+Hexo搭建博客', link: '/hexo/basic/hexo-github-blog.md' },
            { text: '博客升级Hexo版本记录', link: '/hexo/basic/hexo-update.md' }
          ]
        },
        {
          text: '进阶用法',
          items: [
            { text: '首页插件recommend', link: '/hexo/extend/hexo-butterfly-recommend.md' },
            { text: '导航插件navctrl', link: '/hexo/extend/hexo-butterfly-navctrl.md' },
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
            { text: 'mask创建纯CSS图标库', link: '/css/apply/mask-svg-icon.md' },
            { text: '龙年特效', link: '/css/apply/loong-effects.md' },
          ]
        },
      ]
    }
  ],
  '/site/': [
    {
      text: '站点管理',
      items: [
        { text: '网站设置三级域名', link: '/domain/third-level-domain.md' }
      ]
    }
  ],
  '/proxy/': [
    {
      text: '代理工具',
      items: [
        { text: 'Clash Verge', link: '/proxy/clash-verge.md' }
      ]
    }
  ],
  '/element/': [
    {
      text: 'Element UI',
      items: [
        { text: 'Element自适应布局', link: '/element/responsive-layout.md' }
      ]
    }
  ]
}