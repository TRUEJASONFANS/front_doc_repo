# advanced

## 例题

练习1：Getter

- 构造一个类型`Getter<T>`，其包含`T`所有属性的Getter方法
- 对于`T`中的每一个**非函数**成员`abc`，`Getter<T>`有对应的`getter`方法(即一个无参数方法，返回类型为abc的类型)
    - 如果其类型为`boolean`，则方法名为`isAbc`
    - 如果其类型不为`boolean`，则方法名为`getAbc`

示例：

```typescript
Getter<{
    id: number,
    valid: boolean,
    run(): void
}>

=>

{
    getId(): number
    isValid(): booean
}
```

```ts
type GetterWithFunction<T> = { [K in keyof T as (T[K] extends boolean ? `is${Capitalize<string & K>}`: `get${Capitalize<string & K>}`)]: () => T[K] };

type NoFunction<T> = { [K in keyof T as (T[K] extends Function ? never : K)]: T[K] };

type Getter = GetterWithFunction<NoFunction<{
    id: number,
    valid: boolean,
    run(): void
}>>;

```

练习2：PropertyName

- 构造一个类型`PropertyName<T>`，其联合`T`的所有属性的名字
- 对于`T`中的每个**函数**成员
    - 如果其是一个Getter方法(定义参考上一个练习)，获得属性的名字
    - 如果不是，舍弃
- 对于`T`中的非函数成员，获得其名字

示例：

```typescript
PropertyName<{
    id: number,
    valid: boolean,
    getName(): string,
    isLocked(): boolean,
    issue(): void
}>

=>

'id' | 'valid' | 'name' | 'locked'
```

```ts
type getter = ()=> string| boolean;


type deletePrefixGetMethods<V extends string> = V extends `get${infer R}` ? R : V extends `is${infer R}` ? R: V;


type PropertyName<T> = keyof { [K in keyof T as (T[K] extends getter ? (deletePrefixGetMethods<string & K>) : K)]: () => T[K] };

type q2 = PropertyName<{
    id: number,
    valid: boolean,
    getName(): string,
    isLocked(): boolean,
    issue(): void
}>

```