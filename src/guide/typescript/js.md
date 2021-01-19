# JS 中的异步编程


## async 和 await

1. await是不管异步过程的reject(error)消息的，async函数返回的这个Promise对象的catch函数就负责统一抓取内部所有异步过程的错误。
async函数内部只要有一个异步过程发生错误，整个执行过程就中断，这个返回的Promise对象的catch就能抓到这个错误。

2. async函数执行和普通函数一样，函数名带个()就可以了，参数个数随意，没有限制；也需要有async关键字。
只是返回值是一个Promise对象，可以用then函数得到返回值，用catch抓去整个流程中发生的错误。


### 返回值为promise, 如果不是， 则被promise包裹 
async函数一定会返回一个promise对象。如果一个async函数的返回值看起来不是promise，那么它将会被隐式地包装在一个promise.resolve中。

``` javascript
async function foo() {
   return 1
}

//等价于:

function foo() {
   return Promise.resolve(1)
}
```

### aync/await 同步思想写异步代码

1. aync/await 避免了地狱式的嵌套， 更具人性化和理解

``` javascript
function getProcessedData(url) {
  return downloadData(url) // 返回一个 promise 对象
    .catch(e => {
      return downloadFallbackData(url)  // 返回一个 promise 对象
    })
    .then(v => {
      return processDataInWorker(v); // 返回一个 promise 对象
    });
}
async function getProcessedData(url) {
  let v;
  try {
    v = await downloadData(url);
  } catch (e) {
    v = await downloadFallbackData(url);
  }
  return processDataInWorker(v);
}
```

2. 方面异常处理

