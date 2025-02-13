---
layout: weiz-home
layoutClass: home
title: 唯知笔记
titleTemplate: 唯知笔记

about:
  title: 唯知笔记
  logo: https://www.helloimg.com/i/2025/01/04/6778a918882f8.png
  desc: 编码、记录、分享
  tagline: 知之为知之，不知为不知
  links:
    - title: 前端笔记
      iconName: weiz-icon-web white
      link: ts/basic/ts-normal-summary
    - title: 编码提效
      iconName: weiz-icon-code-fill main
      link: css/apply/icon-label-shields
    - title: 博客文档
      iconName: weiz-icon-blog-fill main
      link: vitepress/basic/api-examples
    - title: 资源分享
      iconName: weiz-icon-resource-fill main
      link: resource/font/open-source-font
    - title: 杂项记录
      iconName: weiz-icon-other-fill main
      link: app/network/clash-verge

post:
  - title: VSCode接入硅基流动API
    tags: # 标签，对于图标 docs/.vitepress/theme/components/WHome/index.scss 中可看
      - VSCode
    url: editor/vscode/vscode-siliconflow
    abstract: 本文介绍如何在VS Code中使用硅基流动API接入DeepSeek，包括注册硅基流动账号、创建API密钥及配置VS Code插件cline，并展示如何使用cline优化代码片段、项目依赖及新建项目等功能
  - title: Vue3.5常用特性整理
    tags:
      - Vue.js
    url: vuejs/basic/vue3.5-new
    abstract: Vue3.5 常用特性总结，包括响应式 Props 解构、watch 深度监听、onWatcherCleanup 清理函数、watch 返回值增强、SSR 改进、useId 生成唯一应用 ID、data-allow-mismatch 属性、useTemplateRef 动态绑定元素等。这些改进提升了 Vue3.5 的开发体验和性能
  - title: Vitepress中警告Sass API过期：The legacy JS API is deprecated and will be removed in Dart Sass 2.0.0
    tags:
      - sass
    url: vitepress/problem/warning-sass-api-expired
    abstract: 本文介绍了在 Vitepress 1.5.0 中引入 Sass 后，控制台出现的告警：The legacy JS API is deprecated and will be removed in Dart Sass 2.0.0。原因是部分API弃用。解决方案是修改配置以使用现代 API，并介绍了 处理其他告警如 Sass @import 规则弃用，以及修改自定义函数如 unquote()、length()、nth() 等的办法
  - title: VSCode 接入DeepSeek V3大模型，附使用说明
    tags:
      - VSCode
    url: editor/vscode/vscode-deepseek
    abstract: 文章介绍了如何在 VSCode 中接入 DeepSeek V3 大模型，包括插件下载、API Key 注册与配置等，文章还介绍了 Continue 的对话提问、代码优化、自动补全和注释生成代码等功能。DeepSeek V3 是一个拥有 6710 亿参数的专家混合语言模型，支持国内使用，价格便宜
  - title: 常用TS语法总结
    tags:
      - TypeScript
    url: ts/basic/ts-normal-summary
    abstract: 本文总结了作者常用的TypeScript写法，包括基本用法、对象、数组、函数、类型联合、类型断言、泛型、动态变量名以及在Vue3中的应用等方面的详细步骤和注意事项
  - title: Git 使用记录 - 持续更新
    tags:
      - Git
    url: git/use-log
    abstract: 这篇文章详细介绍了Git的使用方法，包括初始化配置、生成SSH密钥、设置代理、关联远程仓库、切换远程仓库地址、修改分支名称、解决常见错误等内容。文章还提供了具体的命令和操作步骤，帮助用户更好地管理和使用Git
  - title: Clash Verge 使用记录：安装、配置
    tags:
      - 代理
    url: app/network/clash-verge
    abstract: 这篇文章介绍了Clash Verge的下载、配置和使用方法。Clash Verge是一个基于Clash Meta内核的GUI代理工具，支持多种操作系统和代理协议。文章详细讲解了如何加速下载，日常编码如何正确使用代理，以及日常使用中出现的一些问题，文章最后还总结了常用的代理规则，对国内大部分网站都进行了优化，可以直接访问。
---

