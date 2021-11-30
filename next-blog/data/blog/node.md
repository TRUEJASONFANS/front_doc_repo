---
title: Node .md file
date: '2021-11-30'
tags: ['markdown', 'code', 'features']
draft: false
summary: Node sharing
---

1. runtime: Node js 是一个开源和跨平台的 JavaScript 运行时环境
2. 性能好:Node.js 在浏览器之外运行 V8 JavaScript 引擎（Google Chrome 的内核）
3. 单线程管理数千链接，基于事件模型。适用于I/O密集型

```Node
const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World\n')
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
```

## node 简史
[http://nodejs.cn/learn/a-brief-history-of-nodejs]


## 安装
下载node binary, 设置环境变量, 轻量类似于python.
建议使用nvm管理不同node版本，方便切换不同的node版本

## 异步编程

1. 异步编程与回调
2. 定时器
3. Promise
4. Async 与 Await
5. 闭包
6. 事件循环
