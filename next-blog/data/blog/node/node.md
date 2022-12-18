---
title: Node介绍part 1
date: '2021-11-30'
tags: ['node']
draft: false
summary: Node介绍part 1
---
## node 简史
[http://nodejs.cn/learn/a-brief-history-of-nodejs]

## node 的优点

1. runtime: Node js 是一个开源和跨平台的 JavaScript 运行时环境
2. 性能好:Node.js 在浏览器之外运行 V8 JavaScript 引擎（Google Chrome 的内核）
3. 单线程管理数千链接，基于事件模型。适用于I/O密集型

```js
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

## 安装
1. 下载node binary, 设置环境变量, 轻量类似于python.
2. 建议使用nvm管理不同node版本，方便切换不同的node版本

## 异步编程

1. 异步编程与回调
2. 定时器
3. Promise
4. Async 与 Await
5. 闭包
6. 事件循环


## 事件循环

1. Node.js JavaScript 代码运行在单个线程上。 每次只处理一件事。

这个限制实际上非常有用，因为它大大简化了编程方式，而不必担心并发问题。

只需要注意如何编写代码，并避免任何可能阻塞线程的事情，例如同步的网络调用或无限的循环。

通常，在大多数浏览器中，每个浏览器选项卡都有一个事件循环，以使每个进程都隔离开，并避免使用无限的循环或繁重的处理来阻止整个浏览器的网页。

该环境管理多个并发的事件循环，例如处理 API 调用。 Web 工作进程也运行在自己的事件循环中。

主要需要关心代码会在单个事件循环上运行，并且在编写代码时牢记这一点，以避免阻塞它。

### 堆栈调用

调用堆栈是一个 LIFO 队列（后进先出）。

事件循环不断地检查调用堆栈，以查看是否需要运行任何函数。

当执行时，它会将找到的所有函数调用添加到调用堆栈中，并按顺序执行每个函数。

你知道在调试器或浏览器控制台中可能熟悉的错误堆栈跟踪吗？ 浏览器在调用堆栈中查找函数名称，以告知你是哪个函数发起了当前的调用：


###  阻塞事件循环

任何花费太长时间才能将控制权返回给事件循环的 JavaScript 代码，都会阻塞页面中任何 JavaScript 代码的执行，甚至阻塞 UI 线程，并且用户无法单击浏览、滚动页面等。

JavaScript 中几乎所有的 I/O 基元都是非阻塞的。 网络请求、文件系统操作等。 被阻塞是个异常，这就是 JavaScript 如此之多基于回调（最近越来越多基于 promise 和 async/await）的原因。


### 消息队列 与 作业队列

什么属于消息队列事件
1. setTimeout()
2. 用户触发的事件比如键盘，单击, onLoad


事件循环会赋予调用堆栈优先级，它首先处理在调用堆栈中找到的所有东西，一旦其中没有任何东西，便开始处理消息队列中的东西。
ECMAScript 2015 引入了作业队列的概念，Promise 使用了该队列（也在 ES6/ES2015 中引入）。 这种方式会尽快地执行异步函数的结果，而不是放在调用堆栈的末尾。

堆栈调用 -> 作业队列 ->  消息队列
有个游乐园中过山车的比喻很好：消息队列将你排在队列的后面（在所有其他人的后面），你不得不等待你的回合，而工作队列则是快速通道票，这样你就可以在完成上一次乘车后立即乘坐另一趟车。
```js
const bar = () => console.log('bar')

const baz = () => console.log('baz')

const foo = () => {
  console.log('foo')
  setTimeout(bar, 0)
  new Promise((resolve, reject) =>
    resolve('应该在 baz 之后、bar 之前')
  ).then(resolve => console.log(resolve))
  baz()
}

foo()
```