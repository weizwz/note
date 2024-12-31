---
title: 巧用mask属性创建一个纯CSS图标库
description: 本文讲述了如何利用mask和svg来创建一个高清图标库：仅通过class name就可控制图标大小和颜色
tags: 
 - css
 - svg
---

# 巧用mask属性创建一个纯CSS图标库

> [!NOTE] 简介
>[`mask`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/mask) 是CSS中的一个属性，它允许开发者在元素上设置图像作为遮罩层。这个属性的强大之处，在于它可以接受多种类型的值，包括关键字值、图像值、渐变色，甚至可以设置多个属性值。
>
>[`SVG`](https://developer.mozilla.org/zh-CN/docs/Web/SVG)（Scalable Vector Graphics，可缩放矢量图形）是一种基于 XML 的图像格式，用于定义二维图形。与传统的位图图像（如 PNG 和 JPG）不同，SVG 图像是矢量图形，可以在任何尺寸下保持清晰度，不会失真。


我们将 SVG 代码转换为 `data URI`，然后在 CSS 中使用，这样我们可以避免多个 HTTP 请求；另一方面，我们使用 `mask` 来设置 SVG 来作为元素蒙版的图像，然后通过设置元素的 `background-color` 就可以控制 SVG 显示的颜色。

通过以上两个要素结合，我们就可以创建一个纯CSS图标库：它能通过只设置 `class name`，就让元素显示出相对应的图标和颜色。

## 创建图标库

### 1. 将svg图标对应到class

这里需要注意的是：

1. 要确保我们的 SVG 图标是单色的
2. 使用 CSS 变量存储 SVG，有便于减少我们的代码，毕竟 `mask` 是一个现代浏览器才支持的属性，需要我们设置不同浏览器前缀

```css
.weiz-icon-web {
  --url: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Cg fill='none'%3E%3Crect width='40' height='32' x='4' y='8' stroke='%23000' stroke-linejoin='round' stroke-width='4' rx='3'/%3E%3Cpath stroke='%23000' stroke-width='4' d='M4 11a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v9H4z'/%3E%3Ccircle r='2' fill='%23000' transform='matrix(0 -1 -1 0 10 14)'/%3E%3Ccircle r='2' fill='%23000' transform='matrix(0 -1 -1 0 16 14)'/%3E%3C/g%3E%3C/svg%3E");
}
.weiz-icon-code {
  --url: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='m16 2l5 5v14.008a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.445 2 3.993 2zm1.657 10L14.12 8.464L12.707 9.88L14.828 12l-2.12 2.121l1.413 1.415zM6.343 12l3.536 3.536l1.414-1.415L9.172 12l2.12-2.121L9.88 8.464z'/%3E%3C/svg%3E");
}
/*其他的省略，可根据需要自行添加*/
```

### 2. 设置公共样式

利用变量来存储颜色，后续我们可以利用修改变量的值来控制图标的颜色

```css
:root {
  --weiz-icon-color: #3C3C43;
}
.weiz-icon {
  display: inline-block;
  background-color: var(--weiz-icon-color);
  width: 16px;
  height: 16px;
  mask: var(--url) no-repeat center center;
  -webkit-mask: var(--url) no-repeat center center;
  mask-size: cover;
  -webkit-mask-size: cover;
}
```

### 3. 设置多种颜色

```css
.weiz-icon.main {
  --weiz-icon-color: var(--weiz-primary-color);
}
.weiz-icon.white {
  --weiz-icon-color: #FFFFFF;
}
.weiz-icon.gray {
  --weiz-icon-color: #3C3C43C7;
}
/* 暗黑模式下自动适应 */
.dark {
  --weiz-icon-color: #FFFFF5DB;
  .weiz-icon.gray {
    --weiz-icon-color: #EBEBF599;
  }
}
```

### 4. 设置多种尺寸

```css
.weiz-icon.m {
  width: 12px;
  height: 12px;
}
.weiz-icon.l {
  width: 24px;
  height: 24px;
}
.weiz-icon.xl {
  width: 32px;
  height: 32px;
}
.weiz-icon.xxl {
  width: 40px;
  height: 40px;
}
.weiz-icon.xxxl {
  width: 48px;
  height: 48px;
}
```

## 应用

```html
<i class="weiz-icon l weiz-icon-web white"></i>
```

效果如图：

![纯CSS图标库效果演示](https://www.helloimg.com/i/2024/12/23/676973df31305.png)

真实案例请查看：[唯知笔记](https://note.weizwz.com/)


## 扩展

推荐一个 SVG 图标网站：[icon-sets.iconify.design](https://icon-sets.iconify.design/?query=home)。找到自己想要的图标后，点击图标，选择下方的 URL 复制即可。

![icon-sets.iconify.design](https://www.helloimg.com/i/2024/12/23/676977dcdbb3a.png)