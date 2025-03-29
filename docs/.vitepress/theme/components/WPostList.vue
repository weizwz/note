<template>
  <div class="post-list" v-for="(item, index) of data" :key="index">
    <div class="title-wrapper">
      <h3 class="title">{{ item.title }}</h3>
    </div>
    <el-row v-if="item.posts.length === 0" class="container-row" :gutter="24">
      <el-col v-for="idx of 8" :key="idx" :xs="24" :sm="12" :md="6">
        <weiz-post-card :noData="true" />
      </el-col>
    </el-row>
    <el-row v-else class="container-row" :gutter="24">
      <el-col v-for="temp of item.posts" :key="temp.url" :xs="24" :sm="12" :md="6">
        <weiz-post-card :post="Object.assign({ baseUrl: '../' }, temp)" />
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref, toRefs, watch } from 'vue'
import { PostList } from '../type/WPost'
import { log } from 'console'

const props = defineProps<{ postList: PostList[] }>()

const { postList } = toRefs(props)
const data = ref<PostList[]>([{
  title: '文章列表',
  posts: []
}])

// 深度监听 childData 对象
watch(
  postList,
  (newVal) => {
    data.value = newVal
  },
  { deep: true }
)
</script>

<style lang="scss" scoped>
.post-list {
  .title-wrapper {
    margin: calc(var(--weiz-spacing) * 8) 0 calc(var(--weiz-spacing) * 12) 0;
    height: 1px;
    background: var(--vp-c-text-5);
    position: relative;
    .title {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%) translateY(-50%);
      background: var(--vp-c-bg-soft);
      padding: 0 var(--weiz-spacing-8xl);
      font-size: var(--weiz-font-size-xl);
      font-weight: var(--weiz-font-weight-bold);
      line-height: var(--weiz-text-xl-line-height);
      text-align: center;
    }
  }
  .el-col {
    margin-bottom: var(--weiz-spacing-6xl);
  }
}
</style>
