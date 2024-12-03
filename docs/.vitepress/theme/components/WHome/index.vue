<template>
  <div id="about">
    <div class="container">
      <el-row class="container-row" :gutter="20" >
        <el-col :xs="24" :sm="16" :md="18" class="container-left">
          <div class="title">
            <h1 class="about-title">
              <span>唯知笔记</span>
            </h1>
            <h1 class="about-desc">
              <span>一个知识分享网站</span>
            </h1>
          </div>
          <h2 class="about-tagline">知之为知之，不知为不知</h2>
          <div class="about-nav">
            <ul class="list-inline">
              <li v-for="(item, index) of navList" :key="index">
                <a href="" target="_blank">
                  <i :class="item.className"></i>
                  <span>{{ item.title }}</span>
                </a>
              </li>
            </ul>
          </div>
        </el-col>
        <el-col :xs="24" :sm="8" :md="6" class="container-right">
          <div class="hero-avatar">
            <img :src="withBase('head.png')" alt="head-avatar" />
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
  <div id="post">
    <div class="container">
      <el-row class="container-row" :gutter="20">
        <el-col v-for="i of 3" :key="i" :xs="24" :sm="8" :md="6">
          <div class="post-card">
            1
          </div>
        </el-col>
        <el-col  :xs="24" :md="6">
          <div class="post-card">
            2
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useData, withBase } from 'vitepress'

const navList = ref([
  { title: '前端笔记', className: 'web' },
  { title: '编码提效', className: 'code' },
  { title: '博客文档', className: 'blog' },
  { title: '资源分享', className: 'resource' },
  { title: '杂项记录', className: 'other' },
])

</script>
<style lang="scss" scoped>
@use './index.scss';
</style>
