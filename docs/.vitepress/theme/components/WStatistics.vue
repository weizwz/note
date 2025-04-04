<template>
  <div class="statistics">
    <div class="title-wrapper">
      <div class="title">
        <span>访问统计</span>
        <span class="title-hover">访问统计</span>
      </div>
      <i class="weiz-icon weiz-icon-chart-line main xxm"></i>
    </div>
    <div class="statistics-main">
      <div class="statistics-wrapper">
        <span class="statistics-title">总访问量</span>
        <span class="statistics-pv">{{ pv }}</span>
      </div>
      <div class="chart pv-wrapper">
        <div class="pv-num" style="width: 75%;"></div>
      </div>
      <div class="statistics-wrapper">
        <span class="statistics-title">独立访客</span>
        <span class="statistics-uv">{{ uv }}</span>
      </div>
      <div class="chart uv-wrapper">
        <div class="uv-num" style="width: 50%;"></div>
      </div>
    </div>
    <span id="busuanzi_value_site_pv" style="display: none" />
    <span id="busuanzi_value_site_uv" style="display: none" />
  </div>
</template>

<script setup lang='ts'>
import { onMounted, ref } from 'vue'
import { countTransK } from '../../utils/tools'

const pv = ref('loading')
const uv = ref('loading')

let timeoutUV = 0
const getUV = () => {
  if (timeoutUV) clearTimeout(timeoutUV)
  timeoutUV = window.setTimeout(() => {
    const $UV = document.querySelector('#busuanzi_value_site_uv')
    const text = $UV?.innerHTML
    if ($UV && text) {
      const text = $UV.innerHTML
      uv.value = countTransK(parseInt(text))
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
      pv.value = countTransK(parseInt(text))
    } else {
      getPV()
    }
  }, 500)
}

onMounted(async() => {
  getUV()
  getPV()
})
</script>

<style lang='scss' scoped>
.statistics {
  width: 100%;
  display: inline-block;
  border-radius: var(--weiz-card-border-radius);
  background-color: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-weight: var(--weiz-font-weight-medium);
  padding: var(--weiz-spacing-6xl);
  box-shadow: var(--weiz-shadow);
  transition: all cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.6s;
  &:hover {
    color: var(--vp-c-text-1);
    transform: scale(1.03);
    box-shadow: var(--weiz-shadow-hover);
    .title .title-hover {
      width: 100%;
    }
  }
  .title-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--weiz-spacing-6xl);
  }
  .title {
    font-size: var(--weiz-font-size-st);
    line-height: var(--weiz-text-st-line-height);
    font-weight: var(--weiz-font-weight-semibold);
    margin-bottom: var(--weiz-spacing-2xl);
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    .title-hover {
      position: absolute;
      left: 0;
      top: 0;
      width: 0;
      overflow: hidden;
      background-color: var(--vp-c-bg);
      color: var(--weiz-primary-color);
      transition: width 0.4s ease-in-out;
    }
  }
  .statistics-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--weiz-spacing-2xl);
  }
  .chart {
    height: calc(var( --weiz-spacing) * 2);
    border-radius: calc(var( --weiz-spacing) * 2);
    background-color: var(--vp-c-gray-3);
    > div {
      height: 100%;
      border-radius: calc(var( --weiz-spacing) * 2);
      background-color: var(--weiz-primary-color);
    }
  }
  .pv-wrapper {
    margin-bottom: var(--weiz-spacing-4xl);
  }
  .uv-wrapper {
    margin-bottom: var(--weiz-spacing-2xl);
  }
  .statistics-title{
    &+span {
      font-size: var(--weiz-font-size-st);
      line-height: var(--weiz-text-st-line-height);
      font-weight: var(--weiz-font-weight-semibold);
    }
  }
}
</style>
