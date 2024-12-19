<template>
  <Transition name="fade">
    <div v-show="showBackTop" class="vitepress-backTop-main" title="返回顶部" @click="scrollToTop()">
      <i class="weiz-icon xxl weiz-icon-backTop-main" />
    </div>
  </Transition>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

// 是否显示返回顶部
const showBackTop = ref(false)

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// 节流
function throttle(fn, delay = 100) {
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
  z-index: 1111;
  bottom: 32px;
  right: 10px;
  cursor: pointer;
  width: 40px;
  height: 40px;
  &:hover {
    opacity: 0.8;
  }
}

@media (min-width: 1280px) {
  .vitepress-backTop-main {
    position: static;
    margin-left: 20px;
  }
  .content .vitepress-backTop-main {
    display: none;
  }
}
@media (min-width: 768px) {
  .vitepress-backTop-main {
    right: 16px;
  }
}
</style>
