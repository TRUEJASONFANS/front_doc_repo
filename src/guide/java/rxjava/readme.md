# Rxjava 反应式变成编程

## rx java 是如何运行
1. 天生 "同步"
2. 天然延迟执行
3. 天然的推送数据 而不是拉取， 是一个异步“双重性” iterable.所谓“双重”，指的是Observable提供了Iterable的所有功能，但数据方向相反

|  拉取(Iterable)  | 推送(Observable)  |
|  ----  | ----  |
| T next()  | onNext(T) |
| 抛出异常  | onError(Throwable) |
| 返回 | onCompleted()|

### Single
* 响应错误。
* 永远不响应
* 响应成功

### Completable
与Single相比无返回值：通常会使用Observable<Void>或Single<Void>

|  |  零个  | 1个  | 多个 |
|--- |  ----  | ----  |---- |
|同步| void doSomething() | T getData() | Iterable<T> getData()|
|异步| Completable doSomething()  | Single<T> getData()| Observable<T> getData|


### flatMap

1. flatMap 本质是先map 再merge
2. flatMap vs concatMap  concatMap 本质上等于flatMap(f, maxConcurrent), maxConcurrent = 1


# C10K
### 测试工具wrk, Gatting

``` shell
wrk -t6 -c10000 -d60s --timeout 10s --latency http://server:8000
```