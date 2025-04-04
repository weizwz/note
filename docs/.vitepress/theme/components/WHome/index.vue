<template>
  <div id="main">
    <div id="about">
      <div class="container">
        <el-row class="container-row" :gutter="24">
          <el-col :xs="24" :sm="12" :md="12" class="container-left">
            <div class="title">
              <h1 class="about-title">
                <span>{{ aboutData.title }}</span>
              </h1>
            </div>
            <div class="info-wrapper">
              <div class="avatar-wrapper">
                <img
                  :src="aboutData.logo.indexOf('http') === 0 ? aboutData.logo : withBase(aboutData.logo)"
                  width="40"
                  alt="head-avatar" />
              </div>
              <div class="info-desc-wrapper">
                <h2 class="about-tagline">{{ aboutData.tagline }}</h2>
                <ul class="social-wrapper">
                  <li class="hero-social-item">
                    <a class="social" href="https://github.com/weizwz" target="_blank">
                      <i class="weiz-icon weiz-icon-github main xm"/>
                    </a>
                  </li>
                  <li class="hero-social-item">
                    <a class="social" href="https://gitee.com/weizwz" target="_blank">
                      <i class="weiz-icon weiz-icon-gitee main xm"/>
                    </a>
                  </li>
                  <li class="hero-social-item">
                    <a class="social" href="https://www.cnblogs.com/weizwz" target="_blank">
                      <i class="weiz-icon weiz-icon-cnblog main xm"/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" class="container-right">
            <el-carousel
              height="240px"
              direction="vertical"
              :autoplay="true"
            >
              <el-carousel-item>
                <div class="carousel-item carousel-features carousel-1">
                  <h3 v-for="(item, index) of aboutData.desc.split(' ')" :key="index">{{ item }}</h3>
                </div>
              </el-carousel-item>
            </el-carousel>
          </el-col>
        </el-row>
      </div>
    </div>
    <div id="post">
      <div class="container">
        <el-row class="container-row" :gutter="24">
          <el-col v-if="cardLength <= 0" v-for="idx of 8" :key="idx" class="statistic-wrapper" :xs="24" :sm="12" :md="6">
            <weiz-post-card :noData="true" />
          </el-col>
          <el-col v-else v-for="(item, index) of postData" :key="index" class="statistic-wrapper" :xs="24" :sm="12" :md="6">
            <template v-if="item.type && item.type === 'busuanzi'">
              <weiz-statistics />
            </template>
            <a v-else-if="item.type && item.type === 'more'" class="post-card post-more" href="pages/posts">
              <div class="post-container">
                <div class="post-more-container">
                  <span><i class="weiz-icon weiz-icon-arrow-right xl"></i></span>
                  <span>更多文章</span>
                </div>
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
            :style="'--swiper-animation-time: ' + tags.length * 3 + 's'">
            <div class="swiper-item" v-for="(item, index) of tags" :key="index">
              <a class="tag" :href="'pages/tags?q=' + encodeURIComponent(item)">{{ item }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <WDocFooter />
</template>
<script setup lang="ts">
import { useData, withBase } from 'vitepress'
import { onMounted, ref } from 'vue'
import WDocFooter from '../WDocFooter.vue'
import { HomeAbout, HomePost } from '../../type/WHome'
import { Post, postsData, postsTagData } from '../../../utils/post'
import { getRandomElement } from '../../../utils/tools'

const { frontmatter: fm } = useData()

const aboutData = fm.value.about as HomeAbout
let posts = ref<Post[]>([])
let postData = ref<HomePost[]>([])
const tags = ref<string[]>([])

const cardLength = ref(0)
const lookHref = ref(withBase('editor/vscode/vscode-siliconflow'))

const postMerge = () => {
  const postLength = 6
  const fmLength = fm.value.post ? fm.value.post.length : 0
  let postLoadingData: HomePost[] = []
  postLoadingData =
    fm.value.post && fmLength >= postLength
      ? fm.value.post.map((item) => {
          return item
        })
      : (() => {
          const newPosts = posts.value.slice(0, postLength)
          let mdPosts = fm.value.post || newPosts
          // 过滤重复数据
          if (fmLength > 0) {
            // 补全首页数据 docs/index.md
            const fullPost = fm.value.post.map(item => {
              // 在第二个数组中查找对应的完整信息
              const fullInfo = posts.value.find(fullItem => fullItem.url === item.url)
              // 如果找到了对应的信息，合并到当前对象中
              if (fullInfo) {
                return { ...fullInfo, ...item  }
              }
              // 如果没有找到，返回原始对象
              return item
            });

            // 合并两个数组并过滤掉重复的数据
            const combinedArray = [...fullPost, ...newPosts]
            mdPosts = combinedArray.filter((item, index, self) =>
              index === self.findIndex(t => (
                t.url === item.url
              ))
            )
            // 没有重复数据，长度会超过 postLength
            if (mdPosts.length > postLength) {
              mdPosts = mdPosts.slice(0, postLength)
            }
          }
          return mdPosts
        })()
  // 第4张卡片插入卜算子统计
  postLoadingData.splice(3, 0, {
    title: '统计访问量',
    type: 'busuanzi',
    abstract: '统计访问量'
  })
  // 第8张卡片插入卜算子统计
  postLoadingData.splice(7, 0, {
    title: '更多文章',
    type: 'more',
    abstract: '更多文章导航'
  })
  postData.value = postLoadingData
  cardLength.value = postLoadingData.length
}

const postRandom = () => {
  const post = getRandomElement(posts.value)
  lookHref.value = post ? post.url : ''
}

onMounted(async() => {
  posts.value = await postsData()
  const tagsData = postsTagData(posts.value)
  tags.value = Object.keys(tagsData)
  postMerge()
  postRandom()
})
</script>
<style lang="scss" scoped>
@use './index.scss';
</style>

<style lang="scss">
.weiz-home {
  --weiz-home-margin: 48px;
  --weiz-home-padding: calc(var(--weiz-home-margin) / 2);
  --weiz-home-padding-2: calc(var(--weiz-home-margin) / 4);
  .post-container .desc {
    -webkit-line-clamp: 2;
    line-clamp: 2;
  }
  .el-carousel {
    --el-carousel-indicator-height: 4px;
    .el-carousel__button {
      border-radius: 8px;
      background: var(--weiz-primary-color);
    }
    .el-carousel__indicators--vertical {
      transform: translate(var(--weiz-home-padding-2), -50%);
    }
  }
}
</style>
