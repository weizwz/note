import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '唯知首页', link: '/' },
  {
    text: '前端笔记',
    items: [
      {
        text: '前端基础',
        items: [
          { text: 'HTML基础知识', link: 'vitepress/extend/markdown-examples.md' },
          { text: 'CSS常用语法', link: 'vitepress/extend/markdown-examples.md' },
          { text: 'JS基础知识', link: 'vitepress/basic/api-examples.md' },
          { text: 'ES6常用语法', link: 'vitepress/extend/markdown-examples.md' },
          { text: '浏览器相关知识', link: 'vitepress/extend/markdown-examples.md' },
          { text: 'TS常用语法', link: 'vitepress/extend/markdown-examples.md' },
          { text: 'Nodejs常用知识', link: 'vitepress/extend/markdown-examples.md' },
        ]
      },
      {
        text: '数据传输',
        items: [
          { text: 'HTTP协议', link: 'vitepress/extend/markdown-examples.md' },
          { text: 'XMLHttpRequest', link: 'vitepress/extend/markdown-examples.md' },
          { text: 'JSON语法', link: 'vitepress/extend/markdown-examples.md' },
          { text: 'Ajax基础知识', link: 'vitepress/extend/markdown-examples.md' },
        ]
      },
      {
        text: '前端框架',
        items: [
          { text: 'Vue框架', link: 'vitepress/extend/markdown-examples.md' },
          { text: 'React框架', link: 'vitepress/extend/markdown-examples.md' },
          { text: 'Uni-app', link: 'vitepress/extend/markdown-examples.md' },
        ]
      },
      {
        text: '其他扩展',
        items: [
          { text: 'UI框架', link: 'vitepress/extend/markdown-examples.md' },
          { text: '设计模式', link: 'vitepress/extend/markdown-examples.md' },
        ]
      },
    ]
  },
  {
    text: '编码提效',
    items: [
      {
        text: '运行环境',
        items: [
          { text: 'Nodejs配置', link: 'vitepress/basic/api-examples.md' },
          { text: '终端美化', link: 'vitepress/extend/markdown-examples.md' },
          { text: 'Git配置', link: 'vitepress/basic/api-examples.md' },
          { text: 'Edge浏览器', link: 'vitepress/extend/markdown-examples.md' },
          { text: 'Nginx代理', link: 'vitepress/extend/markdown-examples.md' },
          { text: 'Linux常用命令', link: 'vitepress/extend/markdown-examples.md' },
        ]
      },
      {
        text: '常用工具',
        items: [
          { text: 'VScode配置', link: 'vitepress/basic/api-examples.md' },
          { text: '微信开发者工具', link: 'vitepress/extend/markdown-examples.md' },
          { text: '其他开发软件', link: 'vitepress/extend/markdown-examples.md' },
        ]
      },
    ]
  },
  {
    text: '资源分享',
    items: [
      {
        text: '设计资源',
        items: [
          { text: '开源字体分享', link: 'vitepress/basic/api-examples.md' },
          { text: '图标图片网站', link: 'vitepress/extend/markdown-examples.md' },
          { text: '在线网站推荐', link: 'vitepress/extend/markdown-examples.md' },
        ]
      },
      {
        text: '好用软件',
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
        text: '网站部署',
        items: [
          { text: '服务器站点', link: 'vitepress/basic/api-examples.md' },
          { text: '域名证书', link: 'vitepress/basic/api-examples.md' },
          { text: '图床使用', link: 'vitepress/extend/markdown-examples.md' },
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
