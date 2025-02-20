<template>
  <a v-if="props.noData" class="post-card post-card-no-data">
    <div class="post-container">
      <div class="weiz-icon weiz-icon-post xl" />
      <div class="post-loading">
        <weiz-loading />
      </div>
    </div>
  </a>
  <a v-else class="post-card" :href="(post?.baseUrl || '') + post.url">
    <div class="post-container">
      <div class="top" v-if="post.top" title="置顶">
        <i class="weiz-icon weiz-icon-post-top m"></i>
      </div>
      <div class="info">
        <div class="tags">
          <a class="tag" v-for="(item, index) of post.tags?.slice(0, 1)" :key="index" :href="go(item)">
            <span>#</span>
            {{ item }}
          </a>
        </div>
        <div class="date">{{ post.dateText ? formateDate(post.dateText[0]) : '' }}</div>
      </div>
      <div class="icon-wrapper">
        <div
          :class="
            'weiz-icon xxl weiz-icon-post ' +
            (post.tags ? 'weiz-icon-' + post.tags[0].toLocaleLowerCase().replace(/\./g, '') : '')
          " />
      </div>
      <div class="title">{{ post.title }}</div>
      <div class="desc">
        {{ post.abstract }}
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
import { HomePost } from '../type/WHome'
import { withBase } from 'vitepress'

export interface PostCard extends HomePost {
  baseUrl?: string
}

const props = defineProps<{ post?: PostCard; noData?: Boolean }>()
const post = props?.post as PostCard

const formateDate = (date: string) => {
  const currentYear = String(new Date().getFullYear())
  if (date.indexOf(currentYear) === 0) {
    date = date.replace(currentYear + '/', '')
  }
  return date
}

const go = (tag: string) => {
  return withBase('/pages/tags?q=' + encodeURIComponent(tag))
}
</script>

<style lang="scss" scoped>
.weiz-post .post-card.post-card-no-data,
.weiz-tag .post-card.post-card-no-data {
  min-height: 215px;
}
.post-card {
  display: flex;
  height: 100%;
  border: solid 1px var(--vp-c-bg-soft);
  border-radius: var(--weiz-card-border-radius);
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-brand-1);
  transition: var(--weiz-transition);
  --post-padding: 24px;
  &:not(.statistic):hover {
    color: var(--vp-c-brand-1);
    box-shadow: 0 0.5em 0.5em 0 var(--weiz-primary-color);
    transform: translateY(-0.5em);
  }
  &.post-card-no-data {
    min-height: 200px;
    box-sizing: border-box;
    position: relative;
    .post-container {
      width: 100%;
      height: 100%;
    }
    .weiz-icon {
      position: absolute;
      top: 24px;
      left: 24px;
    }
    .post-loading {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
    }
  }
}

.post-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
  .icon-wrapper {
    padding: calc(var(--post-padding) / 2) var(--post-padding) 0;
    display: flex;
  }
  .top {
    position: absolute;
    top: 5px;
    right: 6px;
  }
  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 var(--post-padding);
    background: rgba(var(--weiz-primary-color-rgb), 0.1);
    border-radius: var(--weiz-card-border-radius) var(--weiz-card-border-radius) 0 0;
    height: 32px;
    line-height: 32px;
    font-size: 12px;
    font-weight: 500;
    color: var(--vp-c-text-3);
  }
  .title {
    padding: calc(var(--post-padding) / 4) var(--post-padding) calc(var(--post-padding) / 4);
    line-height: 24px;
    font-size: 16px;
    font-weight: 500;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .tags {
    margin-right: calc(var(--post-padding) / 2);
    font-size: 12px;
    font-weight: 500;
    display: flex;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    .tag {
      color: var(--vp-c-text-3);
      text-decoration: none;
      margin-right: 10px;
      &:last-child {
        margin-right: 0;
      }
      &:hover {
        color: var(--weiz-primary-color);
      }
      > span {
        font-size: 0.8em;
      }
    }
  }
  .desc {
    padding: 0 var(--post-padding);
    margin-bottom: calc(var(--post-padding) - 3px);
    line-height: 24px;
    font-size: 13px;
    font-weight: 400;
    color: var(--vp-c-text-3);
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
