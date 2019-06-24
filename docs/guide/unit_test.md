# Unit Test

## jest
Jest是由Facebook开发并维护的一套js的单元测试框架
### Getting Started

```shell
//使用 yarn 安装 Jest︰
yarn add --dev jest
```
sum.js
```javascript
function sum(a, b) {
  return a + b;
}
module.exports = sum;
```
sum.test.js
```javascript
const sum = require('./sum');
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```
