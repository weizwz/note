<template>
  <div id="about">
    <div class="container">
      <el-row class="container-row" :gutter="20">
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
                  <i :class="'weiz-icon l ' + item.iconName" />
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
          <div class="hero-social">
            <ul>
              <li class="hero-social-item">
                <a class="social" href="https://github.com/weizwz" target="_blank"><i class="weiz-icon weiz-icon-github-main" /></a>
              </li>
              <li class="hero-social-item">
                <a class="social" href="https://gitee.com/weizwz" target="_blank"><i class="weiz-icon weiz-icon-gitee-main" /></a>
              </li>
              <li class="hero-social-item">
                <a class="social" href="https://www.cnblogs.com/weizwz" target="_blank"><i class="weiz-icon weiz-icon-cnblog-main" /></a>
              </li>
            </ul>
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
              <div class="desc">{{ item.abstract }}</div>
            </div>
          </div>
          <a v-else class="post-card" :href="item.url">
            <div class="post-container">
              <div :class="'weiz-icon xxl ' + (item.tags ? 'weiz-icon-' + item.tags.join(' weiz-icon-') : '')" />
              <div class="title">{{ item.title }}</div>
              <div class="desc">{{ item.abstract }}</div>
            </div>
          </a>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6">
          <div class="post-card statistic">
            <div class="post-container">
              <div class="number">{{ uv }}</div>
              <div class="desc">本站总访客<span id="busuanzi_value_site_uv" style="display: none;" /></div>
              <div class="desc-line"><span /></div>
              <div class="desc">本站总访问量<span id="busuanzi_value_site_pv" style="display: none;" /></div>
              <div class="number">{{ pv }}</div>
            </div>
          </div>
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
import { data } from '../../utils/post.data'
import { onMounted, ref } from 'vue'

const { frontmatter: fm } = useData()

const aboutData = fm.value.about as HomeAbout
let postData = ref<HomePost[]>([])
const skills = fm.value.skills.split(',')
const pv = ref('loading')

const postMerge = () => {
  const postLength = 3
  const fmLength = fm.value.post ? fm.value.post.length : 0
  postData.value = fm.value.post && fmLength >= postLength ? fm.value.post : (() => {
    const newPosts = data.posts.slice(0, postLength - fmLength)
    return newPosts.concat(fm.value.post || []) as unknown as HomePost
  })()
}

const formatNumber = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M' // 超过6位数，转换为百万单位
  } else {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') // 千分位格式化
  }
}

const uv = ref('loading')
let timeoutUV = 0
const getUV = () => {
  if (timeoutUV) clearTimeout(timeoutUV)
  timeoutUV = window.setTimeout(() => {
    const $UV = document.querySelector("#busuanzi_value_site_uv")
    if ($UV) {
      const text = $UV.innerHTML
      uv.value = formatNumber(text)
    } else {
      getUV()
    }
  }, 500)
}

let timeoutPV = 0
const getPV = () => {
  if (timeoutPV) clearTimeout(timeoutPV)
  timeoutPV = window.setTimeout(() => {
    const $PV = document.querySelector("#busuanzi_value_site_pv")
    const text = $PV?.innerHTML
    if ($PV && text) {
      pv.value = formatNumber(text)
    } else {
      getPV()
    }
  }, 500)
}

onMounted(() => {
  postMerge()
  getUV()
  getPV()
})
</script>
<style lang="scss" scoped>
@use './index.scss';
</style>
