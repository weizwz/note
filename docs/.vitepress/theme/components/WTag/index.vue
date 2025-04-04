<template>
  <div id="main">
    <div id="tags">
      <h1>标签列表</h1>
      <div class="tags-wrapper">
        <div
          v-for="(item, index) of tagsText"
          :key="index"
          @click="activeTag(item)"
          v-bind:class="{ tag: true, 'tag-active': currentTag === item }">
          {{ item }}
          <span class="tag-length">{{ tags[item].length }}</span>
        </div>
      </div>
    </div>
    <div id="posts">
      <weiz-post-list :postList="postList" />
    </div>
  </div>
  <WDocFooter />
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vitepress'
import WDocFooter from '../WDocFooter.vue'
import { postsData, postsTagData, Tag } from '../../../utils/post'
import { PostList } from '../../type/WPost'

const routeData = useRouter()
const tags = ref<Tag>({})
const tagsText = ref<string[]>([])

let currentTag = ref('')
let postList = ref<PostList[]>([{
  title: '文章列表',
  posts: []
}])

const activeTag = (tag) => {
  routeData.go(routeData.route.path + '?q=' + encodeURIComponent(tag))
}

// 监听url里参数
const handleUrlState = () => {
  const params = new URLSearchParams(window.location.search)
  let tag = params.get('q') ? decodeURIComponent(params.get('q') as string) : ''
  tag = tagsText.value.indexOf(tag) !== -1 ? tag : tagsText.value[0]
  currentTag.value = tag
  postList.value[0].posts = tags.value[tag]
}

onMounted(async () => {
  const _posts = await postsData()
  tags.value = postsTagData(_posts)
  tagsText.value = Object.keys(tags.value)
  handleUrlState()
  window.addEventListener('popstate', handleUrlState)

  const originalReplaceState = history.replaceState;
  history.replaceState = function(state, title, url) {
    originalReplaceState.apply(history, arguments);
    setTimeout(() => {
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
