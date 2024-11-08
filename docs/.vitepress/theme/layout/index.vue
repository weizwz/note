<!-- .vitepress/theme/Layout/index.vue -->
<script setup lang="ts">
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import backToTop from './backToTop.vue' //返回顶部
// import Comment from './Comment.vue'
const { isDark } = useData()

import { toggleAppearance } from './toggleAppearance'
toggleAppearance(isDark) //实现切换主题过渡动画
</script>

<template>
  <DefaultTheme.Layout>
    <template #doc-footer-before>
      <backToTop />
    </template>
  </DefaultTheme.Layout>
</template>
