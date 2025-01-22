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
            <img
              :src="aboutData.logo.indexOf('http') === 0 ? aboutData.logo : withBase(aboutData.logo)"
              alt="head-avatar" />
          </div>
          <div class="hero-social">
            <ul>
              <li class="hero-social-item">
                <a class="social" href="https://github.com/weizwz" target="_blank"
                  ><i class="weiz-icon weiz-icon-github main"
                /></a>
              </li>
              <li class="hero-social-item">
                <a class="social" href="https://gitee.com/weizwz" target="_blank"
                  ><i class="weiz-icon weiz-icon-gitee main"
                /></a>
              </li>
              <li class="hero-social-item">
                <a class="social" href="https://www.cnblogs.com/weizwz" target="_blank"
                  ><i class="weiz-icon weiz-icon-cnblog main"
                /></a>
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
        <el-col v-if="cardLength <= 0" v-for="idx of 8" :key="idx" class="statistic-wrapper" :xs="24" :sm="12" :md="6">
          <weiz-post-card :noData="true" />
        </el-col>
        <el-col v-for="(item, index) of postData" :key="index" class="statistic-wrapper" :xs="24" :sm="12" :md="6">
          <div v-if="item.type && item.type === 'busuanzi'" class="post-card statistic">
            <div class="post-container">
              <div class="number">{{ uv }}</div>
              <div class="desc">本站总访客<span id="busuanzi_value_site_uv" style="display: none" /></div>
              <div class="desc-line"><span /></div>
              <div class="desc">本站总访问量<span id="busuanzi_value_site_pv" style="display: none" /></div>
              <div class="number">{{ pv }}</div>
            </div>
          </div>
          <a v-if="item.type && item.type === 'busuanzi'" class="post-more" href="pages/posts">
            <div class="post-more-container">
              <span>查看更多</span>
              <span><i class="weiz-icon weiz-icon-arrow-right xxxl white"></i></span>
            </div>
          </a>
          <weiz-post-card v-else :post="item" />
        </el-col>
      </el-row>
    </div>
  </div>
  <div id="tag">
    <div class="swiper">
      <div class="swiper-wrapper">
        <div
          class="swiper-container"
          v-for="(i, idx) of 3"
          :key="idx"
          :style="'--swiper-animation-time: ' + tags.length * 5 + 's'">
          <div class="swiper-item" v-for="(item, index) of tags" :key="index">
            <a class="tag" :href="'pages/tags?q=' + item">{{ item }}</a>
          </div>
        </div>
      </div>
      <div class="shadow swiper-left-shadow"></div>
      <div class="shadow swiper-right-shadow"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useData, withBase } from 'vitepress'
import { HomeAbout, HomePost } from '../../type/WHome'
import { data } from '../../../utils/post.data'
import { onMounted, ref } from 'vue'

const { frontmatter: fm } = useData()

const aboutData = fm.value.about as HomeAbout
let postData = ref<HomePost[]>([])
const tags = fm.value.tags ? fm.value.tags.split(',') : Object.keys(data.tags)

const pv = ref('loading')
const uv = ref('loading')
const cardLength = ref(0)

const postMerge = () => {
  const postLength = 7
  const fmLength = fm.value.post ? fm.value.post.length : 0
  postData.value =
    fm.value.post && fmLength >= postLength
      ? fm.value.post
      : (() => {
          const newPosts = data.posts.slice(0, postLength - fmLength)
          const mdPosts = fm.value.post || []
          let showPosts = mdPosts.concat(newPosts) as unknown as HomePost[]
          // 第四张卡片插入卜算子统计
          showPosts.splice(3, 0, {
            title: '统计访问量',
            type: 'busuanzi',
            abstract: '统计访问量'
          })
          cardLength.value = showPosts.length
          return showPosts
        })()
}

const formatNumber = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M' // 超过6位数，转换为百万单位
  } else {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') // 千分位格式化
  }
}

let timeoutUV = 0
const getUV = () => {
  if (timeoutUV) clearTimeout(timeoutUV)
  timeoutUV = window.setTimeout(() => {
    const $UV = document.querySelector('#busuanzi_value_site_uv')
    const text = $UV?.innerHTML
    if ($UV && text) {
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
    const $PV = document.querySelector('#busuanzi_value_site_pv')
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
