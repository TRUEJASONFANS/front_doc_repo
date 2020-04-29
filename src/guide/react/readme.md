# React声明组件的几种方式
## React.createClass deprecated
belong to es5

##函数式组件
```tsx
import React from 'react';

interface Props {
  name: string,
}
function HelloComponent(props:Props, /* context */) {
  return <div>Hello {props.name}</div>
}
export default HelloComponent;
```
1. 函数式组件无副作用（React 组件中执行过数据获取、订阅或者手动修改过 DOM。我们统一把这些操作称为“副作用”，或者简称为“作用”。）
2. 组件不能访问this对象
3. 组件无法访问生命周期的方法
4. react 未来会对函数式组件性能进行提升优化。

## 类声明式组件 
```tsx
class InputControlES6 extends React.Component {
    constructor(props) {
        super(props);

        // 设置 initial state
        this.state = {
            text: props.initialValue || 'placeholder'
        };

        // ES6 类中函数必须手动绑定
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            text: event.target.value
        });
    }

    render() {
        return (
            <div>
                Type something:
                <input onChange={this.handleChange}
               value={this.state.text} />
            </div>
        );
    }
}
InputControlES6.propTypes = {
    initialValue: React.PropTypes.string
};
InputControlES6.defaultProps = {
    initialValue: ''
};

```
1. 有状态的组件
2. 其成员函数不会自动绑定this
3. 结构比较冗余

## 如何用函数式组件取代ES6 Component继承的方式 =>> react hook
那如何弥补函数式组件没有状态的缺点？
1. import from react16.8
2. 使用useState代替state
```tsx
import React, { useState } from 'react';

function Example() {
  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
```
 const [fruit, setFruit] = useState('banana');
```
```
let fruitStateVariable = useState('banana'); // 返回一个有两个元素的数组
let fruit = fruitStateVariable[0]; // 数组里的第一个值
let setFruit = fruitStateVariable[1]; // 数组里的第二个值
当我们使用 useState 定义 state 变量时候，它返回一个有两个值的数组。第一个值是当前的 state，第二个值是更新 state 的函数。使用 [0] 和 [1] 来访问有点令人困惑，因为它们有特定的含义。这就是我们使用数组解构的原因。
```
3. 使用effect代替副作用

```tsx
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  }
  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
```
vs
```tsx
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
如果你熟悉 React class 的生命周期函数，
你可以把 useEffect Hook 看做 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合。

useEffect 会在每次渲染后都执行吗？ 
是的，默认情况下，它在第一次渲染之后和每次更新之后都会执行。
你可能会更容易接受 effect 发生在“渲染之后”这种概念，不用再去考虑“挂载”还是“更新”。React 保证了每次运行 effect 的同时，DOM 都已经更新完毕。

