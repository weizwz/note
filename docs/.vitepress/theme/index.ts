import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style/index.scss'
import WLayout from './components/WLayout.vue'
import WHome from './components/WHome/index.vue'
import { EnhanceAppContext } from 'vitepress'
import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client'
import '@shikijs/vitepress-twoslash/style.css'
import { inBrowser } from 'vitepress'
import busuanzi from 'busuanzi.pure.js'

export default {
  extends: DefaultTheme,
  Layout: WLayout,
  enhanceApp({ app, router }: EnhanceAppContext) {
    app.component("weiz-home", WHome);
    app.use(TwoslashFloatingVue)
    app.use(ElementPlus)
    if (inBrowser) {
      router.onAfterRouteChanged = () => {
        busuanzi.fetch()
      }
    }
  }
} satisfies Theme