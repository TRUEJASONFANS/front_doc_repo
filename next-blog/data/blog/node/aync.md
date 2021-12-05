# aync

## 为什么引入aync/await

它们减少了 promises 的样板，且减少了 promise 链的“不破坏链条”的限制。

当 ES2015 中引入 Promise 时，它们旨在解决异步代码的问题，并且确实做到了，但是在 ES2015 和 ES2017 断开的两年中，很明显，promise 不可能成为最终的解决方案。

Promise 被引入了用于解决著名的回调地狱问题，但是它们自身引入了复杂性以及语法复杂性。

它们是很好的原语，可以向开发人员公开更好的语法，因此，当时机合适时，我们得到了异步函数。

它们使代码看起来像是同步的，但它是异步的并且在后台无阻塞。

1. 普通函数加上aync关键字　表示返回一个promise
2. 即使没有显式地这样做，它也会在内部使它返回 promise。

```js
const aFunction = async () => {
  return '测试'
}

aFunction().then(alert) // 这会 alert '测试'
```

跟以下代码一样无差别
```js
const aFunction = () => {
  return Promise.resolve('测试')
}

aFunction().then(alert) // 这会 alert '测试'
```
3. 代码更容易阅读
```js
const getFirstUserData = () => {
  return fetch('/users.json') // 获取用户列表
    .then(response => response.json()) // 解析 JSON
    .then(users => users[0]) // 选择第一个用户
    .then(user => fetch(`/users/${user.name}`)) // 获取用户数据
    .then(userResponse => userResponse.json()) // 解析 JSON
}

getFirstUserData()
```
vs

```js
const getFirstUserData = async () => {
  const response = await fetch('/users.json') // 获取用户列表
  const users = await response.json() // 解析 JSON
  const user = users[0] // 选择第一个用户
  const userResponse = await fetch(`/users/${user.name}`) // 获取用户数据
  const userData = await userResponse.json() // 解析 JSON
  return userData
}

getFirstUserData()
```
4. 适用于串型模型

```js
const promiseToDoSomething = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve('做些事情'), 10000)
  })
}

const watchOverSomeoneDoingSomething = async () => {
  const something = await promiseToDoSomething()
  return something + ' 查看'
}

const watchOverSomeoneWatchingSomeoneDoingSomething = async () => {
  const something = await watchOverSomeoneDoingSomething()
  return something + ' 再次查看'
}

watchOverSomeoneWatchingSomeoneDoingSomething().then(res => {
  console.log(res)
})
```
5. 更适合调试
调试 promise 很难，因为调试器不会跳过异步的代码。

Async/await 使这非常容易，因为对于编译器而言，它就像同步代码一样。

[Async/Await替代Promise的6个理由](https://www.cnblogs.com/fundebug/p/6667725.html)