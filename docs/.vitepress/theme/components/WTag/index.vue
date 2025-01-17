<template>
  <div class="VPDoc">
    <div class="vp-doc">
      <div class="container">
        <div id="tags">
          <h1>标签列表</h1>
          <div class="tags-wrapper">
            <div
              v-for="(item, index) of tagsText"
              :key="index"
              :style="{ fontSize: minSize + (tags[item].length - 1) * unit + 'em' }"
              @click="activeTag(item)"
              v-bind:class="{ tag: true, 'tag-active': currentTag === item }">
              {{ item }}
              <span class="tag-length">{{ tags[item].length }}</span>
            </div>
          </div>
        </div>
        <div id="posts">
          <h3><i class="weiz-icon weiz-icon-post-fill l" />文章列表</h3>
          <div class="posts-wrapper">
            <el-row class="container-row" :gutter="20">
              <el-col v-for="item of posts" :key="item.url" :xs="24" :sm="12" :md="6">
                <weiz-post-card :post="Object.assign({ baseUrl: '../' }, item)" />
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { useRouter } from 'vitepress'
import { Post, data } from '../../../utils/post.data'

const routeData = useRouter()
const tags = ref(data.tags)
const tagsText = ref(Object.keys(tags.value))
let maxPost = 1

const getMaxPost = () => {
  for (const item in tags.value) {
    if (tags.value[item].length > maxPost) maxPost = tags.value[item].length
  }
  countSize()
}

// 计算文字大小，最大为2em，最小为1em
const maxSize = 2
const minSize = ref(1)
const unit = ref(0.1)
const countSize = () => {
  unit.value = Math.floor(((maxSize - minSize.value) / maxPost) * 100) / 100
}

let currentTag = ref('')
let posts = ref<Post[]>([])

const activeTag = (tag) => {
  routeData.go(routeData.route.path + '?q=' + tag)
}

// 监听url里参数
const handleUrlState = () => {
  const params = new URLSearchParams(window.location.search)
  let tag = params.get('q')
  tag = tag && tagsText.value.indexOf(tag) !== -1 ? tag : tagsText.value[0]
  currentTag.value = tag
  posts.value = tags.value[tag]
}

onMounted(() => {
  getMaxPost()
  handleUrlState()
  window.addEventListener('popstate', handleUrlState)

  const originalReplaceState = history.replaceState;
  history.replaceState = function(state, title, url) {
    originalReplaceState.apply(history, arguments);
    nextTick(() => {
      handleUrlState()
    })
  };
})

onBeforeUnmount(() => {
  window.removeEventListener('popstate', handleUrlState)
})
</script>

<style lang="scss" scoped>
@use './index.scss';
</style>
