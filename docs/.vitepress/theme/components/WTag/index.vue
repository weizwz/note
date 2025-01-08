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
              :style="{ fontSize: 1 + tags[item].length * 0.05 + 'em' }"
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
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vitepress'
import { Post, data } from '../../../utils/post.data'

const routeData = useRouter()
const tags = ref(data.tags)
const tagsText = ref(Object.keys(tags.value))

let currentTag = ref('')
let posts = ref<Post[]>([])

const activeTag = (tag) => {
  currentTag.value = tag
  posts.value = tags.value[tag]
  routeData.go(routeData.route.path + '?q=' + tag)
}

// 监听url里参数变化
const handlePopState = () => {
  const params = new URLSearchParams(window.location.search)
  let tag = params.get('q')
  tag = tag && tagsText.value.indexOf(tag) !== -1 ? tag : tagsText.value[0]
  currentTag.value = tag
  posts.value = tags.value[tag]
}
onMounted(() => {
  handlePopState()
  window.addEventListener('popstate', handlePopState)
})
onBeforeUnmount(() => {
  window.removeEventListener('popstate', handlePopState)
})
</script>

<style lang="scss" scoped>
@use './index.scss';
</style>
