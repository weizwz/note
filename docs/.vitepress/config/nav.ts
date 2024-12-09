import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '唯知首页', link: '/' },
  {
    text: '前端笔记',
    items: [
      {
        items: [
          { text: 'HTML 基础知识', link: 'vitepress/extend/markdown-examples.md' },
          { text: 'CSS 常用语法', link: 'vitepress/extend/markdown-examples.md' },
          { text: 'JS 基础知识', link: 'vitepress/basic/api-examples.md' },
          { text: 'ES6 常用语法', link: 'vitepress/extend/markdown-examples.md' },
          { text: '浏览器 相关知识', link: 'vitepress/extend/markdown-examples.md' },
          { text: 'TS 常用语法', link: 'vitepress/extend/markdown-examples.md' },
          { text: 'Nodejs 常用知识', link: 'vitepress/extend/markdown-examples.md' },
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
          { text: 'Vue.js', link: 'vitepress/extend/markdown-examples.md' },
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
          { text: 'JS 常用方法', link: 'vitepress/extend/markdown-examples.md' },
          { text: 'CSS 有趣特效', link: 'vitepress/extend/markdown-examples.md' },
          { text: '开发常用功能', link: 'vitepress/extend/markdown-examples.md' },
          { text: 'Element 使用', link: 'vitepress/extend/markdown-examples.md' },
        ]
      },
      {
        items: [
          { text: 'Clash 配置', link: 'vitepress/basic/api-examples.md' },
          { text: 'Nodejs 配置', link: 'vitepress/basic/api-examples.md' },
          { text: '终端 配置', link: 'vitepress/extend/markdown-examples.md' },
          { text: 'Git 配置', link: 'vitepress/basic/api-examples.md' },
          { text: 'Edge 浏览器', link: 'vitepress/extend/markdown-examples.md' },
          { text: 'Nginx 代理', link: 'vitepress/extend/markdown-examples.md' },
          { text: 'Linux 常用命令', link: 'vitepress/extend/markdown-examples.md' },
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
        text: 'Vitepress',
        items: [
          { text: '基础配置', link: 'vitepress/basic/api-examples.md' },
          { text: '进阶用法', link: 'vitepress/extend/markdown-examples.md' },
        ]
      },
      {
        text: 'Hexo框架',
        items: [
          { text: '基础配置', link: 'vitepress/basic/api-examples.md' },
          { text: '进阶用法', link: 'vitepress/extend/markdown-examples.md' },
        ]
      },
      {
        items: [
          { text: '服务器站点', link: 'vitepress/basic/api-examples.md' },
          { text: '域名证书', link: 'vitepress/basic/api-examples.md' },
          { text: '图床使用', link: 'vitepress/extend/markdown-examples.md' },
        ]
      },
      {
        items: [
          { text: '标签页', link: 'pages/tags.md' },
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
