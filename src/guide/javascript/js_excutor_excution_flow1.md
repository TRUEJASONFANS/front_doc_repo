# js 引擎执行过程

## 语法分析
    编译器进行错误检查， 有错误则抛出
## 预编译阶段
    1. 建立执行上下文环境
        1. 创建变量（Variable Object)
        2. 建立作用域链
        3. 确定this的指向
    2. 讲执行上下文压入函数调用栈

```js
var num = 30;

function test() {
    var a = 10;

    function innerTest() {
        var b = 20;

        return a + b
    }

    innerTest()
}

test()
```
```js
innerTestEC = {

    //变量对象
    VO: {b: undefined}, 

    //作用域链
    scopeChain: [VO(innerTest), AO(test), AO(global)],  
    
    //this指向
    this: window
}
```
另外关于闭包的解释

1. 在函数内部定义新函数

2. 新函数访问外层函数的局部变量，即访问外层函数环境的活动对象属性

3. 新函数执行，创建新的函数执行上下文，外层函数即为闭包

## 执行阶段


