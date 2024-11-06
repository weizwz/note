import { defineConfig } from 'vitepress'
import { nav } from './nav'
import { algolia } from './algolia'
import { head } from './head'
import { sidebar } from './sidebar'
import MarkdownPreview from 'vite-plugin-markdown-preview'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 部署路径
  base: '/',
  outDir: '../dist',

  lang: 'zh-CN',
  title: 'weizwz',
  // 完全自定义标题，:title 不要动，改后面的
  titleTemplate: ':title - weizwz.com',
  description: '个人博客 · 时光笔墨',
  // fav图标
  head,

  lastUpdated: true,
  cleanUrls: true,

  // markdown配置
  markdown: {
    // 行号显示
    lineNumbers: true, // false关闭
    image: {
      lazyLoading: true,
    },
  },

  themeConfig: {
    // 左上角logo
    logo: '/favicon.ico',
    // 标题隐藏
    siteTitle: 'weizwz',
    i18nRouting: false,

    // https://vitepress.dev/reference/default-theme-config
    nav,

    sidebar,

    // 社交按钮
    socialLinks: [{ icon: 'github', link: 'https://github.com/weizwz/blog' }],


    // 相关文字和提示修改
    returnToTopLabel: '回到顶部', // 返回顶部文字修改(移动端)
    sidebarMenuLabel: '菜单', // 侧边菜单
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    // 大纲显示2-3级标题
    outline: {
      level: [2, 3],
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
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
  vite: {
    plugins: [MarkdownPreview()],
  },
})
