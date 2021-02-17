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


## 多个observable

1. 使用merge 将多个Observable 合并为1个
2. 相同频率: 使用zip 和 zipWith() 进行成对 合并
3. 流之间不同步的情况：
    1. combineLatest(ob1, ob2, (ob1, ob2) => merged ob3) 不区分ob1, ob2
    2. withLatestFrom() slow.withLastestFrom(fast) fast 为辅助流 
    3. a.amb() 
4. 累计事件
    1. scan() 关注中间结果， 类如推土机， 10， 14, 12, 13 ,14, 16 => 10, 24, 36, 49, 63, 79 (add)
    2. reduce()基本上只接收最后一个元素的scan(), reduce()其实就是扫描整个Observable，但是丢弃了除最后一个元素之外的其他所有元素
5. 切片
    1. skip(n) vs take(n) skip是跳过n个事件， take是只拿当前多少前n个事件
    2. takeWhile()

5. merge vs concat vs switchOnNext()
   1. merge 合并时间流 相当于同时订阅
   2. concat  订阅完第一个 再接这订阅下一个
   3. swtichOnNext  订阅下一个的时候抛弃上一事件源


## C10K
### 测试工具wrk, Gatting

``` shell
wrk -t6 -c10000 -d60s --timeout 10s --latency http://server:8000
```

## 流控制
1. 采样：obs.sample(1, SECONDS) 时间段取样
   obs.sample(Observable.interval(1, SECONDS))
2. 节流：
    1. buffer 窗口控制 产生批处理集合事件， 会缓冲区间内的所有event. Returns an Observable that emits buffers of items it collects from the source ObservableSource
    2. window 也可以窗口控制, 但是不是直接缓冲，类似于buffer缓存一个list集合，区别在于window将这个结果集合封装成了observable

## 回压
1. observeOn(), from, range, fromCallable 对回压友好
2. 避免使用Observable.create和手动发布事件，如果必须自己实现Observable,使用支持回压功能的工厂方法.


## 异常处理
1. onErrorReturn 替换另一个值
2. onErrorResumeNext 替换为另一个流
3. 避免使用onError, 因为将终止时间流， 可以使用retry(), doOnError().retry()


