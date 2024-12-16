import type { HeadConfig } from 'vitepress'

export const createHead = (base: string) => {
  return [
    ['link', { rel: 'icon', href: base + 'favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', href: base + 'logo.png' }],
    ['meta', { property: 'referrer', content: 'no-referrer-when-downgrade' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh' }],
    ['meta', { property: 'og:title', content: '唯知笔记 | 一个知识分享网站' }],
    ['meta', { property: 'og:site_name', content: '唯知笔记' }],
    ['meta', { property: 'og:url', content: 'https://weizwz.com/note/' }],
    // [
    //   'script',
    //   {},
    //   `
    //   window._hmt = window._hmt || [];
    //   (function() {
    //     var hm = document.createElement("script");
    //     hm.src = "https://hm.baidu.com/hm.js?abcdefgeggsdfsdf123123";
    //     var s = document.getElementsByTagName("script")[0]; 
    //     s.parentNode.insertBefore(hm, s);
    //   })();
    //   `,
    // ],
  ] as HeadConfig[]
}