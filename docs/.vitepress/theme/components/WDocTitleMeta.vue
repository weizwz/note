<template>
  <div class="weiz-title-meta">
    <div class="tags">
      <div class="updated">
        <i class="tags-icon updated-icon"></i>
        <span>更新于 {{ date }}</span>
      </div>
      <div class="word">
        <i class="tags-icon word-icon"></i>
        <span>字数总计 {{ wordCount }}</span>
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
    > div {
      display: flex;
      align-items: center;
      margin-right: 10px;
    }
  }
  .tags-icon {
    width: 18px;
    height: 18px;
    color: currentColor;
    margin-right: 2px;
    &.updated-icon {
      content: var(--weiz-icon-updated);
    }
    &.word-icon {
      content: var(--weiz-icon-word);
    }
  }
}
</style>
