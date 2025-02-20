<template>
  <div class="VPDoc">
    <div class="vp-doc">
      <div class="container">
        <div class="title">
          <h1>
            全部文章<sub>{{ postLength || '' }}</sub>
          </h1>
        </div>
        <div id="post">
          <div  v-if="postLength === 0" class="year-post">
            <h3>{{ new Date().getFullYear() }}</h3>
            <el-row class="container-row" :gutter="24">
              <el-col v-for="idx of 8" :key="idx" :xs="24" :sm="12" :md="6">
                <weiz-post-card :noData="true" />
              </el-col>
            </el-row>
          </div>
          <div v-else v-for="(year, index) of yearKeys" :key="index" class="year-post">
            <h3>{{ year }}</h3>
            <el-row class="container-row" :gutter="24">
              <el-col v-for="item of metaPost[year]" :key="item.url" :xs="24" :sm="12" :md="6">
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
import { onMounted, ref } from 'vue'
import { Year, data } from '../../../utils/post.data'

let metaPost = ref<Year>({})
let postLength = ref(0)
let yearKeys = ref<string[]>([])

const getPost = () => {
  metaPost.value = data.years
  postLength.value = data.posts.length
  yearKeys.value = Object.keys(metaPost.value).reverse()
}

onMounted(() => {
  getPost()
})
</script>

<style lang="scss" scoped>
@use './index.scss';
</style>
