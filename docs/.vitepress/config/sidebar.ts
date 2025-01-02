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
            { text: '博客升级Hexo版本记录', link: '/hexo/basic/hexo-update.md' },
            { text: 'Hexo命令和优化指南', link: '/hexo/basic/hexo-command-better.md' },
          ]
        },
        {
          text: '进阶用法',
          items: [
            { text: '首页插件recommend', link: '/hexo/extend/hexo-butterfly-recommend.md' },
            { text: '导航插件navctrl', link: '/hexo/extend/hexo-butterfly-navctrl.md' },
            { text: 'Hexo博客新年主题', link: '/hexo/extend/new-year-theme.md' },
          ]
        }
      ]
    }
  ],
  '/nodejs/': [
    {
      text: 'Nodejs',
      items: [
        {
          text: '基础知识',
          items: [
          ]
        },
        {
          text: '日常应用',
          items: [
            { text: 'pnpm配置', link: '/nodejs/apply/pnpm-setting.md' },
          ]
        },
        {
          text: '常见问题',
          items: [
            { text: 'Nodejs报错记录', link: '/nodejs/problem/error-log.md' },
          ]
        },
      ]
    }
  ],
  '/vuejs/': [
    {
      text: 'Vuejs',
      items: [
        {
          text: '基础知识',
          items: [
            { text: 'Vue双向绑定原理', link: '/vuejs/basic/vue-mvvm-binding.md' },
          ]
        },
        {
          text: '日常应用',
          items: [
            { text: 'Vue多界面开发', link: '/vuejs/apply/vue-multi-page-dev.md' },
          ]
        },
      ]
    }
  ],
  '/js/': [
    {
      text: 'JS',
      items: [
        {
          text: '基础知识',
          items: [
          ]
        },
        {
          text: '日常应用',
          items: [
            { text: 'JS比较数值大小', link: '/js/apply/compare-number.md' },
          ]
        },
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
          text: '实用特效',
          items: [
            { text: 'Github项目徽标', link: '/css/apply/icon-label-shields.md' },
            { text: 'mask创建纯CSS图标库', link: '/css/apply/mask-svg-icon.md' },
            { text: '龙年特效', link: '/css/apply/loong-effects.md' },
          ]
        },
      ]
    }
  ],
  '/editor/': [
    {
      text: '开发工具',
      items: [
        {
          text: 'VSCode',
          items: [
            { text: '自用 VSCode 插件', link: '/editor/vscode/vscode-self-plugin.md' },
          ]
        },
      ]
    }
  ],
  '/resource/': [
    {
      text: '资源分享',
      items: [
        {
          text: '字体',
          items: [
            { text: '开源字体整理', link: '/resource/font/open-source-font.md' },
          ]
        },
        {
          text: '图片图标',
          items: [
          ]
        },
      ]
    }
  ],
  '/browser/': [
    {
      text: '浏览器',
      items: [
        {
          text: '相关知识',
          items: [
          ]
        },
        {
          text: '配置和优化',
          items: [
            { text: '浏览器插件分享', link: '/browser/apply/browser-plugin.md' },
          ]
        },
      ]
    }
  ],
  '/git/': [
    {
      text: 'Git',
      items: [
        { text: 'Git使用记录', link: '/git/use-log.md' }
      ]
    }
  ],
  '/site/': [
    {
      text: '网站管理',
      items: [
        { text: '网站设置三级域名', link: '/site/third-level-domain.md' }
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