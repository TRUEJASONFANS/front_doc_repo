---
prev: false
next: ./others
---

# 打包器

## 模块规范

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
上面的模块化解决方案都是缺乏官方的模块规范才出来的，既然对模块化的需求这么旺盛，官方在ES2015(ES6)里也就提出了官方的模块化方案，主要使用import和export
还没有被浏览器实现，大部分项目已通过 babel 或 typescript 提前体验。
示例
```javascript
import { export1 , export2 } from "module-name";
```

## webpack
Webpack 是一个打包模块化 JavaScript 的工具，在 Webpack 里一切文件皆模块，通过 Loader 转换文件，通过 Plugin 注入钩子，最后输出由多个模块组合成的文件。Webpack 专注于构建模块化项目。
[图例](http://webpack.wuhaolin.cn/1%E5%85%A5%E9%97%A8/img/1-2webpack.png)

### 一个健全打包期的职责
1. 代码转换：TypeScript 编译成 JavaScript、SCSS 编译成 CSS 等。
2. 文件优化：压缩 JavaScript、CSS、HTML 代码，压缩合并图片等。
3. 代码分割：提取多个页面的公共代码、提取首屏不需要执行部分的代码让其异步加载。
4. 模块合并：在采用模块化的项目里会有很多个模块和文件，需要构建功能把模块分类合并成一个文件。
5. 自动刷新：监听本地源代码的变化，自动重新构建、刷新浏览器。
6. 代码校验：在代码被提交到仓库前需要校验代码是否符合规范，以及单元测试是否通过。
7. 自动发布：更新完代码后，自动构建出线上发布代码并传输给发布系统。

### loader 文件翻译员
打包器中的文件类型翻译员，
### plugin
webpack的插件用来提供额外的功能（通过在构建过程注入钩子实现）

### DevServer
1. 提供 HTTP 服务而不是使用本地文件预览；
2. 监听文件的变化并自动刷新网页，做到实时预览；
3. 支持 Source Map，以方便调试。

### 几个核心概念
1. Entry：入口，Webpack 执行构建的第一步将从 Entry 开始，可抽象成输入。
2. Module：模块，在 Webpack 里一切皆模块，一个模块对应着一个文件。Webpack 会从配置的 Entry 开始递归找出所有依赖的模块。
3. Chunk：代码块，一个 Chunk 由多个模块组合而成，用于代码合并与分割。
4. Loader：模块转换器，用于把模块原内容按照需求转换成新内容。
5. Plugin：扩展插件，在 Webpack 构建流程中的特定时机注入扩展逻辑来改变构建结果或做你想要的事情。
6. Output：输出结果，在 Webpack 经过一系列处理并得出最终想要的代码后输出结果。