# Promise 总结

## 创建promise
```
let done = true

const isItDoneYet = new Promise((resolve, reject) => {
  if (done) {
    const workDone = '这是创建的东西'
    resolve(workDone)
  } else {
    const why = '仍然在处理其他事情'
    reject(why)
  }
})
```

## 消费 promise

``` js
const isItDoneYet = new Promise(/* ... 如上所述 ... */)
//...

const checkIfItsDone = () => {
  isItDoneYet
    .then(ok => {
      console.log(ok)
    })
    .catch(err => {
      console.error(err)
    })
}
checkIfItsDone();
```

## 链式promise

Promise的返回值是另一个promise

```js
const status = response => {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
  }
  return Promise.reject(new Error(response.statusText))
}

const json = response => response.json()

fetch('/todos.json')
  .then(status)    // 注意，`status` 函数实际上在这里被调用，并且同样返回 promise，
  .then(json)      // 这里唯一的区别是的 `json` 函数会返回解决时传入 `data` 的 promise，
  .then(data => {  // 这是 `data` 会在此处作为匿名函数的第一个参数的原因。
    console.log('请求成功获得 JSON 响应', data)
  })
  .catch(error => {
    console.log('请求失败', error)
  })

  ```
  ## 处理错误
  处理错误
在上一章节的示例中，有个 catch 被附加到了 promise 链上。

当 promise 链中的任何内容失败并引发错误或拒绝 promise 时，则控制权会转到链中最近的 catch() 语句。

```js
new Promise((resolve, reject) => {
  throw new Error('错误')
}).catch(err => {
  console.error(err)
})

// 或

new Promise((resolve, reject) => {
  reject('错误')
}).catch(err => {
  console.error(err)
})
```
## 编排promise

1. Promise.all
f1, f2 都执行完毕

``` js
const f1 = fetch('/something.json')
const f2 = fetch('/something2.json')

Promise.all([f1, f2])
  .then(res => {
    console.log('结果的数组', res)
  })
  .catch(err => {
    console.error(err)
  })

```
2. Promise.race
当传给其的首个 promise 被解决时，则 Promise.race() 开始运行，并且只运行一次附加的回调（传入第一个被解决的 promise 的结果）.
```js
const first = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, '第一个')
})
const second = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, '第二个')
})

Promise.race([first, second]).then(result => {
  console.log(result) // 第二个
})
```