<template>
  <Transition name="fade">
    <div v-show="showBackTop" class="vitepress-backTop-main" title="返回顶部" @click="scrollToTop()">
      <i class="weiz-icon weiz-icon-backTop xxl main" />
    </div>
  </Transition>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

// 是否显示返回顶部
const showBackTop = ref(false)

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// 节流
const throttle = (fn, delay = 100) => {
  let lastTime = 0
  return function () {
    let nowTime = +new Date()
    if (nowTime - lastTime > delay) {
      fn.apply(this, arguments)
      lastTime = nowTime
    }
  }
}
const onScroll = throttle(() => (showBackTop.value = Boolean(window.scrollY > 100)))

// 监听滚动事件
onMounted(() => window.addEventListener('scroll', onScroll))

// 移除监听事件
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<style lang="css" scoped>
.vitepress-backTop-main {
  position: fixed;
  z-index: var(--weiz-index-backTop);
  bottom: var(--weiz-spacing-8xl);
  right: var(--weiz-spacing-8xl);
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--vp-c-bg);
  box-shadow: 0 0.5em 0.5em -0.25em var(--weiz-primary-color);
  transition: var(--weiz-transition);
  &:hover {
    opacity: 0.9;
  }
}
</style>
