import type { Theme } from 'vitepress'
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style/index.scss'
import WLayout from './components/WLayout.vue'
import WHome from './components/WHome/index.vue'
import WTag from './components/WTag/index.vue'
import WDocTitleMeta from './components/WDocTitleMeta.vue' //文章顶部
import { EnhanceAppContext, useData } from 'vitepress'
import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client'
import '@shikijs/vitepress-twoslash/style.css'
import { inBrowser } from 'vitepress'
import busuanzi from 'busuanzi.pure.js'

export default {
  extends: DefaultTheme,
  Layout: () => {
    const props: Record<string, any> = {}
    // 获取 frontmatter
    const { frontmatter } = useData()

    /* 为 自定义界面 添加 自定义class */
    props.class = frontmatter.value?.layout || ''

    return h(WLayout, props)
  },
  enhanceApp({ app, router }: EnhanceAppContext) {
    app.component('weiz-home', WHome)
    app.component('weiz-tag', WTag)
    app.component('weiz-title-meta', WDocTitleMeta)
    app.use(TwoslashFloatingVue)
    app.use(ElementPlus)
    if (inBrowser) {
      router.onAfterRouteChanged = () => {
        busuanzi.fetch()
      }
    }
  }
} satisfies Theme
