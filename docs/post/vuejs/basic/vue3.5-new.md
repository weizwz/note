---
title: Vue3.5常用特性整理
description: Vue3.5 常用特性总结，包括响应式 Props 解构、watch 深度监听、onWatcherCleanup 清理函数、watch 返回值增强、SSR 改进、useId 生成唯一应用 ID、data-allow-mismatch 属性、useTemplateRef 动态绑定元素等。这些改进提升了 Vue3.5 的开发体验和性能
firstCommit: 2025-01-22 17:12:22+8:00
lastUpdated: 2025-01-22 18:28:11+8:00
category: 技术
tags: 
 - Vue.js
 - SSR
---

# Vue3.5常用特性整理

Vue3.5 发布已近半年，抽空整理下常用的新增/改动特性

## 响应式 Props 解构 

Vue3.5 中 Props 正式支持解构了，并添加了响应式跟踪

### 设置默认值

使用 JavaScript 原生的默认值语法声明 props 默认值

以前

```vue
const props = withDefaults(
  defineProps<{
    count?: number
    msg?: string
  }>(),
  {
    count: 0,
    msg: 'hello'
  }
)
```

现在

```vue
const { count = 0, msg = 'hello' } = defineProps<{
  count?: number
  message?: string
}>()
```

### 响应式解构

当在同一个 `<script setup>` 代码块中访问由 `defineProps` 解构的变量时，Vue 编译器会自动在前面添加 `props`

以前

```ts
const { foo } = defineProps(['foo'])

watchEffect(() => {
  // 在 3.5 之前只运行一次
  console.log(foo)
})
```

现在

```ts
const { foo } = defineProps(['foo'])

watchEffect(() => {
  // 在 3.5 中在 "foo" prop 变化时重新执行
  console.log(foo)
  // `foo` 由编译器转换为 `props.foo`，以上等同于 `console.log(props.foo)`
})
```

与之类似，监听解构的 prop 变量 或 将其传递到可组合项中同时保留响应性 时需要将其包装在 getter 中

以前

```ts
const { foo } = defineProps(['foo'])

watch(foo, /* ... */)
```

现在：

```ts
// watch(foo, /* ... */) 等价于 watch(props.foo, ...)，我们给 watch 传递的是一个值而不是响应式数据源
watch(() => foo, /* ... */)

// 传递解构的 prop 到外部函数中并保持响应性
useComposable(() => foo)
```

## 监听(`watch` / `watcheffect`) 相关

### watch 支持指定深度 deep: number

watch 的 `deep` 选项现在支持传入数字，来指定监听的深度

```ts
const state = ref({
  a: {
    b: {
      c: 1
    }
  }
})

watch(state, (newValue) => {
    console.log(`state: ${newValue}`)
  },
  { deep: 2 }
)

state.a.b = { c: 2 } // 更改了第二层的属性，触发监听
state.a.b.c = 2 // 更改了第三层的属性，不触发监听
```

### 清理函数 onWatcherCleanup / onEffectCleanup

以前我们在监听函数中要发送异步请求时，很可能发生请求参数发生变化的情况，这时我们需要设置全局变量存储 `AbortController`，并在组件卸载之前清理它

```ts
import { watch, onBeforeUnmount } from "vue"

let controller = new AbortController()

watch(state, (newValue) => {
	controller.abort() // 取消上一次的请求
	controller = new AbortController()

	fetch(`/api/${newValue}`, { signal: controller.signal }).then(() => {
    // 回调逻辑
  })
});

// 组件卸载前也要清理
onBeforeUnmount(() => controller.abort())
```

现在有了清理函数 `onWatcherCleanup` / `onEffectCleanup` 后，我们可以直接调用它来清理之前的 调用(异步)函数/请求

```ts
import { watch, onWatcherCleanup } from 'vue'

watch(id, (newId) => {
  const controller = new AbortController()

  fetch(`/api/${newId}`, { signal: controller.signal }).then(() => {
    // 回调逻辑
  })

  onWatcherCleanup(() => {
    // 终止过期请求
    controller.abort()
  })
})
```

`onEffectCleanup` 函数写法类似以上，不同的是导入来源

```ts
import { onEffectCleanup } from "@vue/reactivity";
```

> [!WARNING] 注意
> `onWatcherCleanup` 仅在 Vue 3.5+ 中支持，并且必须在 `watchEffect` 效果函数或 `watch` 回调函数的同步执行期间调用：你不能在异步函数的 `await` 语句之后调用它。

### watch 返回值增强

watch 返回值中新增 暂停/恢复侦听器，可以更细致的控制监听作用范围

```ts
const { stop, pause, resume } = watch(() => {})

// 暂停侦听器
pause()

// 稍后恢复
resume()
```

## SSR 改进

### 惰性激活 Lazy Hydration

异步组件可以通过 `defineAsyncComponent() API` 中的 `hydrate` 选项来控制何时进行激活

#### 在空闲时进行激活

```ts
import { defineAsyncComponent, hydrateOnIdle } from 'vue'

const AsyncComp = defineAsyncComponent({
  loader: () => import('./Comp.vue'),
  hydrate: hydrateOnIdle(/* 传递可选的最大超时 */)
})
```

#### 在元素变为可见时激活

```ts
import { defineAsyncComponent, hydrateOnVisible } from 'vue'

const AsyncComp = defineAsyncComponent({
  loader: () => import('./Comp.vue'),
  hydrate: hydrateOnVisible()
})
```

#### 自定义策略

```ts
import { defineAsyncComponent, type HydrationStrategy } from 'vue'

const myStrategy: HydrationStrategy = (hydrate, forEachElement) => {
  // forEachElement 是一个遍历组件未激活的 DOM 中所有根元素的辅助函数，
  // 因为根元素可能是一个片段而非单个元素
  forEachElement(el => {
    // ...
  })
  // 准备好时调用 `hydrate`
  hydrate()
  return () => {
    // 如必要，返回一个销毁函数
  }
}

const AsyncComp = defineAsyncComponent({
  loader: () => import('./Comp.vue'),
  hydrate: myStrategy
})
```

#### 其他

请查看 [Vue3官方文档 - 惰性激活](https://cn.vuejs.org/guide/components/async.html#lazy-hydration)，这里不再赘述

### `useId()` 生成唯一应用ID

用于为无障碍属性或表单元素生成每个应用内唯一的 ID。在我们日常应用中，主要可以解决服务端和客户端生成的`id`不一样导致渲染报错的问题

```vue
<script setup>
import { useId } from 'vue'

const id = useId()
</script>

<template>
  <form>
    <label :for="id">Name:</label>
    <input :id="id" type="text" />
  </form>
</template>
```

### `data-allow-mismatch`

如果客户端值不可避免地与其服务端对应值（例如日期）不同，我们可以使用属性 `data-allow-mismatch` 来避免由此产生的激活不匹配警告

```vue
<span data-allow-mismatch>{{ data.toLocaleString() }}</span>
```

还可以指定特定类型。允许的值有：`text`，`children` (仅允许直接子组件不匹配)，`class`，`style`，`attribute`

## 其他

### `useTemplateRef()`

返回一个浅层 ref，可以更直观的绑定元素，同时也支持动态绑定

```vue
<script setup>
import { ref, useTemplateRef, onMounted } from 'vue'

const targetRef = ref('input1')
const inputRef = useTemplateRef<HTMLInputElement>(targetRef.value)

onMounted(() => {
  inputRef.value.focus()
})
</script>

<template>
  <input ref="input1" />
	<input ref="input2" />
</template>
```



**其他不常用的就不在说明了**

