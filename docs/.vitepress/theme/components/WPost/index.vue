<template>
  <div class="VPDoc">
    <div class="vp-doc">
      <div class="container">
        <div class="title">
          <h1>文章</h1>
        </div>
        <div id="post">
          <div v-for="(year, index) of yearKeys" :key="index" class="year-post">
            <h3>{{ year }}</h3>
            <el-row class="container-row" :gutter="20">
              <el-col v-for="item of metaPost[year]" :key="item.url" :xs="24" :sm="12" :md="6">
                <weiz-post-card :post="Object.assign({baseUrl: '../'}, item)"/>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { Post, Year, data } from '../../utils/post.data'

const metaPost: Year = data.years
const yearKeys = Object.keys(metaPost).reverse()


</script>

<style lang='scss' scoped>
@use './index.scss';
</style>
