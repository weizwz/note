---
outline: deep
---

# api 示例

此页面演示了 `VitePress` 提供的一些运行时 `API` 的使用方法。

主 `useData() API` 可用于访问当前页面的网站、主题和页面数据。它在 `.md` 和 `.vue` 文件中都有效：

```md
<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>

## 结果展示

### 主题数据
<pre>{{ theme.nav }}</pre>

### 页面数据
<pre>{{ page }}</pre>

### 页面格式
<pre>{{ frontmatter }}</pre>
```

<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
</script>

## 结果展示

### 主题数据
<pre>{{ theme.nav }}</pre>

### 页面数据
<pre>{{ page }}</pre>

### 页面格式
<pre>{{ frontmatter }}</pre>

## 更多

请查看官方文档 [VitePress 运行时 API](https://vitepress.dev/zh/reference/runtime-api)。
