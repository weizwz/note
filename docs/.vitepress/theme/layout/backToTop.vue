<template>
  <Transition name="fade">
    <div v-show="showBackTop" class="vitepress-backTop-main" title="返回顶部" @click="scrollToTop()">
      <svg t="1731072264985" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="23170" width="256" height="256"><path d="M1003.52 549.546667l-477.866667-477.866667c-6.826667-6.826667-17.066667-6.826667-23.893333 0l-477.866667 477.866667c-3.413333 3.413333-3.413333 6.826667-3.413333 13.653333v375.466667c0 6.826667 3.413333 13.653333 10.24 17.066666 3.413333 0 10.24 0 17.066667-3.413333L512 484.693333l464.213333 464.213334c3.413333 3.413333 6.826667 3.413333 13.653334 3.413333h6.826666c6.826667-3.413333 10.24-10.24 10.24-17.066667v-375.466666s-3.413333-6.826667-3.413333-10.24z" fill="#ffffff" p-id="23171"></path></svg>
    </div>
  </Transition>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";

// 是否显示返回顶部
const showBackTop = ref(false);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// 节流
function throttle(fn, delay = 100) {
  let lastTime = 0;
  return function () {
    let nowTime = +new Date();
    if (nowTime - lastTime > delay) {
      fn.apply(this, arguments);
      lastTime = nowTime;
    }
  };
}
const onScroll = throttle(
  () => (showBackTop.value = Boolean(window.scrollY > 100))
);

// 监听滚动事件
onMounted(() => window.addEventListener("scroll", onScroll));

// 移除监听事件
onBeforeUnmount(() => window.removeEventListener("scroll", onScroll));
</script>

<style lang="css" scoped>
.vitepress-backTop-main {
  z-index: 999;
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: var(--vp-c-indigo-1);
  padding: 10px;
  box-shadow: 2px 2px 10px 4px rgba(0, 0, 0, 0.15);
}

@media (min-width: 1280px) {
  .vitepress-backTop-main {
    right: 214px;
  }
}
@media (min-width: 1440px) {
  .vitepress-backTop-main {
    right: calc((100vw - var(--vp-layout-max-width)) / 2 + 214px);
  }
}

.vitepress-backTop-main:hover {
  background-color: var(--vp-c-brand-lighter);
}

svg {
  width: 100%;
  height: 100%;
}

/* 旋转动画 */
@keyframes bounce {
  0% {
    transform: translateY(0) rotateY(0);
  }

  50% {
    transform: translateY(-10px) rotateY(180deg);
  }

  100% {
    transform: translateY(0) rotateY(360deg);
  }
}

/* 进入 退出动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>