<template>
  <a class="post-card" :href="(props.post?.baseUrl || '') + props.post.url">
    <div class="post-container">
      <div :class="'weiz-icon xxl weiz-icon-post ' + (props.post.tags ? 'weiz-icon-' + props.post.tags[0] : '')" />
      <div class="title">{{ props.post.title }}</div>
      <div class="desc">{{ props.post.abstract }}</div>
    </div>
  </a>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { Post } from '../utils/post.data'

export interface PostCard extends Post {
  baseUrl?: string
}

const props = defineProps<{ post: PostCard }>()
</script>

<style lang="scss" scoped>
.post-card {
  display: flex;
  height: 100%;
  border-radius: 12px;
  border: 1px solid var(--vp-c-bg-soft);
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-brand-1);
  transition: var(--weiz-transition);
  &:not(.statistic):hover {
    color: var(--weiz-primary-color-light-1);
    border-color: var(--weiz-primary-color);
    box-shadow: 0 0.5em 0.5em -0.2em var(--weiz-primary-color);
    transform: translateY(-0.5em);
  }
}

.post-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 24px;
  .weiz-icon {
    margin-bottom: 16px;
  }
  .title {
    line-height: 1.4;
    font-size: 16px;
    font-weight: 600;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: .4s;
  }
  .desc {
    padding-top: 8px;
    line-height: 20px;
    font-weight: 500;
    color: var(--vp-c-text-2);
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
