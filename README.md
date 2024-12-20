# 唯知笔记
一个基于 `VitePress` 的知识分享网站。

## 搭建

参考 [VitePress快速搭建个人博客](https://lyxdream.github.io/note/vitePress-blog/index)


## 说明

`docs/post/` 作为正式文档目录，其内的 `.md` 文档都将作为正式文档被渲染，除了以 '-demo.md' 结尾的文档（作为示例文档，不会出现在正式文档目录）

文档过滤方法，参见 `docs/.vitepress/theme/utils/post.data.ts`

```ts
const regDemo = new RegExp(/-demo$/);
if (regDemo.test(link)) return
promises.push(task)
```