<template>
  <div class="weiz-title-meta">
    <div class="tags">
      <div class="created" title="发表时间">
        <i class="weiz-icon weiz-icon-created gray" />
        <span> {{ firstCommit }}</span>
      </div>
      <div class="updated" title="更新时间">
        <i class="weiz-icon weiz-icon-updated gray" />
        <span> {{ lastUpdated }}</span>
      </div>
      <div class="word" title="字数统计">
        <i class="weiz-icon weiz-icon-word gray" />
        <span> {{ wordCount }}</span>
      </div>
      <div class="reader" title="阅读次数">
        <i class="weiz-icon weiz-icon-user gray"></i>
        <span> <span id="busuanzi_value_page_pv"></span></span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { ref, onMounted } from 'vue'
import { countWord } from '../utils/tools'

const { frontmatter } = useData()
const wordCount = ref('')
const firstCommit = ref('')
const lastUpdated = ref('')

onMounted(() => {
  console.log(frontmatter.value)

  firstCommit.value = new Date(frontmatter.value.firstCommit!).toLocaleDateString()
  lastUpdated.value = new Date(frontmatter.value.lastUpdated!).toLocaleDateString()
  const docDomContainer = window.document.querySelector('#VPContent')
  const words = docDomContainer?.querySelector('.content-container .main')?.textContent || ''
  wordCount.value = countWord(words)
})
</script>

<style lang="scss" scoped>
.weiz-title-meta {
  .tags {
    display: flex;
    flex-wrap: wrap;
    margin-top: 6px;
    color: var(--vp-c-text-2);
    font-weight: 500;
    line-height: 18px;
    word-break: keep-all;
    > div {
      display: flex;
      align-items: center;
      margin-top: 10px;
      margin-right: 16px;
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
