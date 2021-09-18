# Hook

## Hook 使你在无需修改组件结构的情况下复用状态逻辑
理解每一次的 Rendering
每一次渲染都有它自己的 Props and State
每一次渲染都有它自己的事件处理函数
每次渲染都有它自己的 Effects
Hook 不能在 class 组件中使用
### 副作用 side effect

### useEffect
基本上90%的情况下,都应该用这个,这个是在render结束后,你的callback函数执行,但是不会block browser painting,算是某种异步的方式吧,但是class的componentDidMount 和componentDidUpdate是同步的,在render结束后就运行,useEffect在大部分场景下都比class的方式性能更好.

1. 多个useEffect 将按在Function Component中的 进队顺序依次执行， 先进先执行
2. useEffect 依赖数组的依赖为浅依赖， 什么叫浅依赖， 即只要该对象指针不变， 则视该对象不变， 如如下示例， 如果有人调用handleAdd,由于只是修改了obj一个域对象，而Obj所指向对象并没有改变，所有依赖数组项并没有变化，所以useEffect不会重新触发调用
```js
export default (props = {}) => {

    const [obj, setObj] = useState({ person: { name: "xxx" } });

    console.log('-----[parent]  re-render----');
    console.log(obj);

    useEffect(() => {
        console.log('-----[parent]  obj changed - useEffect ----');
    }, [obj]);

    const handleAdd = () => {
        const newObj = Object.assign({}, { person: { name: "xxx2" } })
        setObj(newObj);
    }

    return (
        <div>
            <Child onAdd={handleAdd} obj={obj} />
        </div>
    );
}
```

### useLayoutEffect
这个是用在处理DOM的时候,当你的useEffect里面的操作需要处理DOM,并且会改变页面的样式,就需要用这个,否则可能会出现出现闪屏问题, useLayoutEffect里面的callback函数会在DOM更新完成后立即执行,但是会在浏览器进行任何绘制之前运行完成,阻塞了浏览器的绘制.

### useCallback -> Returns a memoized callback.
缓存函数, 缓存函数除非依赖项改变, 提过细化依赖项可恨好避免子组件在非必须要情况下重新渲染。
```js
// parent
export default (props = {}) => {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(0);

    const countNumber = useCallback(() => {
        return count + step;
    }, [count, step]);// 如果依赖项由[count, step] 改为[], 则child 一直输出为0，


    const handleSetStep = () => {
        setStep(step + 1);
        setCount(count + step);
    }

    return (
        <div>
            <button onClick={handleSetStep}>set step is : {step} count is : {count}</button>
            <Child countNumber={countNumber}/>
        </div>
    );
}
// child
export default (props = {}) => {

    useEffect(() => {
        console.log('.....')
        console.log(props.countNumber());
    }, [props.countNumber]);

    return (
        <div>
            {props.countNumber()}
        </div>
    );
}
```
### useMemo -> Returns a memoized value
缓存函数, 缓存计算值除非依赖项改变, 提过细化依赖项可恨好避免子组件在非必须要情况下重新渲染。
```js
const myNumber = 5
const answer = useMemo(() => myNumber + 5, [myNumber])
```
将记住结果10

### React.memo
memo(FC, (prevProps, nextProps) => return true);
memo 用来包装一个FC，后接一个刷新判断函数
```js
const isEqual = (prevProps, nextProps) => {
    if (prevProps.number !== nextProps.number) {
        return false;
    }
    return true;
}
export default memo((props = {}) => {
    console.log(`--- memo re-render ---`);
    return (
        <div>
            {/* <p>step is : {props.step}</p> */}
            {/* <p>count is : {props.count}</p> */}
            <p>number is : {props.number}</p>
        </div>
    );
}, isEqual);
```
