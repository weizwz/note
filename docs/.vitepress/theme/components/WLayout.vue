<script setup lang="ts">
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import WBackToTop from './WBackToTop.vue' //返回顶部
import WDocPublic from './WDocPublic.vue' //文章footer
import WDocFooter from './WDocFooter.vue' //文章footer
// import Comment from './Comment.vue'
const { isDark } = useData()

import { toggleDark } from './WDark'
toggleDark(isDark) //实现切换主题过渡动画
</script>

<template>
  <DefaultTheme.Layout>
    <template #doc-footer-before>
      <WDocPublic />
    </template>
    <template #doc-bottom>
      <WBackToTop />
    </template>
    <template #layout-bottom>
      <WDocFooter />
    </template>
  </DefaultTheme.Layout>
</template>
