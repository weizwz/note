<template>
  <div id="tags">
    <div class="container">
      <h1>标签</h1>
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
  </div>
  <div id="posts">
    <div class="container">
      <h1><i />文章列表</h1>
      <div class="posts-wrapper">
        <el-row v-for="(item, index) of posts" :key="index" class="post" :gutter="20" >
          <el-col :xs="24" :sm="4" :md="3" class="post-date">
            <span class="post-date">{{ item.dateText[1] }}</span>
          </el-col>
          <el-col :xs="24" :sm="20" :md="21" class="post-details">
            <a :href="'../' + item.url">
              <span class="post-title">{{ item.title }}</span>
              <span class="post-abstract">摘要：{{ item.abstract }}</span>
            </a>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vitepress'
import { Post, data } from '../../utils/post.data'

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
    const tag = params.get('q')
    if (tag && tagsText.value.indexOf(tag) !== -1) {
      activeTag(tag)
    } else {
      activeTag(tagsText.value[0])
    }
};
onMounted(() => {
  window.addEventListener('popstate', handlePopState);
  handlePopState()
});
onBeforeUnmount(() => {
  window.removeEventListener('popstate', handlePopState)
});
</script>

<style lang="scss" scoped>
@use './index.scss';
</style>
