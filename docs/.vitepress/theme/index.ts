import type { Theme } from 'vitepress'
import { EnhanceAppContext, useData, inBrowser, useRoute } from 'vitepress'
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import WLoading from './components/WLoading.vue' // 加载动画
import WLayout from './components/WLayout.vue' // 布局
import WPostCard from './components/WPostCard.vue' // 文章小卡片
import WHome from './components/WHome/index.vue' // 首页
import WTag from './components/WTag/index.vue' // 标签页
import WPost from './components/WPost/index.vue' // 所有文章页
import WDocTitleMeta from './components/WDocTitleMeta.vue' //文章顶部

import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client' // type类型悬浮框
import '@shikijs/vitepress-twoslash/style.css'
import busuanzi from 'busuanzi.pure.js' // 卜算子统计插件
import 'viewerjs/dist/viewer.min.css' // 图片查看器
import imageViewer from 'vitepress-plugin-image-viewer'
// import vImageViewer from 'vitepress-plugin-image-viewer/lib/vImageViewer.vue'
import { NProgress } from 'nprogress-v2/dist/index.js' // 进度条
import 'nprogress-v2/dist/index.css'
// 全局样式
import './style/index.scss'

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
    app.component('weiz-post-card', WPostCard)
    app.component('weiz-home', WHome)
    app.component('weiz-tag', WTag)
    app.component('weiz-post', WPost)
    app.component('weiz-title-meta', WDocTitleMeta)
    app.component('weiz-loading', WLoading)
    app.use(TwoslashFloatingVue)
    app.use(ElementPlus)
    // 注册全局组件（可选）
    // app.component('vImageViewer', vImageViewer)
    if (inBrowser) {
      NProgress.configure({ showSpinner: false })

      router.onBeforeRouteChange = () => {
        NProgress.start() // 开始进度条
        busuanzi.fetch()
      }
      router.onAfterRouteChange = () => {
        NProgress.done() // 停止进度条
      }
    }
  },
  setup() {
    const route = useRoute()
    // 启用插件
    imageViewer(route, '.vp-doc', {
      navbar: false,
      zoomRatio: .2,
      minZoomRatio: .1,
      toggleOnDblclick: false,
    })
  }
} satisfies Theme
