# 编译器Babel

## 背景
市面上的浏览器对js支持的各有不同， 有优等生比如chrome 这种，对html 5(新一代html标准)的特性基本完全支持。 可是还有的人可能还在习惯
用IE等浏览器， 由于大家的标准不一样， 这时候如果写一份代码是无法完全适应另外一个浏览器。  又或者比如我们想要在浏览器用上最新的ECMA 提出的新提案， 需要等待的时间我们也许无法估计。

根本原因:
**人民日益增长的物质文化需要同落后的社会生产之间的矛盾**
## Babel 是一个 JavaScript 编译器
Babel 是一个工具链，主要用于将 先进ECMAScript(ES7, ES8, TS) 版本的代码转换为向后(浏览器)兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他目标环境中。下面列出的是 Babel 能为你做的事情：
* 语法转换
* 通过 Polyfill 方式在目标环境中添加缺失的特性 (通过 @babel/polyfill 模块)
* 源码转换 (codemods)
* [更多](https://babeljs.io/videos.html)

## 如何安装babel
@babel/core @babel/cli @babel/preset-env
```
yarn add -D @babel/core @babel/cli @babel/preset-env
yarn add -D @babel/polyfill
```
* @babel/core: 核心包：封装了babel的核心功能,提供各种transform babel api
* @babel/cli：babel命令行工具
* @babel/preset-env: 插件和预设（preset）
* @babel/polyfill: Babel默认只转换新的JavaScript句法（syntax），而不转换新的API，比如Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise等全局对象，以及一些定义在全局对象上的方法（比如Object.assign）都不会转码。
举例来说，ES6在Array对象上新增了Array.from方法。Babel就不会转码这个方法。如果想让这个方法运行，必须使用babel-polyfill，为当前环境提供一个垫片。

## 如何使用babel

1. 配置babel.config.js
```javascript
const presets = [
    [
      "@babel/env",
      {
        targets: { // 配支持的环境
          "browsers": [ // 浏览器
            "last 2 versions",
            "safari >= 7"
          ],
          "node": "current"
        },
        "modules": 'false',  //设置ES6 模块转译的模块格式 默认是 commonjs
        "debug": true, // debug，编译的时候 console
        useBuiltIns: false,
      },
    ],
  ];
module.exports = { presets };
```
2. 修改package.json
```
"scripts": {
    "build": "babel src --out-dir lib"
  }
```
3. lib文件夹下就是目标环境下的经过编译的js代码

## 对jsx 和ts的支持
通过create-react-app脚手架创建es6
```
 npx create-react-app my-app
 yarn run eject
```
在其展开的package.json 我们就能看到babel的依赖
package.json
```javascript {2,10}
   "dependencies": {
    "@babel/core": "7.4.3",
    "@svgr/webpack": "4.1.0",
    "@typescript-eslint/eslint-plugin": "1.6.0",
    "@typescript-eslint/parser": "1.6.0",
    "babel-eslint": "10.0.1",
    "babel-jest": "^24.8.0",
    "babel-loader": "8.0.5",
    "babel-plugin-named-asset-import": "^0.3.2",
    "babel-preset-react-app": "^9.0.0",
     ....
  },
```
babel-loader 是一个webpack的一个module插件，让webpack打包时候可以用调用babel进行编译
babel-preset-react-app 是一个对jsx的babel插件集合预设， 相当于babel的react一整套解决方案.

## 样例
[babel demo](https://github.com/TRUEJASONFANS/babel_demo)


## 总结
webpack+babel = java Maven 解决了js编译和模块化打包的两大问题