<template>
  <a v-if="props.noData" class="post-card post-card-no-data">
    <div class="post-container">
      <div class="weiz-icon weiz-icon-post xxl"/>
      <div class="title">
        <weiz-loading/>
      </div>
      <div class="desc">&nbsp;</div>
    </div>
  </a>
  <a v-else class="post-card" :href="(post?.baseUrl || '') + post.url">
    <div class="post-container">
      <div
        :class="
          'weiz-icon xxl weiz-icon-post ' +
          (post.tags ? 'weiz-icon-' + post.tags[0].toLocaleLowerCase().replace(/\./g, '') : '')
        " />
      <div class="title">{{ post.title }}</div>
      <div class="desc">{{ post.abstract }}</div>
      <div class="top" v-if="post.top" title="置顶">
        <i class="weiz-icon weiz-icon-post-top xm"></i>
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
import { HomePost } from '../type/WHome'

export interface PostCard extends HomePost {
  baseUrl?: string
}

const props = defineProps<{ post?: PostCard, noData?: Boolean }>()
const post = props?.post as PostCard
</script>

<style lang="scss" scoped>
.post-card {
  display: flex;
  height: 100%;
  border-radius: var(--weiz-card-border-radius);
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-brand-1);
  transition: var(--weiz-transition);
  &:not(.statistic):hover {
    color: var(--vp-c-brand-1);
    box-shadow: 0 0.5em 0.5em 0 var(--weiz-primary-color);
    transform: translateY(-0.5em);
  }
  &.post-card-no-data {
    .title {
      text-align: center;
    }
    .desc {
      height: 68px;
    }
  }
}

.post-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 24px;
  position: relative;
  .title {
    line-height: 40px;
    font-size: 16px;
    font-weight: 500;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .desc {
    line-height: 24px;
    font-weight: 400;
    color: var(--vp-c-text-2);
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .top {
    position: absolute;
    top: 10px;
    right: 10px;
  }
}
</style>
