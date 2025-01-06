---
title: VSCode 接入DeepSeek V3大模型
description: 本文介绍了如何在VSCode中接入DeepSeek V3大模型，包括下载插件、注册API Key、配置模型等详细步骤和方法。DeepSeek V3是一个拥有6710亿参数的专家混合（MoE）语言模型，具有高效推理和成本效益的特点
tags: 
 - VSCode
 - AI

---

# VSCode 接入DeepSeek V3大模型

DeepSeek V3 是一个拥有 6710 亿参数的专家混合（MoE）语言模型。最新评估表明，DeepSeek V3 已经超越了其他开源模型。重点是：国内(不需要工具)，便宜(10块钱大约500万tokens)。

作为日常开发使用的编辑器 VSCode，直接开始接入 DeepSeek V3

## VSCode 上下载插件

VSCode 插件商店搜索 `Continue`，第一个下载就是

![image-20250103154346320.png](https://www.helloimg.com/i/2025/01/03/677797a8847e0.png)

## 注册 DeepSeek V3

去 deepseek 官网 [https://www.deepseek.com/](https://www.deepseek.com/) ，选择 `接入api`，然后注册账号

![image-20250103154617154.png](https://www.helloimg.com/i/2025/01/03/677797a88d2b2.png)

注册完毕后，选择创建 `API Key`

![image-20250103154714100.png](https://www.helloimg.com/i/2025/01/03/677797a8ca2ee.png)

创建成功后，**记得复制这个 key 值，并保存在其他地方，因为它只会出现 1 次**。



## VSCode 里配置

打开左侧的 `continue` 插件图标，点击上面的 `设置按钮`，进入编辑区域添加新模型。新增内容如下：

记得要替换 `apiKey` 的值要替换为刚刚注册 DeepSeek 后创建的 `API Key`

```json
{
  "models": [ 
    {
      "model": "deepseek-coder",
      "provider": "deepseek",
      "contextLength": 128000,
      "apiKey": "sk-f7f8808f7a584b3f95419242c5f30b7b",  //  [!code highlight]
      "title": "DeepSeek v3"
    }
  ],
  "tabAutocompleteModel": {
    "title": "DeepSeek Coder",
    "provider": "deepseek",
    "model": "deepseek-coder"
  },
}
```


![image-20250103155123230.png](https://www.helloimg.com/i/2025/01/03/677797a8b35af.png)

修改完成后，保存，然后选择面板左侧我们新添加的模型，点击对话开始试用。

![image-20250103155405192.png](https://www.helloimg.com/i/2025/01/03/677797a84f83b.png)

