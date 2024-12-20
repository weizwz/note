import type { HeadConfig } from 'vitepress'

export const createHead = (base: string) => {
  return [
    ['link', { rel: 'icon', href: base + 'favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', href: base + 'logo.png' }],
    ['meta', { name: 'msvalidate.01', content: '052AEF55670B1059AC662C78C693AED9' }],
    ['meta', { name: 'google-site-verification', content: 'h5ZDnqWDDdodHi5p5KY3IzNtALfigZTMXUZv1TRcSf0' }],
    ['meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh' }],
    ['meta', { property: 'og:title', content: '唯知笔记 | 一个知识分享网站' }],
    ['meta', { property: 'og:site_name', content: '唯知笔记' }],
    ['meta', { property: 'og:url', content: 'https://note.weizwz.com/' }],
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