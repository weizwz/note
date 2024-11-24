---
title: markdown 示例
editLink: true
---

# {{ $frontmatter.title }}

此页面演示了 `VitePress` 提供的一些内置 `markdown` 扩展。

## 引用信息

**输入**

```md
> 这是一个引用 `VitePress`
```

**输出**

> 这是一个引用 `VitePress`


## 代码高亮

`VitePress` 使用 `markdown-it` 作为解析器，并使用 `Shiki` 来突出显示语言语法

**输入**

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

**输出**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## 代码块组

**输入**
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

**输出**

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

## 提示信息

**输入**

```md
::: info 信息
This is an info box.
:::

::: tip 提示
This is a tip.
:::

::: warning 警告
This is a warning.
:::

::: danger 危险
This is a dangerous warning.
:::

::: details 详情
This is a details block.
:::
```

**输出**

::: info 信息
This is an info box.
:::

::: tip 提示
This is a tip.
:::

::: warning 警告
This is a warning.
:::

::: danger 危险
This is a dangerous warning.
:::

::: details 详情
This is a details block.
:::

## Github风格提示

**输入**

```md
> [!NOTE] 提醒
> 强调用户在快速浏览文档时也不应忽略的重要信息。

> [!TIP] 建议
> 有助于用户更顺利达成目标的建议性信息。

> [!IMPORTANT] 重要
> 对用户达成目标至关重要的信息。

> [!WARNING] 警告
> 因为可能存在风险，所以需要用户立即关注的关键内容。

> [!CAUTION] 注意
> 行为可能带来的负面影响。
```

**输入**

> [!NOTE] 提醒
> 强调用户在快速浏览文档时也不应忽略的重要信息。

> [!TIP] 建议
> 有助于用户更顺利达成目标的建议性信息。

> [!IMPORTANT] 重要
> 对用户达成目标至关重要的信息。

> [!WARNING] 警告
> 因为可能存在风险，所以需要用户立即关注的关键内容。

> [!CAUTION] 注意
> 行为可能带来的负面影响。

## 折叠语法

**输入**

```md
<details>
  <summary>点我展开</summary>
  Markdown默认折叠语法，Vitepress可以使用容器折叠语法，更加美观
</details>
```

**输出**

<details>
  <summary>点我展开</summary>
  Markdown默认折叠语法，Vitepress可以使用容器折叠语法，更加美观
</details>
