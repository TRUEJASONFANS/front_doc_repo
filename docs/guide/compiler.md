# 编译器Babel

## 背景
市面上的浏览器对js支持的各有不同， 有优等生比如chrome 这种，对html 5(新一代html标准)的特性基本完全支持。 可是还有的人可能还在习惯
用IE等浏览器， 由于大家的标准不一样， 这时候如果写一份代码是无法完全适应另外一个浏览器。  又或者比如我们想要在浏览器用上最新的ECMA 提出的新提案， 需要等待的时间我们也许无法估计。
Babel 出于这种需求而应运而生

## Babel 是一个 JavaScript 编译器
Babel 是一个工具链，主要用于将 ECMAScript 2015+ 版本的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中。下面列出的是 Babel 能为你做的事情：

## 对jsx 和ts的支持
```
 npx create-react-app my-app
 yarn run eject
```
在其展开的package.json 我们就能看到babel的依赖

```js
    "babel-loader": "8.0.5",
    "babel-preset-react-app": "^9.0.0",
```
