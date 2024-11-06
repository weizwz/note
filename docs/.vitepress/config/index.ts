import { defineConfig } from 'vitepress'
import { nav } from './nav'
import { algolia } from './algolia'
import { head } from './head'
import { sidebar } from './sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: 'weizwz',
  // 完全自定义标题，:title 不要动，改后面的
  titleTemplate: ':title - weizwz.com',
  description: '个人博客 · 时光笔墨',
  // fav图标
  head,
  // 部署路径
  base: '/',
  themeConfig: {
    // 左上角logo
    logo: '/favicon.ico',
    // 标题隐藏
    siteTitle: 'weizwz',
    // https://vitepress.dev/reference/default-theme-config
    nav,

    sidebar,
    // 社交按钮
    socialLinks: [{ icon: 'github', link: 'https://github.com/weizwz/blog' }],

    // 侧边栏文字更改(移动端)
    sidebarMenuLabel: '目录',

    // 返回顶部文字修改(移动端)
    returnToTopLabel: '返回顶部',

    // 大纲显示2-3级标题
    outline: {
      level: [2, 3],
      label: '页面导航'
    },

    // 自定义上下页名
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    //本地搜索
    search: {
      provider: 'algolia',
      options: algolia
    }
  },
  // 站点地图
  sitemap: {
    hostname: 'https://weizwz.com'
  },
  // markdown配置
  markdown: {
    // 行号显示
    lineNumbers: true // false关闭
  }
})
