<template>
  <div id="tags">
    <div class="container">
      <h1>标签</h1>
      <div class="tags-wrapper">
        <div
          v-for="(item, index) of tagsText"
          :key="index"
          :style="{ fontSize: 1 + tags[item].length * 0.05 + 'em' }"
          @click="tapTag(item)"
          v-bind:class="{ tag: true, 'tag-active': activeTag === item }">
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
        <div v-for="(item, index) of posts" :key="index" class="post">
          {{ item.title }}
          <span class="post-date">{{ item.dateText[1] }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { data } from '../../utils/post.data'

const tags = ref(data.tags)
const tagsText = ref(Object.keys(tags.value))

let activeTag = ref(tagsText.value[0])
let posts = ref(tags.value[activeTag.value])

console.log(posts);


const tapTag = (tag) => {
  activeTag.value = tag
  posts.value = tags.value[tag]
}

</script>

<style lang="scss" scoped>
@use './index.scss';
</style>
