---
sidebar: auto
next: ./react_query.md
---

# React 进阶

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




### HOC

React的高阶组件主要用于组件之间共享通用功能而不重复代码的模式（也就是达到DRY模式）。

高阶组件实际是一个函数。 HOC函数将组件作为参数并返回一个新的组件。它将组件转换为另一个组件并添加额外的数据或功能。

```jsx
import React from 'react';

const withSecretToLife = (WrappedComponent) => {
  class HOCExample extends React.Component {
    render() {
      return (
        <WrappedComponent
          secretToLife={42}
          {...this.props}
        />
      );
    }
  }
    
  return HOC;
};

export default withSecretToLife;

import React from 'react';
import withSecretToLife from 'components/withSecretToLife';

const DisplayTheSecret = props => (
  <div>
    The secret to life is {props.secretToLife}.
  </div>
);

const WrappedComponent = withSecretToLife(DisplayTheSecret);

export default WrappedComponent;
```
已知secretToLife为42，有一些组件需要共享这个信息，此时创建了SecretToLife的HOC，将它作为prop传递给我们的组件。

此时，WrappedComponent只是DisplayTheSecret的增强版本，允许我们访问secretToLife属性。

### render props
Render Props 的核心思想是，通过一个函数将class组件的state作为props传递给纯函数组件
```javascript
import React from 'react';

const SharedComponent extends React.Component {
  state = {...}
  render() {
    return (
      <div>
        {this.props.render(this.state)}
      </div>
    );
  }
}

export default SharedComponent;

//this.props.render()是由另外一个组件传递过来的。为了使用以上组件，我们可以进行下面的操作：

import React from 'react';
import SharedComponent from 'components/SharedComponent';

const SayHello = () => (
  <SharedComponent render={(state) => (
    <span>hello!,{...state}</span>
  )} />
);

```

[本文节选自](https://www.jianshu.com/p/ff6b3008820a)


