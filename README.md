# 唯知笔记
一个基于 `VitePress` 的知识分享网站。

## 搭建

参考 [VitePress快速搭建个人博客](https://lyxdream.github.io/note/vitePress-blog/index)


## 说明

### 目录

+ `docs/post/` 作为正式文档目录，其内的 `.md` 文档都将作为正式文档被渲染，除了以 '-demo.md' 结尾的文档（作为正式文档的示例文档，不会出现在文章目录）

  >文档过滤方法，参见 `docs/.vitepress/theme/utils/post.data.ts`
  > line 35，过滤规则
  >`post/**/!(*-demo).md`
+ `/post` 目录，经过路由重写后，文章链接里去掉了 `/post`
  ```ts
  // .vitePress/config/index.ts
  rewrites: {
    'post/(.*)': '(.*)',
  },
  ```

### AI摘要提取

从之前网站迁移的文章，已有url地址：

url + `，100字以内摘要，主要介绍内容，要方便各大搜索引擎抓取，不需要提及 帮助读者/开发者/用户 等内容，不需要分段`