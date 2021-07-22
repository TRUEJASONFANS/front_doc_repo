# 模块化
##　es2015 module 未来的统一标准

common js , AMD: 属于运行时确定，　common JS 导入和导出的都是对象，输入时必须查找对象属性

语法
```js
import { myMethod } from 'util';

```
```js
// circle.js

export function area(radius) {
  return Math.PI * radius * radius;
}

export function circumference(radius) {
  return 2 * Math.PI * radius;
}
```