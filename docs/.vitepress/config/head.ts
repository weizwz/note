import type { HeadConfig } from 'vitepress'

export const head: HeadConfig[] = [
  ['link', { rel: 'icon', href: 'favicon.ico' }],
  ['link', { rel: 'icon', type: 'image/png', href: 'logo.png' }],
  ['meta', { name: 'theme-color', content: '#4096ff' }],
  ['meta', { property: 'og:type', content: 'website' }],
  ['meta', { property: 'og:locale', content: 'zh' }],
  ['meta', { property: 'og:title', content: '唯知笔记 | 一个知识分享网站' }],
  ['meta', { property: 'og:site_name', content: '唯知笔记' }],
  ['meta', { property: 'og:url', content: 'https://weizwz.com/note/' }]
]