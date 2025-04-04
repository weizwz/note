<template>
  <div id="main">
    <div class="title">
      <h1>
        全部文章<span> - {{ postLength || '' }} 篇</span>
      </h1>
    </div>
    <div id="post">
      <weiz-post-list :postList="postList" />
    </div>
  </div>
  <WDocFooter />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import WDocFooter from '../WDocFooter.vue'
import { postsData, postsYearData, Year } from '../../../utils/post'
import { PostList } from '../../type/WPost'

let postLength = ref(0)
let posts = ref<Year>({})
let postList = ref<PostList[]>([{
  title: new Date().getFullYear().toString(),
  posts: []
}])

const getPost = () => {
  let _list: PostList[] = []
  for (const key in posts.value) {
    _list.push({
      title: key,
      posts: posts.value[key]
    })
  }
  postList.value = _list.reverse()
}

const getPostLength = () => {
  let length = 0
  postList.value.forEach((item) => {
    length += item.posts.length
  })
  postLength.value = length
}

onMounted(async() => {
  const _posts = await postsData()
  posts.value = postsYearData(_posts)
  getPost()
  getPostLength()
})
</script>

<style lang="scss" scoped>
.title {
  margin-bottom: var(--weiz-spacing-8xl);
  h1 span {
    font-size: var(--weiz-font-size-st);
    color: var(--vp-c-text-3);
  }
}

</style>
