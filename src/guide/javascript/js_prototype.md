# javascript 原型链

## Function 才有的属性 prototype

```js
function Person() {

}
var person = new Person();
person.name = 'Kevin';
console.log(person.name) // Kevin

// 虽然写在注释里，但是你要注意：
// prototype是函数才会有的属性
Person.prototype.name = 'Kevin';
var person1 = new Person();
var person2 = new Person();
console.log(person1.name) // Kevin
console.log(person2.name) // Kevin
```

## 什么是原型
那什么是原型呢？你可以这样理解：每一个JavaScript对象(null除外)在创建的时候就会与之关联另一个对象，这个对象就是我们所说的原型，每一个对象都会从原型"继承"属性。
这里 person1, person 2的原型是 Person.prototype

## __proto__
每一个JavaScript对象(除了 null )都具有的一个属性，叫__proto__，这个属性会指向该对象的原型。 所以有
```js
function Person() {

}
var person = new Person();
console.log(person.__proto__ === Person.prototype); // true
```


## constructor
既然实例对象和构造函数都可以指向原型，那么原型是否有属性指向构造函数或者实例呢？
指向实例倒是没有，因为一个构造函数可以生成多个实例，但是原型指向构造函数倒是有的，这就要讲到第三个属性：constructor，每个原型都有一个 constructor 属性指向关联的构造函数。


```js
function Person() {

}
console.log(Person === Person.prototype.constructor); // true
```

## summary1
综上 我们已经得出
```js
综上我们已经得出：

function Person() {

}

var person = new Person();

console.log(person.__proto__ == Person.prototype) // true  对象的__proto__， 和构造函数的prototype 指向原型对象
console.log(Person.prototype.constructor == Person) // true 原型对象的constructor 指向构造函数
// 顺便学习一个ES5的方法,可以获得对象的原型
console.log(Object.getPrototypeOf(person) === Person.prototype) // true
```
[参考节选自](https://github.com/mqyqingfeng/Blog/issues/2)

## 原型链
每个实例对象（ object ）都有一个私有属性（称之为 __proto__ ）指向它的构造函数的原型对象（prototype ）。该原型对象也有一个自己的原型对象( __proto__ ) ，层层向上直到一个对象的原型对象为 null。根据定义，null 没有原型，并作为这个原型链中的最后一个环节。