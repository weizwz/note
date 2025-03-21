# 唯知笔记
一个基于 `VitePress` 的知识分享网站。

## 更新计划 - 仓库后期将闭源

- [x] 文章卡片重做
- [x] 文章创建更新日期重构，后续不依赖git，以便迁移服务到第三方站点
- [x] 文章归档和标签重做
- [ ] 添加文章分类及分类界面
- [ ] 首页重做，已有设计原型
- [ ] 域名解析迁移到 Cloudflare
- [ ] 图床使用 Cloudflare R2 对象存储，已搭建好，待切换域名
- [ ] 静态站点使用 Cloudflare 部署，加速国内访问
- [ ] 评论改为 twikoo，部署到 Cloudflare，数据库使用 D1
- [ ] 代码库将闭源，后续更新vitepress教程

## 搭建和基本配置

参考文档

[VitePress官方文档](https://vitepress.dev/zh/guide/getting-started)

[yx - VitePress快速搭建个人博客](https://lyxdream.github.io/note/vitePress-blog/index)

[Yiov - VitePress快速上手](https://vitepress.yiov.top/getting-started.html)

## 说明

### 目录

+ `.github` 存放部署脚本 `/workflows/main.yml`

+ `.vscode` 编辑器相关目录：存放写作模板 `.vscode/markdown.code-snippets` 以及 vue3模板 `.vscode/vue3.code-snippets`

+ `docs/.vitepress/config` 存放 `vitepress` 配置

+ `docs/.vitepress/theme` 存放 主题配置，以及自定义插件

+ `docs/.vitepress/utils` 存放 工具类，包括收集文章信息，处理日期格式等

+ `docs/pages` 存放博客主页面，如 全部文章、标签列表、更新日志等

+ `docs/post` 作为正式文档目录，其内的 `.md` 文档都将作为正式文档被渲染，除了以 '-demo.md' 结尾的文档（作为正式文档的示例文档，不会出现在文章目录）

  >文档过滤方法，参见 `docs/.vitepress/utils/post.data.ts`
  > line 35，过滤规则
  >`post/**/!(*-demo).md`

+ `docs/post` 目录，经过路由重写后，文章链接里去掉了 `/post`
  ```ts
  // .vitePress/config/index.ts
  rewrites: {
    'post/(.*)': '(.*)',
  },
  ```

### AI摘要提取

#### 使用 Edge浏览器 的 Copilot：

+ 从之前网站迁移的文章，已有url地址：
  ```
  url，120字以内摘要，主要介绍内容，要方便各大搜索引擎抓取，不需要提及 帮助读者/开发者/用户 等内容，不需要分段
  ```
+ 新创建文章：
  ```
  对当前页面内容做出摘要，120字以内，主要介绍内容，要方便各大搜索引擎抓取，不需要提及 帮助读者/开发者/用户 等内容，不需要分段
  ```

#### 使用 vscode 的 continue 插件：

右键复制文章完整路径
```
对以下内容做出摘要，120字以内，主要介绍内容，要方便各大搜索引擎抓取，不需要提及 帮助读者/开发者/用户 等内容，不需要分段，读取地址 {路径}
```
