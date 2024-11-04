import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'weizwz',
  description: 'blog with vitePress',
  lang: 'zh-CN',
  themeConfig: {
    // 左上角logo
    logo: '/logo.png',
    // 标题隐藏
    siteTitle: false,
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '示例', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown 示例', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    // 社交按钮
    socialLinks: [{ icon: 'github', link: 'https://github.com/weizwz/blog' }],

    // 侧边栏文字更改(移动端)
    sidebarMenuLabel: '目录',

    // 返回顶部文字修改(移动端)
    returnToTopLabel: '返回顶部',

    // 大纲显示2-3级标题
    outline: {
      level: [2, 3],
      label: '导航'
    },

    // 自定义上下页名
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    }
  },
  // markdown配置
  markdown: {
    // 行号显示
    lineNumbers: true // false关闭
  }
})
