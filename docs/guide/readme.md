---
prev: false
next: ./packageManager/
---

# 工具链
一组 JavaScript 构建工具链通常由这些组成：
1. 一个 package 管理器，比如 Yarn 或 npm。它能让你充分利用庞大的第三方 package 的生态系统，并且轻松地安装或更新它们。
2. 一个打包器，比如 webpack 或 Parcel。它能让你编写模块化代码，并将它们组合在一起成为小的 package，以优化加载时间。
3. 一个编译器，例如 Babel。它能让你编写的新版本 JavaScript 代码，在旧版浏览器中依然能够工作。

我将从这三个角度介绍工具链

## 两个runtime环境
1. 浏览器
   b 端(有限的系统api访问，受限于各大浏览器的实现)
2. Node js
   server端(具有系统API访问权限,IO)

## SPA 前端开发流程图
![流程图](https://user-images.githubusercontent.com/5670289/59024459-85997c80-8884-11e9-8b6a-532ea61ca3fd.jpg)







