<script setup lang="ts">
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import WBackToTop from './WBackToTop.vue' //返回顶部
import WDocPublic from './WDocPublic.vue' //文章版权
import GiscusComment from './GiscusComment.vue' // 评论模块
import { toggleDark } from './WDark'

const { isDark } = useData()
// 实现切换主题过渡动画
toggleDark(isDark)
</script>

<template>
  <DefaultTheme.Layout>
    <template #doc-footer-before>
      <WDocPublic />
    </template>
    <template #doc-after>
      <GiscusComment />
    </template>
    <template #layout-bottom>
      <WBackToTop />
    </template>
  </DefaultTheme.Layout>
</template>
