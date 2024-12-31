import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '首页', link: '/' },
  { text: '站内导航', 
    items: [
      {
        items: [
          { text: '全部文章', link: 'pages/posts.md' },
          { text: '标签列表', link: 'pages/tags.md' },
          { text: '更新日志', link: 'pages/logs.md' },
        ]
      },
      {
        text: '推荐文章',
        items: [
          { text: 'Clash 使用', link: 'proxy/clash-verge.md' },
          { text: 'Markdown 示例', link: 'vitepress/extend/markdown-examples' },
        ]
      },
    ] 
  },
  {
    text: '前端笔记',
    items: [
      {
        items: [
          { text: 'HTML 基础知识', link: 'vitepress/extend/markdown-examples.md' },
          { text: 'CSS 基础知识', link: 'vitepress/extend/markdown-examples.md' },
          { text: 'JS 基础知识', link: 'js/apply/compare-number.md' },
          { text: 'ES6 常用语法', link: 'vitepress/extend/markdown-examples.md' },
          { text: '浏览器 相关知识', link: 'vitepress/extend/markdown-examples.md' },
          { text: 'TS 常用语法', link: 'vitepress/extend/markdown-examples.md' },
          { text: 'Nodejs 常用知识', link: 'nodejs/problem/error-log.md' },
        ]
      },
      {
        items: [
          { text: 'HTTP 协议', link: 'vitepress/extend/markdown-examples.md' },
          { text: 'XMLHttpRequest', link: 'vitepress/extend/markdown-examples.md' },
          { text: 'JSON 语法', link: 'vitepress/extend/markdown-examples.md' },
          { text: 'Ajax 基础知识', link: 'vitepress/extend/markdown-examples.md' },
        ]
      },
      {
        items: [
          { text: 'Vue.js', link: '/vuejs/basic/vue-mvvm-binding.md' },
          { text: 'React', link: 'vitepress/extend/markdown-examples.md' },
          { text: 'uni-app', link: 'vitepress/extend/markdown-examples.md' },
          { text: 'Vite', link: 'vitepress/extend/markdown-examples.md' },
          { text: '其他库', link: 'vitepress/extend/markdown-examples.md' },
        ]
      },
    ]
  },
  {
    text: '编码提效',
    items: [
      {
        items: [
          { text: 'JS 日常应用', link: '/js/apply/compare-number.md' },
          { text: 'CSS 实用特效', link: '/css/apply/icon-label-shields.md' },
          { text: '开发常用模块', link: 'vitepress/extend/markdown-examples.md' },
          { text: 'Element 使用', link: '/element/responsive-layout.md' },
        ]
      },
      {
        items: [
          { text: 'Clash 配置', link: '/proxy/clash-verge.md' },
          { text: 'Nodejs 相关', link: '/nodejs/problem/error-log.md' },
          { text: '终端 相关', link: 'vitepress/extend/markdown-examples.md' },
          { text: 'Git 相关', link: 'vitepress/basic/api-examples.md' },
          { text: '浏览器相关', link: 'vitepress/extend/markdown-examples.md' },
          { text: 'Nginx 代理', link: 'vitepress/extend/markdown-examples.md' },
          { text: 'Linux 相关', link: 'vitepress/extend/markdown-examples.md' },
        ]
      },
      {
        items: [
          { text: 'vscode 配置', link: 'vitepress/basic/api-examples.md' },
          { text: '微信开发者工具', link: 'vitepress/extend/markdown-examples.md' },
          { text: '其他开发软件', link: 'vitepress/extend/markdown-examples.md' },
        ]
      },
    ]
  },
  {
    text: '博客文档',
    items: [
      {
        text: '网站管理',
        items: [
          { text: '域名证书', link: '/site/third-level-domain' },
          { text: '图床资源', link: 'site/third-level-domain' },
        ]
      },
      {
        text: 'Vitepress',
        items: [
          { text: '基础配置', link: '/vitepress/basic/api-examples.md' },
          { text: '进阶用法', link: '/vitepress/extend/markdown-examples.md' },
          { text: '常见问题', link: '/vitepress/problem/error-mismatches.md' },
        ]
      },
      {
        text: 'Hexo框架',
        items: [
          { text: '基础配置', link: '/hexo/basic/hexo-github-blog.md' },
          { text: '进阶用法', link: '/hexo/extend/hexo-butterfly-recommend.md' },
        ]
      },
    ]
  },
  {
    text: '资源分享',
    items: [
      {
        items: [
          { text: '开源字体分享', link: 'vitepress/basic/api-examples.md' },
          { text: '图标图片网站', link: 'vitepress/extend/markdown-examples.md' },
          { text: '其他设计网站', link: 'vitepress/extend/markdown-examples.md' },
        ]
      },
      {
        items: [
          { text: '跨平台软件', link: 'vitepress/basic/api-examples.md' },
          { text: 'Windows软件', link: 'vitepress/basic/api-examples.md' },
          { text: 'MacOS软件', link: 'vitepress/extend/markdown-examples.md' },
          { text: '软件下载平台', link: 'vitepress/extend/markdown-examples.md' },
        ]
      },
    ]
  },
  {
    text: '杂项记录',
    items: [
      {
        text: '前端网站',
        items: [
          { text: '常用API导航', link: 'vitepress/extend/markdown-examples.md' },
          { text: 'GitHub相关', link: 'vitepress/basic/api-examples.md' },
          { text: '博客网站', link: 'vitepress/extend/markdown-examples.md' },
        ]
      },
      {
        text: '我的项目',
        items: [
          { text: '趣味动画', link: 'https://weizwz.com/fun-animation/' },
          { text: '大屏演示', link: 'https://weizwz.com/vite-vue3-charts/#/' },
          { text: 'vue3模版', link: 'https://weizwz.com/weiz-vue3-ts/' },
          { text: '其他开源项目', link: 'vitepress/extend/markdown-examples.md' },
        ]
      }
    ]
  }
]
