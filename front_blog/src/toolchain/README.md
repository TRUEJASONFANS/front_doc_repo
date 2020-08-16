# Home
## IDE
### vscode
1. native support jsx and format
2. eslint plugin to check 

## Node
the javascript runtime

## React
### JSX = JS+HTML


## React Framework

### Next 
   1. 构建服务端渲染的网站
### Umi[https://umijs.org/zh/guide/]

### Razzle
    是一个无需配置的服务端渲染框架，但它提供了比 Next.js 更多的灵活性

## Quality tool
### eslint

## Test framework
1. Jest
``` 
// 测试一个function, 文件名必须以*.test.(j|t)s 结尾
const sum = function (a, b) {
    return a + b;
  };
  
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
```
```
// TestDemo.tsx

export default () => {
    return <div>test</div>;
};
```
```
import 'jest';
import { mount } from 'enzyme';
import TestDemo from '../component/TestDemo'

test('TestDemo', () => {
  const wrapper = mount(<TestDemo />);
  expect(wrapper.find('div').text()).toBe('test');
});

```
2. Karma
3. Mocha

