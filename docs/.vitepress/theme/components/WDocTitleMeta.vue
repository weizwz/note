<template>
  <div class="weiz-title-meta">
    <div class="tags">
      <div class="updated">
        <i class="weiz-icon weiz-icon-updated gray"/>
        <span>更新于 {{ date }}</span>
      </div>
      <div class="word">
        <i class="weiz-icon weiz-icon-word gray"/>
        <span>总字数 {{ wordCount }}</span>
      </div>
      <!-- 由于卜算子对单页面统计不正确，先搁置 -->
      <div class="reader">
        <i class="weiz-icon weiz-icon-eye gray"></i>
        <span>阅读量 <span id="busuanzi_value_page_pv"></span></span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { ref, onMounted } from 'vue'
import { countWord } from '../utils/tools'

const { page } = useData()
const wordCount = ref(0)
const date = ref('')

onMounted(() => {
  date.value = (new Date(page.value.lastUpdated!)).toLocaleDateString()
  const docDomContainer = window.document.querySelector('#VPContent')
  const words = docDomContainer?.querySelector('.content-container .main')?.textContent || ''
  wordCount.value = countWord(words)
})
</script>

<style lang="scss" scoped>
.weiz-title-meta {
  .tags {
    display: flex;
    margin-top: 10px;
    color: var(--vp-c-text-2);
    font-weight: 500;
    line-height: 18px;
    word-break: keep-all;
    > div {
      display: flex;
      align-items: center;
      margin-right: 10px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .weiz-icon {
    margin-right: 2px;
  }
}
</style>
