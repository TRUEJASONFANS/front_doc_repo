---
title: module 介绍
published: true
datePublished: 1672667974000
author: Zhongwei
tags:
  - node
authorPhoto: /img/avatar.jpg
bannerPhoto: /img/egg.png
thumbnailPhoto: /img/egg_thumb.png
canonicalUrl: https://devii.dev/blog/dan-abramov
---

# 模块化
## CommomJS
CommonJS模块规范
Node应用由模块组成，采用CommonJS模块规范。

根据这个规范，每个文件就是一个模块，有自己的作用域。在一个文件里面定义的变量、函数、类，都是私有的，对其他文件不可见。

CommonJS规范规定，每个模块内部，module变量代表当前模块。这个变量是一个对象，它的exports属性（即module.exports）是对外的接口。加载某个模块，其实是加载该模块的module.exports属性。

``` js
var x = 5;
var addX = function (value) {
  return value + x;
};
module.exports.x = x;
module.exports.addX = addX;
```

上面代码通过module.exports输出变量x和函数addX。

require方法用于加载模块。


```js
var example = require('./example.js');

console.log(example.x); // 5
console.log(example.addX(1)); // 6
```
exports 与 module.exports
优先使用 module.exports

为了方便，Node为每个模块提供一个exports变量，指向module.exports。这等同在每个模块头部，有一行这样的命令
```js
let exports = module.exports;
```
不能直接将exports变量指向一个值，因为这样等于切断了exports与module.exports的联系。
```js
let exports = module.exports;
let appid = '123456'
// 错误写法
exports = {
  appid
}
// 正确写法
exports.appid = appid
```
## ES6 规范

使用 import , export来导入和导出模块
```js 
// utils.js
export const appid = '123234'
export function getAppid(){
  return '123456'
}

import {appid, getAppid} from './utils' //导入多个模块
import * as utils from 'utils';
console.log(appid)// 123234
console.log(getAppid()) //
```
### export default
为模块指定默认输出

```js
// utils.js
// 错误写法 
// export default const appid = '123456'
// 正确写法
const appid = '123456'
export default appid

//----------------------------
import utils from './utils'
console.log(utils) // 123456
```

```js
import { foo, bar } from ‘./utils’ // 导入多个导出
import * as utils from ‘utils’ // 作为命名空间导入整个模块
import utils from ‘utils’ // 导入默认值
import utils , { foo , bar } from ‘./utils’ // 导入多个导出与默认导出
import { foo , bar } , * as utils from ‘utils’ // 导入命名空间整个模块与多个导出
import(’./utils’).then (res) => { // do something} // import动态导入函数，当使用它的时候，会返回一个promise。
let module = await import(’./utils’) // 支持await关键字
————————————————
版权声明：本文为CSDN博主「前端小小白zyw」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/Vue2018/article/details/85787759
```