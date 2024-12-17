<template>
  <div class="weiz-title-meta">
    <div class="tags">
      <div class="updated">
        <i class="tags-icon updated-icon"></i>
        <span>更新于 {{ date }}</span>
      </div>
      <div class="word">
        <i class="tags-icon word-icon"></i>
        <span>总字数 {{ wordCount }}</span>
      </div>
      <!-- 由于卜算子对单页面统计不正确，先搁置 -->
      <!-- <div class="reader">
        <i class="tags-icon eye-icon"></i>
        <span>阅读量 <span id="busuanzi_value_page_pv"></span></span>
      </div> -->
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
  .tags-icon {
    width: 18px;
    height: 18px;
    color: currentColor;
    margin-right: 2px;
    &.updated-icon {
      content: var(--weiz-icon-updated-gray);
    }
    &.word-icon {
      content: var(--weiz-icon-word-gray);
    }
    &.eye-icon {
      content: var(--weiz-icon-eye-gray);
    }
  }
}
</style>
