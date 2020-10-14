## 三大周期
Mounting：已插入真实 DOM
Updating：正在被重新渲染
Unmounting：已移出真实 DOM

## 一些生命周期方法
1. componentWillMount 在渲染前调用,在客户端也在服务端。

2. componentDidMount(在第一次渲染后调用) : 在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。 如果你想和其他JavaScript框架一起使用，可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异步操作阻塞UI)。

3. componentWillReceiveProps 在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用。

4. shouldComponentUpdate 返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。 
可以在你确认不需要更新组件时使用。

5. componentWillUpdate(第一次渲染时候不调用用):在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。

6. componentDidUpdate 在组件完成更新后即调用。在初始化时不会被调用。

7. componentWillUnmount在组件从 DOM 中移除之前立刻被调用。

## Hook 使你在无需修改组件结构的情况下复用状态逻辑
理解每一次的 Rendering
每一次渲染都有它自己的 Props and State
每一次渲染都有它自己的事件处理函数
每次渲染都有它自己的 Effects
Hook 不能在 class 组件中使用
### 副作用 side effect



### useEffect
基本上90%的情况下,都应该用这个,这个是在render结束后,你的callback函数执行,但是不会block browser painting,算是某种异步的方式吧,但是class的componentDidMount 和componentDidUpdate是同步的,在render结束后就运行,useEffect在大部分场景下都比class的方式性能更好.

### useLayoutEffect
这个是用在处理DOM的时候,当你的useEffect里面的操作需要处理DOM,并且会改变页面的样式,就需要用这个,否则可能会出现出现闪屏问题, useLayoutEffect里面的callback函数会在DOM更新完成后立即执行,但是会在浏览器进行任何绘制之前运行完成,阻塞了浏览器的绘制.

