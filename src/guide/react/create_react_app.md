---
sidebar: auto
---
# Create-react-app
前面我们讲了这么多关于工具链的组成， 那我们对于我们开发人员需要十分了解她们才能开发JS渲染的 GUI 吗？ 答案是不需要， create-react-app binary 会帮我们打造好开发一个react app的默认
系列配置。[Create React App](https://create-react-app.bootcss.com/)
1. 学习成本低
无需学习和配置大量构建工具。实时页面刷新的功能让你更专注于代码开发。部署时，自动优化你的 bundle。

2. 单一依赖
你的应用程序只需要安装一个依赖包。为了确保所有底层组件都能无缝地协同工作，我们对 Create React App 进行深度测试 —— 以避免出现版本不匹配所导致的麻烦。

3. 未锁定配置
我们使用了 Webpack、Babel、ESLint 和其他优秀的项目作为基础层，为你的应用程序提供强劲的动力。如果你需要进行高级定制，则可以执行 Create React App 中的 "eject" 命令，根据需求自定义配置文件。

4. 易于维护
更新构建工具通常在开发中是一项艰巨 且耗时的任务，不过，当新版本的 Create React App 发布 后，只需运行如下命令即可升级：
```
npm install react-scripts@latest
```

## 创建Hello world 项目 
npx相当于mpm默认就是运行的时候，会到node_modules/.bin路径和环境变量$PATH里面，检查命令是否存在)
```
npx create-react-app my-app 
```


