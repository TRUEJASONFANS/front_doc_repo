# Egg.js
Egg.js 为企业级框架和应用而生

## 设计原则
Egg 的插件机制有很高的可扩展性，一个插件只做一件事（比如 Nunjucks 模板封装成了 egg-view-nunjucks、MySQL 数据库封装成了 egg-mysql）。Egg 通过框架聚合这些插件，并根据自己的业务场景定制配置，这样应用的开发成本就变得很低。

Egg 奉行『约定优于配置』，按照一套统一的约定进行应用开发，团队内部采用这种方式可以减少开发人员的学习成本，开发人员不再是『钉子』，可以流动起来。没有约定的团队，沟通成本是非常高的，比如有人会按目录分栈而其他人按目录分功能，开发者认知不一致很容易犯错。但约定不等于扩展性差，相反 Egg 有很高的扩展性，可以按照团队的约定定制框架。使用 Loader 可以让框架根据不同环境定义默认配置，还可以覆盖 Egg 的默认约定。

## 特点

1. 提供基于 Egg 定制上层框架的能力
2. 高度可扩展的插件机制
3. 内置多进程管理
4. 基于 Koa 开发，性能优异
5. 框架稳定，测试覆盖率高
6. 渐进式开发



## Egg.js 与 Koa
1. Egg 继承于 Koa
2. Koa 中间件模型
![Koa](https://camo.githubusercontent.com/d80cf3b511ef4898bcde9a464de491fa15a50d06/68747470733a2f2f7261772e6769746875622e636f6d2f66656e676d6b322f6b6f612d67756964652f6d61737465722f6f6e696f6e2e706e67)

例如添加一个异常处理的中间件：
```js
async function onerror(ctx, next) {
  try {
    await next();
  } catch (err) {
    ctx.app.emit('error', err);
    ctx.body = 'server error';
    ctx.status = err.status || 500;
  }
}
```
3. 扩展
在基于 Egg 的框架或者应用中，我们可以通过定义 app/extend/{application,context,request,response}.js 来扩展 Koa 中对应的四个对象的原型，通过这个功能，我们可以快速的增加更多的辅助方法，例如我们在 app/extend/context.js 中写入下列代码：

```js
// app/extend/context.js
module.exports = {
  get isIOS() {
    const iosReg = /iphone|ipad|ipod/i;
    return iosReg.test(this.get('user-agent'));
  },
};

```

``` js
在 Controller 中，我们就可以使用到刚才定义的这个便捷属性了：

// app/controller/home.js
exports.handler = ctx => {
  ctx.body = ctx.isIOS
    ? 'Your operating system is iOS.'
    : 'Your operating system is not iOS.';
};
```
4. 插件
在 Express 和 Koa 中，经常会引入许许多多的中间件来提供各种各样的功能，例如引入 koa-session 提供 Session 的支持，引入 koa-bodyparser 来解析请求 body。而 Egg 提供了一个更加强大的插件机制，让这些独立领域的功能模块可以更加容易编写。

一个插件可以包含

extend：扩展基础对象的上下文，提供各种工具类、属性。
middleware：增加一个或多个中间件，提供请求的前置、后置处理逻辑。
config：配置各个环境下插件自身的默认配置项。
一个独立领域下的插件实现，可以在代码维护性非常高的情况下实现非常完善的功能，而插件也支持配置各个环境下的默认（最佳）配置，让我们使用插件的时候几乎可以不需要修改配置项。

[https://github.com/eggjs/egg-security](egg-security) 插件就是一个典型的例子。
