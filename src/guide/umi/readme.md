# Umi
## 历史
### React -> Roof -> Redux -> Dva -> Umi+bigfish -> Umi

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
[umi as a CompilerFull Version](https://tomdale.net/2017/09/compilers-are-the-new-frameworks/)

**大意**: 本期文章篇幅短小却言简意骇，文中开头作者就抛出自己的观点 **Web 框架正在从运行库转变为优化编译器**。
[精读]]](https://zhuanlan.zhihu.com/p/34931049)

Umi 更像一个**编译期框架**

## 架构
![架构](https://gw.alipayobjects.com/zos/rmsportal/zvfEXesXdgTzWYZCuHLe.png)

“那么别人为啥要用你的框架？首先，框架要好用，这是最基本的；然后，使用者尤其是资深的前端同学，还得在这上面找到自己的成就感和 ownership，另外如果绩效漂亮就更好了。总不能别人用你的框架，然后只有你自己一个人的绩效好，那是不会长久的。”

解法:基于插件体系
![Bigfish架构](https://static001.infoq.cn/resource/image/49/db/49309c4100276f9968520b3d1d2424db.png)

* 可以写一个独立的功能插件，比如和某个服务的对接，比如扩展路由的某个功能，比如实现一套特殊的补丁方案；
* 可以做归类，把一系列插件整理到一个插件集里，适用于某一类的业务开发；
* 可以扩展应用类型，比如 SPA、MPA、微前端等等；
* 可以扩展部署模式，比如和不同的框架或平台做结合；

![插件生命周期](https://static001.infoq.cn/resource/image/ed/38/ed9798f035cfddf3ac759740404ad138.png)

## 设计理念
React 的核心概念就是组件。
UMI框架的主要功能，就是定义了一套**编写和使用组件的规范**。

### 代码分层
![UMI前端代码层次](https://gw.alipayobjects.com/zos/rmsportal/trbRYJugHYeODogmIgwi.png)
上图中，左侧是服务端代码的层次结构，由 Controller、Service、Data Access 三层组成服务端系统：
1. Controller 层负责与用户直接打交道，渲染页面、提供接口等，侧重于展示型逻辑。
2. Service 层负责处理业务逻辑，供 Controller 层调用。
3. Data Access 层顾名思义，负责与数据源对接，进行纯粹的数据读写，供 Service 层调用。

上图的右侧是前端代码的结构，同样需要进行必要的分层：
1. Page 负责与用户直接打交道：渲染页面、接受用户的操作输入，侧重于展示型交互性逻辑。
2. Model 负责处理业务逻辑，为 Page 做数据、状态的读写、变换、暂存等。
3. Service 负责与 HTTP 接口对接，进行纯粹的数据读写。

### React -> React Redux -> Redux saga-> Dva
[图解React->React Redux-> Redux sage-> Dva](https://www.yuque.com/flying.ni/the-tower/tvzasn)

### Model
Model 是前端分层中的腰部力量，承上启下，负责管理数据（状态）。业界主流的状态管理类库有 redux、mobx，等。在我们的教程中，则使用 [Dva概念](https://dvajs.com/guide/concepts.html#%E6%95%B0%E6%8D%AE%E6%B5%81%E5%90%91) 框架承担这一角色。
```javascript
import pathToRegexp from 'path-to-regexp';
import * as pockerService from '@/pages/pockerRoom/services/pockerService';
import { number, string } from 'prop-types';
export default {
  namespace: 'pockerBoard',
  state: {
    scoreList: [],
    roomName: '',
    resetFlag: false,
    curPage: 1,
    totalPage: 1,
    clickedNum: -1,
    playerName: '',
    featureName: '',
    internalTaskName: ''
  },
  reducers: {//同步操作

    syncRoomName(state, { payload: { roomName } }) {
      return {...state, roomName }
    },
    
    syncPage(state, {payload: {curPage, totalPage, resetFlag, scoreList, playerName, clickedNum, featureName, internalTaskName}}) {
      return {...state, curPage, totalPage, resetFlag , scoreList, playerName, clickedNum, featureName, internalTaskName}
    },
    // syncTotalPage(state, {payload: {totalPage}}) {
    //   return {...state, totalPage}
    // }
  },
  effects: {//异步操作
    *queryStoryPoints({ payload: roomName }, { call }) {
      yield call(pockerService, roomName);
    },
    *onClickPocker({ payload: values }, { call }) {
      yield call(pockerService.onClickPocker, values)
    },
    *addTicketRecord({ payload: values }, { call }) {
      yield call(pockerService.addTikcetRecord(values));
    },
    *onNextGame({ payload: values }, { call }) {
      yield call(pockerService.onNextGame(values));
    },
    *AddStory({ payload: values }, { call }) {
      yield call(pockerService.addStory(values));
    },
    *onNavigateToPage({ payload: values }, { call }) {
      yield call(pockerService.onNavigateToPage(values));
    },
  },

  subscriptions: {//订阅操作
    init({ dispatch, history }) {
      return history.listen(location => {
        const match = pathToRegexp('/pockerRoom/:id').exec(location.pathname);
        
        if (match) {
          var roomId = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);

          //TODO: verify the backend whether the room is created or not
          // join room
          dispatch({
            type: 'syncRoomName',
            payload: {
              roomName: roomId,
            }
          });
          pockerService.fetch((data) => {
            let parseJson = JSON.parse(data.body);
            dispatch({
              type: 'syncPage',
              payload: {
                curPage: parseJson.curNum,
                totalPage: parseJson.totalNum,
                resetFlag: parseJson.reset,
                clickedNum: parseJson.clickedNum,
                scoreList: parseJson.playerScoreList,
                playerName: parseJson.playerName,
                featureName: parseJson.featureName,
                internalTaskName: parseJson.internalTaskName
              }
            });
          }, roomId, 1);
        }
      });
    },
  },
};

```

### 约定式路由 or 配置式路由

[路由](https://umijs.org/zh/guide/router.html)

### 其他
umi 是基于路由的，所以具备了管理入口的能力。你甚至可以简单地理解为 umi = 路由 + webpack，在此基础上做了很多额外的工作。然后，管理了入口之后，能做的事情就很多了。
比如：
* 开发时按需编译
* 运行时按需加载，做 code-splitting
* 智能提取公共代码，加速用户访问，通常是被 路由数/2 引用的模块才被提取到公共代码中
* 服务端渲染
* 基于路由的埋点
* 基于约定，如果 ./src/pages/404.js 存在则添加为 fallback 路由
* ...

## 资产市场 (一个人能干 10 个人的活) 
资产市场分了四级:

1. 组件，指通用组件，就是 antd，在下半年将要发布的 antd@4 里，我们会陆续提取更多通用组件到 antd 中。
2. 业务组件，不能提取通用组件的，我们会提到内部统一的业务组件仓库中。
3. 区块，由组件组成，可以想象成代码片段。 可以发布不同的区块 参考：
4. 页面模板，由区块组成

市场：
![UMI](http://5b0988e595225.cdn.sohucs.com/images/20190717/3fe672829b914e7994c8078f6e923654.jpeg)
![bigsh&&UMI市场](http://5b0988e595225.cdn.sohucs.com/images/20190717/1e007f12a4ff42cea0b50ffe5f5020f8.jpeg)

## 如何兼顾多类技术栈

* MPA（多页应用）
* 微前端 -> ["乾坤"](https://github.com/umijs/qiankun)

## 参考
* [Ant design实战](https://antd-course.ulivz.com/tydf0a.html)
* [蚂蚁金服的前端框架和工程化实践](https://github.com/sorrycc/blog/issues/85)