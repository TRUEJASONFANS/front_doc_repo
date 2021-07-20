# 前端性能优化原理与实践

老生常谈， 让我们从一个前端经典的"问题".

## 从输入 URL 到页面加载完成，发生了什么？

站在性能优化的角度， 首选我们用DNS 将 URL　解析成IP地址，然后与IP地址确定的那台服务器建立TCP连接，
随后我们向服务端抛出我们的http请求，服务端处理完我们的请求后，把目标数据放在http响应里返回给客户端，
客户端浏览器拿到响应的数据后就可以走一个渲染的流程，页面便这样呈现给了用户。
更细节的分类

1. DNS 解析
2. TCP 连接
3. HTTP 请求抛出
4. 服务端处理请求，HTTP 响应返回
5. 浏览器拿到响应数据，解析响应内容，把解析的结果展示(渲染)给用户

我们任何一个用户端的产品，都需要把这 5 个过程滴水不漏地考虑到自己的性能优化方案内、反复权衡，从而打磨出用户满意的速度。

## 总的来说，我们将从网络层面和渲染层面两个大的维度来逐个点亮前端性能优化的技能树

对于 DNS 解析和 TCP 连接两个步骤，我们前端可以做的努力非常有限。相比之下，HTTP 连接这一层面的优化才是我们网络优化的核心。因此我们开门见山，抓主要矛盾，直接从 HTTP 开始讲起。

HTTP 优化有两个大的方向：

* 减少请求次数
* 减少单次请求所花费的时间

### webpack 优化

webpack 的优化瓶颈，主要是两个方面：

1. webpack 的构建过程太花时间
2. webpack 打包的结果体积太大

#### 构建过程提速策略

1. 不要让 loader 做太多事情——以 babel-loader 为例

```javascript
module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
  ]
}
```
2. 优化第三方库构建(避免重复打包引用的第三方库)

DllPlugin 是基于 Windows 动态链接库（dll）的思想被创作出来的。这个插件会把第三方库单独打包到一个文件中，这个文件就是一个单纯的依赖库。这个依赖库不会跟着你的业务代码一起被重新打包，只有当依赖自身发生版本变化时才会重新打包。

用 DllPlugin 处理文件，要分两步走：

基于 dll 专属的配置文件，打包 dll 库
```js
const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: {
      // 依赖的库数组
      vendor: [
        'prop-types',
        'babel-polyfill',
        'react',
        'react-dom',
        'react-router-dom',
      ]
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].js',
      library: '[name]_[hash]',
    },
    plugins: [
      new webpack.DllPlugin({
        // DllPlugin的name属性需要和libary保持一致
        name: '[name]_[hash]',
        path: path.join(__dirname, 'dist', '[name]-manifest.json'),
        // context需要和webpack.config.js保持一致
        context: __dirname,
      }),
    ],
}
```
我们的 dist 文件夹里会出现这样两个文件 vendor.js 不必解释，是我们第三方库打包的结果。这个多出来的 vendor-manifest.json，则用于描述每个第三方库对应的具体路径.
随后，我们只需在 webpack.config.js 里针对 dll 稍作配置：

基于 webpack.config.js 文件，打包业务代码
```js
const path = require('path');
const webpack = require('webpack')
module.exports = {
  mode: 'production',
  // 编译入口
  entry: {
    main: './src/index.js'
  },
  // 目标文件
  output: {
    path: path.join(__dirname, 'dist/'),
    filename: '[name].js'
  },
  // dll相关配置
  plugins: [
    new webpack.DllReferencePlugin({
      context: __dirname,
      // manifest就是我们第一步中打包出来的json文件
      manifest: require('./dist/vendor-manifest.json'),
    })
  ]
}
```

构建结果体积压缩

1. 删除冗余代码:UglifyJsPlugin 插件

```js
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
 plugins: [
   new UglifyJsPlugin({
     // 允许并发
     parallel: true,
     // 开启缓存
     cache: true,
     compress: {
       // 删除所有的console语句    
       drop_console: true,
       // 把使用多次的静态值自动定义为变量
       reduce_vars: true,
     },
     output: {
       // 不保留注释
       comment: false,
       // 使输出的代码尽可能紧凑
       beautify: false
     }
   })
 ]
}
```
2. 拆分资源
3. 按需加载
4. Gzip 压缩 极致压缩请求数据的大小

#### gzip 优化(www.zhongwei.tech)

HTTP 压缩是一种内置到网页服务器和网页客户端中以改进传输速度和带宽利用率的方式。在使用 HTTP 压缩的情况下，HTTP 数据在从服务器发送前就已压缩：兼容的浏览器将在下载所需的格式前宣告支持何种方法给服务器；不支持压缩方法的浏览器将下载未经压缩的数据。最常见的压缩方案包括 Gzip 和 Deflate。

HTTP 压缩就是以缩小体积为目的，对 HTTP 内容进行重新编码的过程
Gzip 的内核就是 Deflate，目前我们压缩文件用得最多的就是 Gzip。可以说，Gzip 就是 HTTP 压缩的经典例题。

通过nginx搭建的静态资源服务器， 天然支持配置gzip, 只需根据以下配置即可开启gzip压缩

nginx 配置
```
gzip  on;
gzip_min_length 1k;
gzip_buffers 4 16k;
gzip_http_version 1.0;
gzip_comp_level 2;
gzip_types text/plain application/javascript application/css  text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;
gzip_vary off;
gzip_disable "MSIE [1-6]\.";
```

Before
295kb transfered 224KB
After
1.4MB transfered 693 kB transferred

## 浏览器缓存机制介绍与缓存策略剖析

- MemoryCache
1. 内存缓存是快的，也是“短命”的。它和渲染进程“生死相依”，当进程结束后，也就是 tab 关闭以后，内存里的数据也将不复存在。资源存不存内存，浏览器秉承的是“节约原则”， 较小的资源才才入内存

- Service Worker Cache
Service Worker 是一种独立于主线程之外的 Javascript 线程。它脱离于浏览器窗体，因此无法直接访问 DOM。这样独立的个性使得 Service Worker 的“个人行为”无法干扰页面的性能，这个“幕后工作者”可以帮我们实现离线缓存、消息推送和网络代理等功能。我们借助 Service worker 实现的离线缓存就称为 Service Worker Cache。



