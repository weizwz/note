<template>
  <div id="about">
    <div class="container">
      <el-row class="container-row" :gutter="20" >
        <el-col :xs="24" :sm="16" :md="18" class="container-left">
          <div class="title">
            <h1 class="about-title">
              <span>{{ aboutData.title }}</span>
            </h1>
            <h1 class="about-desc">
              <span>{{ aboutData.desc }}</span>
            </h1>
          </div>
          <h2 class="about-tagline">{{ aboutData.tagline }}</h2>
          <div class="about-nav">
            <ul class="list-inline">
              <li v-for="(item, index) of aboutData.links" :key="index">
                <a :href="item.link">
                  <i :class="item.iconName"></i>
                  <span>{{ item.title }}</span>
                </a>
              </li>
            </ul>
          </div>
        </el-col>
        <el-col :xs="24" :sm="8" :md="6" class="container-right">
          <div class="hero-avatar">
            <img :src="withBase(aboutData.logo)" alt="head-avatar" />
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
  <div id="post">
    <div class="container">
      <el-row class="container-row" :gutter="20">
        <el-col v-for="(item, index) of postData" :key="index" :xs="24" :sm="12" :md="6">
          <div v-if="item.type && item.type === 'card'" class="post-card statistic">
            <div class="post-container">
              <div class="number">{{ item.title }}</div>
              <div class="desc">{{ item.desc }}</div>
            </div>
          </div>
          <div v-else-if="item.type && item.type === 'busuanzi'" class="post-card statistic">
            <div class="post-container">
              <div class="number"><span id="busuanzi_value_site_uv" /></div>
              <div class="desc">本站当前访问量 <span id="busuanzi_value_site_pv" /> 人次</div>
            </div>
          </div>
          <a v-else class="post-card" :href="item.link">
            <div class="post-container">
              <div :class="'icon ' + item.iconName" />
              <div class="title">{{ item.title }}</div>
              <div class="desc">{{ item.desc }}</div>
            </div>
          </a>
        </el-col>
      </el-row>
    </div>
  </div>
  <div id="skill">
    <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-item" v-for="(item, index) of skills" :key="index">
          <h2>{{ item }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useData, withBase } from 'vitepress'
import { HomeAbout, HomePost } from '../../type/WHome'

const { frontmatter: fm } = useData()

const aboutData = fm.value.about as HomeAbout
const postData = fm.value.post as HomePost[]
const skills = fm.value.skills.split(',')

</script>
<style lang="scss" scoped>
@use './index.scss';
</style>
