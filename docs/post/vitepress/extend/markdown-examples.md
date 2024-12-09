---
title: Markdown 示例
description: Markdown 使用说明文档
tags:
  - markdown
  - vitepress
  - github
---

# Markdown 示例

此页面演示了 `VitePress` 提供的一些内置 `markdown` 扩展。详情可查看 [官方文档](https://vitepress.dev/zh/guide/markdown)

## 基础功能

### 基本配置

::: code-group
```ts [.vitepress/config/index.ts]
export default defineConfig({
  // markdown配置搞里头
  markdown:{
      // 代码块行号显示
      lineNumbers: true,
      // 图片懒加载
      image: {
        lazyLoading: true
      },
  },
})
```
:::

### 标题锚点 {#title-link}

标题会自动应用当前标题文字作为锚点，也支持自定义锚点，格式为 `标题+空格+{#自定义锚点}`
```md
## 标题锚点 {#title-link}
```
也可以利用链接跳转到指定标题
```md
[点击我跳转到基本配置](#基本配置)
```

[点击我跳转到基本配置](#基本配置)


### 引用信息

```md
> 这是一个引用 `VitePress`
```
> 这是一个引用 `VitePress`

### 折叠语法

```md
<details>
  <summary>点我展开</summary>
  Markdown默认折叠语法，Vitepress可以使用容器折叠语法，更加美观
</details>
```
<details>
  <summary>点我展开</summary>
  Markdown默认折叠语法，Vitepress可以使用容器折叠语法，更加美观
</details>

## 容器

### 折叠容器

```md
::: details 点我查看
这是一个折叠容器
:::
```
::: details 点我查看
这是一个折叠容器
:::

### 提示容器

```md
::: info 信息
这是一条信息，格式为：`info+空格+自定义文字`
:::

::: tip 建议
这是一个建议，格式为：`tip+空格+自定义文字`
:::

::: warning 警告
这是一条警告，格式为：`warning+空格+自定义文字`
:::

::: danger 危险
这是一个危险警告，格式为：`danger+空格+自定义文字`
:::
```
::: info 信息
这是一条信息，格式为：`info+空格+自定义文字`
:::

::: tip 建议
这是一个建议，格式为：`tip+空格+自定义文字`
:::

::: warning 警告
这是一条警告，格式为：`warning+空格+自定义文字`
:::

::: danger 危险
这是一个危险警告，格式为：`danger+空格+自定义文字`
:::

### github提示

```md
> [!NOTE] 提示
> 强调用户在快速浏览文档时也不应忽略的重要信息。

> [!TIP] 建议
> 有助于用户更顺利达成目标的建议性信息。

> [!IMPORTANT] 重要
> 对用户达成目标至关重要的信息。

> [!WARNING] 警告
> 因为可能存在风险，所以需要用户立即关注的关键内容。

> [!CAUTION] 危险
> 行为可能带来的负面影响。
```
> [!NOTE] 提示
> 强调用户在快速浏览文档时也不应忽略的重要信息。

> [!TIP] 建议
> 有助于用户更顺利达成目标的建议性信息。

> [!IMPORTANT] 重要
> 对用户达成目标至关重要的信息。

> [!WARNING] 警告
> 因为可能存在风险，所以需要用户立即关注的关键内容。

> [!CAUTION] 危险
> 行为可能带来的负面影响。


## 代码块

### 代码高亮

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

### 代码块组

````md
::: code-group

```sh [pnpm]
#查询pnpm版本
pnpm -v
```

```sh [yarn]
#查询yarn版本
yarn -v
```

:::
````

::: code-group

```sh [pnpm]
#查询pnpm版本
pnpm -v
```

```sh [yarn]
#查询yarn版本
yarn -v
```

:::
