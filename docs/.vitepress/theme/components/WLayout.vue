<!-- .vitepress/theme/Layout/index.vue -->
<script setup lang="ts">
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import WBackToTop from './WBackToTop.vue' //返回顶部
import WDocFooter from './WDocFooter.vue' //文章footer
// import Comment from './Comment.vue'
const { isDark } = useData()

import { toggleAppearance } from './WToggleAppearance'
toggleAppearance(isDark) //实现切换主题过渡动画
</script>

<template>
  <DefaultTheme.Layout>
    <template #doc-after>
      <WDocFooter />
      <WBackToTop />
    </template>
    <template #aside-bottom>
      <WBackToTop />
    </template>
  </DefaultTheme.Layout>
</template>
