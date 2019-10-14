# Umi
## 历史
“2015 年之前我们有 Sea.JS、Arale、SPM 开源技术方案，大家可以有所耳闻。
2015 年我们接入 React，从自研的 Roof 到 Redux 再到开源的 Dva，一步步验证我们的最佳实践，并把这些实践交给开源社区检验。
2017 年开始尝试了新一代的企业级前端框架，Umi 和 Bigfish，前者是从无线业务中长出来的，后者是从中台业务中长出来的。
一个团队出两个框架毕竟不是长久之计，后来老大直接把两拨人调到一个组，于是就愉快地合并在了一起。”
![历史](http://5b0988e595225.cdn.sohucs.com/images/20190717/8e42b0fbccba4ff48a4f7f9f2acbdcc5.jpeg)
## 两个框架融合之和
![两个框架融合之和](http://5b0988e595225.cdn.sohucs.com/images/20190717/7c6ab855060444f281cdc424d2221fba.jpeg)

内部数据：

![内部数据](http://5b0988e595225.cdn.sohucs.com/images/20190717/8f84ae3045ba4e7c9dd218a876e1c790.jpeg)

## 理论基础
![Utilize compiler](https://shipusercontent.com/5af08fa4045b39c3110110510422527b/Pasted%20Image%202.png)
[umi as a Compiler (Full Version)](https://hackmd.io/@UXqYDTxCTie91Shvsppqyw/ByGeBtv9z?type=view#%E6%8F%92%E4%BB%B6%E6%9C%BA%E5%88%B6)

## 架构
![架构](https://gw.alipayobjects.com/zos/rmsportal/zvfEXesXdgTzWYZCuHLe.png)

## 插件
市场：
![UMI](http://5b0988e595225.cdn.sohucs.com/images/20190717/3fe672829b914e7994c8078f6e923654.jpeg)
![bigsh&&UMI市场](http://5b0988e595225.cdn.sohucs.com/images/20190717/1e007f12a4ff42cea0b50ffe5f5020f8.jpeg)

## 资产市场
资产市场分了四级:

1. 组件，指通用组件，就是 antd，在下半年将要发布的 antd@4 里，我们会陆续提取更多通用组件到 antd 中。
2. 业务组件，不能提取通用组件的，我们会提到内部统一的业务组件仓库中。
3. 区块，由组件组成，可以想象成代码片段。
4. 页面模板，由区块组成

## 如何兼顾多类技术栈

1. MPA（多页应用）
2. 微前端

## 设计理念
React 的核心概念就是组件。UMI框架的主要功能，就是定义了一套编写和使用组件的规范
![UMI前端代码层次]](https://gw.alipayobjects.com/zos/rmsportal/trbRYJugHYeODogmIgwi.png)
上图中，左侧是服务端代码的层次结构，由 Controller、Service、Data Access 三层组成服务端系统：
1. Controller 层负责与用户直接打交道，渲染页面、提供接口等，侧重于展示型逻辑。
2. Service 层负责处理业务逻辑，供 Controller 层调用。
3. Data Access 层顾名思义，负责与数据源对接，进行纯粹的数据读写，供 Service 层调用。
上图的右侧是前端代码的结构，同样需要进行必要的分层：
1. Page 负责与用户直接打交道：渲染页面、接受用户的操作输入，侧重于展示型交互性逻辑。
2. Model 负责处理业务逻辑，为 Page 做数据、状态的读写、变换、暂存等。
3. Service 负责与 HTTP 接口对接，进行纯粹的数据读写。

## React -> React Redux -> Redux saga-> Dva
[图解React->React Redux-> Redux sage-> Dva](https://www.yuque.com/flying.ni/the-tower/tvzasn)

## Model
Model 是前端分层中的腰部力量，承上启下，负责管理数据（状态）。业界主流的状态管理类库有 redux、mobx，等。在我们的教程中，则使用 DVA 框架承担这一角色。
```ts
export default { // 打开dva
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      dva: true,
    }],
  ],
  // ...
}
```
Model 示例
```
app.model({

  namespace: 'todoList',

  state: [],

  effects: {
    *query({ _ }, { put, call }) {
      const rsp = yield call(queryTodoListFromServer);
      const todoList = rsp.data;
      yield put({ type: 'save', payload: todoList });
    },
  },

  reducers: {
    save(state, { payload: todoList }) {
      return [...state, todoList];
    },
  },

});
```
1. namespace：model 的命名空间，只能用字符串。一个大型应用可能包含多个 model，通过namespace区分。
2. state：当前 model 状态的初始值，表示当前状态。
3. reducers：用于处理同步操作，可以修改 state，由 action 触发。reducer 是一个纯函数，它接受当前的 state 及一个 action 对象。action 对象里面可以包含数据体（payload）作为入参，需要返回一个新的 state。
4. effects：用于处理异步操作（例如：与服务端交互）和业务逻辑，也是由 action 触发。但是，它不可以修改 state，要通过触发 action 调用 reducer 实现对 state 的间接操作。
5. action：是 reducers 及 effects 的触发器，一般是一个对象，形如{ type: 'add', payload: todo }，通过 type 属性可以匹配到具体某个 reducer 或者 effect，payload 属性则是数据体，用于传送给 reducer 或 effect。
