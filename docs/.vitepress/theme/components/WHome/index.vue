<template>
  <div id="about">
    <div class="container">
      <el-row class="container-row">
        <el-col :span="16" class="container-left">
          <div class="title">
            <h1 class="about-title">
              <span>唯知笔记</span>
            </h1>
            <h1 class="about-desc">
              <span>一个知识分享网站</span>
            </h1>
          </div>
          <h2 class="about-tagline">知之为知之，不知为不知</h2>
          <div class="avatar-icon">
            <ul class="list-inline">
              <li>
                <a href="https://github.com/weizwz" target="_blank">
                  <i class="github"></i>
                  <span>Github</span>
                </a>
              </li>
              <li>
                <a href="https://gitee.com/weizwz" target="_blank">
                  <i class="gitee"></i>
                  <span>Gitee</span>
                </a>
              </li>
              <li>
                <a href="https://www.cnblogs.com/weizwz" target="_blank">
                  <i class="cnblogs"></i>
                  <span>博客园</span>
                </a>
              </li>
            </ul>
          </div>
        </el-col>
        <el-col :span="8" class="container-right">
          <div class="hero-avatar">
            <img src="../../../../public/head.png" alt="" />
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import { useData } from 'vitepress'
const { title, theme, page, frontmatter } = useData()

onMounted(()=> {
  window.document.title = title.value
})
</script>
<style lang="scss" scoped>
@use './index.scss';
</style>
