import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '导航', 
    items: [
      {
        items: [
          { text: '全部文章', link: '/pages/posts.md' },
          { text: '标签列表', link: '/pages/tags.md' },
          { text: '更新日志', link: '/pages/logs.md' },
        ]
      },
      {
        text: '推荐文章',
        items: [
          { text: 'VSCode接入DeepSeek', link: 'editor/vscode/vscode-deepseek.md' },
          { text: 'Clash Verge使用记录', link: 'app/network/clash-verge.md' },
          { text: 'Markdown扩展语法示例', link: 'vitepress/extend/markdown-examples' },
          { text: 'Git使用记录-持续更新', link: 'git/use-log.md' },
        ]
      },
    ] 
  },
  {
    text: '技术',
    items: [
      {
        items: [
          // { text: 'HTML 基础知识', link: 'vitepress/extend/markdown-examples.md' },
          { text: 'CSS 基础', link: '/css/apply/icon-label-shields.md' },
          { text: 'JS 基础', link: '/js/apply/compare-number.md' },
          // { text: 'ES6 常用语法', link: 'vitepress/extend/markdown-examples.md' },
          { text: '浏览器相关', link: 'browser/apply/browser-plugin.md' },
          { text: 'TS 基础', link: '/ts/basic/ts-normal-summary.md' },
          { text: 'Nodejs 相关', link: '/nodejs/apply/pnpm-setting.md' },
          { text: 'Nginx 代理', link: '/nginx/nginx-web-cross-domain.md' },
        ]
      },
      {
        items: [
          { text: 'Vue.js', link: '/vuejs/basic/vue-mvvm-binding.md' },
          // { text: 'React', link: 'vitepress/extend/markdown-examples.md' },
          { text: 'uni-app', link: '/mobile/uniapp/project-building-uniapp-vue3.md' },
          { text: 'Vite', link: 'pages/tags?q=Vite' },
          { text: 'Element', link: '/element/responsive-layout.md' },
        ]
      },
      {
        items: [
          { text: '终端配置/美化', link: 'pages/tags?q=%E7%BB%88%E7%AB%AF' },
          { text: 'Git 相关', link: '/git/use-log.md' },
          { text: 'VSCode 配置', link: '/editor/vscode/vscode-self-plugin.md' },
          { text: 'Clash 配置', link: 'app/network/clash-verge.md' },
        ]
      },
    ]
  },
  {
    text: '博客',
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
    text: '资源',
    items: [
      {
        items: [
          { text: '应用分享', link: '/app/network/clash-verge.md' },
          { text: 'Windows', link: '/windows/setting/terminal-beautify.md' },
          { text: 'MacOS', link: '/macos/setting/mac-terminal-beautify.md' },
        ]
      },
      {
        items: [
          { text: '开源字体', link: '/resource/font/open-source-font.md' },
          { text: '图标图片', link: 'resource/font/open-source-font.md' },
          { text: 'GitHub相关', link: 'pages/tags?q=Github' },
          { text: '其他资源', link: 'resource/font/open-source-font.md' },
        ]
      },
      {
        items: [
          { text: '前端导航', link: 'https://nav.liwenkai.fun/' },
          { text: 'AI集合', link: 'https://ai-bot.cn/' },
        ]
      },
    ]
  },
  {
    text: '关于',
    items: [
      {
        text: '我的项目',
        items: [
          { text: '趣味动画', link: 'https://weizwz.com/fun-animation/' },
          { text: '大屏演示', link: 'https://weizwz.com/vite-vue3-charts/#/' },
          { text: 'vue3模版', link: 'https://weizwz.com/weiz-vue3-ts/' },
          { text: '其他项目', link: 'https://github.com/weizwz' },
        ]
      }
    ]
  }
]
