# 工具链
一组 JavaScript 构建工具链通常由这些组成：
1. 一个 package 管理器，比如 Yarn 或 npm。它能让你充分利用庞大的第三方 package 的生态系统，并且轻松地安装或更新它们。
2. 一个打包器，比如 webpack 或 Parcel。它能让你编写模块化代码，并将它们组合在一起成为小的 package，以优化加载时间。
3. 一个编译器，例如 Babel。它能让你编写的新版本 JavaScript 代码，在旧版浏览器中依然能够工作。

## SPA 前端开发流程图
![流程图](https://user-images.githubusercontent.com/5670289/59024459-85997c80-8884-11e9-8b6a-532ea61ca3fd.jpg)


### 包管理器
1. npm
2. yarn

npm 和 yarn 相当于java世界中的maven,  他们是 js 开发的模块管理器,在js的世界中,依赖的最小单元是一个模块。

#### 本地依赖与全局依赖
添加本地依赖
```
npm install antd //安装antd依赖
yarn add antd //安装antd依赖
```
添加全局依赖
```
npm install -g 
```
通过上面的命令行（带-g修饰符）安装某个包，就叫全局安装。通常全局包安装在node目录下的node_modules文件夹。可以通过执行下面几条命令查看node、npm的安装目录和全局包的安装目录。
全局安装的包可提供直接执行的命令，他是可以独立运行的一个应用程序
```
which node   // 查看node的安装目录
which npm   // 查看npm的安装目录
npm root -g // 查看全局包的安装目录
npm list -g --depth 0 //查看全局安装过的包
````

#### 开发依赖与生产依赖

保存到开发依赖(devDependencies): npm install pageName --save-dev
保存到生产依赖(dependencies): npm install pageName --save

```
添加dev依赖
npm i pageName --save-dev
yarn add -D pageName
```
```
添加生产依赖
npm i pageName
yarn add pageName
```
devDependencies只会在开发环境下使用，生产环境不会被打入包内；而dependencies不仅在开发环境中要使用，生产环境也需要使用到。根据以上规则，我们就很容易区分哪些插件是用--save-dev模式安装，哪些用--save模式安装。

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

#### webpack


1. Neutrino 
    把 webpack 的强大功能和简单预设结合在一起。并且包括了 React 应用和 React 组件的预设。(脚手架库)

2. nwb
    特别适合于将 React 组件发布到 npm。它也能用于创造 React 应用
#### parcel
    是一个快速的、零配置的网页应用打包器，并且可以搭配 React 一起工作   
#### browserify
    require('modules') in the browser
    Use a node-style require() to organize your browser code and load modules installed by npm.
    browserify will recursively analyze all the require() calls in your app in order to build a bundle you can serve up to the browser in a single <script> tag.
### js编译器
#### babel


## 作用
把源代码转换成发布到线上的可执行 JavaScrip、CSS、HTML 代码




