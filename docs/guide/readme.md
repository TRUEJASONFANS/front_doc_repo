---
prev: false
next: ./packageManager/
---

# 工具链
一组 JavaScript 构建工具链通常由这些组成：
1. 一个 package 管理器，比如 Yarn 或 npm。它能让你充分利用庞大的第三方 package 的生态系统，并且轻松地安装或更新它们。
2. 一个打包器，比如 webpack 或 Parcel。它能让你编写模块化代码，并将它们组合在一起成为小的 package，以优化加载时间。
3. 一个编译器，例如 Babel。它能让你编写的新版本 JavaScript 代码，在旧版浏览器中依然能够工作。

## SPA 前端开发流程图
![流程图](https://user-images.githubusercontent.com/5670289/59024459-85997c80-8884-11e9-8b6a-532ea61ca3fd.jpg)

### 打包器

#### 模块规范

1. CommomJS (同步)
```
a.js
exports.add = function(a,b){
	return a+b;
}

b.js 
var add = require('a.js').add;
console.log(add(1,2))//3
```
2. AMD (异步)
```
define(['myModule', 'myOtherModule'],function(myModule, myOtherModule) {
	console.log(myModule.hello());
});
```
3. UMD (统一)
简而言之就是从同步到异步再到统一
[详细参见](https://75team.com/post/%E8%AF%91%E7%A5%9E%E9%A9%AC%E6%98%AFamd-commonjs-umd.html)

| 环境        | 规范           | 实现  |
| ------------- |:-------------:| -----:|
| node      | CommonJS | nodejs 模块 |
| 浏览器     | CommonJS      |   Browserify |
| 浏览器 | AMD |   RequireJS |
| 浏览器 | UMD |   👆两者 |

4. ES module (规范) (我们用这种就行了)
ECMA缺乏官方的模块规范才出来的，既然对模块化的需求这么旺盛，官方在ES2015(ES6)里也就提出了官方的模块化方案，主要使用import和export
还没有被浏览器实现，大部分项目已通过 babel 或 typescript 提前体验。
示例
```javascript
import { export1 , export2 } from "module-name";
```





