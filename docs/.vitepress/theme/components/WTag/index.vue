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
import { ref } from 'vue'
import { data } from '../../utils/post.data'

const tags = ref(data.tags)
const tagsText = ref(Object.keys(tags.value))

let activeTag = ref(tagsText.value[0])
let posts = ref(tags.value[activeTag.value])


const tapTag = (tag) => {
  activeTag.value = tag
  posts.value = tags.value[tag]
}

</script>

<style lang="scss" scoped>
@use './index.scss';
</style>
