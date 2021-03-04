# typescript 小建议

## 函数重载

```ts
interface User {
  name: string;
  age: number;
}

const user = {
  name: 'Jack',
  age: 123
};

class SomeClass {

  /**
   * 注释 1
   */
  public test(para: User): number;
  /**
   * 注释 2
   */
  public test(para: number, flag: boolean): number;
  public test(para: User | number, flag?: boolean): number {
    // 具体实现
    return 11;
  }
}

const someClass = new SomeClass();

// ok
someClass.test(user);
someClass.test(123, false);

// Error 巧妙限定了test(user, false), 但又share了处理代码
someClass.test(123);
someClass.test(user, false);
```