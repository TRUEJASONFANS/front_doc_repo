(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{208:function(t,a,e){"use strict";e.r(a);var r=e(1),n=Object(r.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"打包器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#打包器","aria-hidden":"true"}},[t._v("#")]),t._v(" 打包器")]),t._v(" "),e("h2",{attrs:{id:"什么叫模块化？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么叫模块化？","aria-hidden":"true"}},[t._v("#")]),t._v(" 什么叫模块化？")]),t._v(" "),e("p",[t._v("远古时代， 当我们程序还远远未达到工程的量级， 我们程序可能就是一个文件，甚至是几行code。\n比如一个文件的实现的"),e("a",{attrs:{href:"http://localhost:8080/blocks.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("俄罗斯方块"),e("OutboundLink")],1),t._v("。\n模块化的概念就是用模块化方式去管理，重复利用，优化代码块,从而达到工程的概念。 在js语言被创造出来的初期，它仅仅用于操作页面的一些小脚本工作.\n完全无法胜任复杂的软件工程。随着Web页面越来越来复杂化，js所承担的工作越来越大，所以对js的代码实现模块化管理需求越来越重要和紧急，于是出现需要\n模块化的标准")]),t._v(" "),e("h2",{attrs:{id:"示例：-以一个html5的游戏为例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例：-以一个html5的游戏为例","aria-hidden":"true"}},[t._v("#")]),t._v(" 示例： 以一个html5的游戏为例")]),t._v(" "),e("p",[e("a",{attrs:{href:"http://localhost:8080/TinyHeart.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("海底大喂🐟"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("经过模块化打包后的解决方案\n"),e("a",{attrs:{href:"http://localhost:8080/TinyHeart_v2.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("海底大喂🐟v2"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("模块化帮我们解决需要帮我们解决以下几个问题")]),t._v(" "),e("ul",[e("li",[t._v("如何向其他模块导出")]),t._v(" "),e("li",[t._v("如何在模块中引用其他模块")]),t._v(" "),e("li",[t._v("一些共有模块该如何分离")]),t._v(" "),e("li",[t._v("怎么处理宿主环境的不同？(浏览器和node的环境区别)")])]),t._v(" "),e("h2",{attrs:{id:"模块规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模块规范","aria-hidden":"true"}},[t._v("#")]),t._v(" 模块规范")]),t._v(" "),e("ol",[e("li",[t._v("CommomJS (同步)")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("a.js\nexports.add = function(a,b){\n\treturn a+b;\n}\n\nb.js \nvar add = require('a.js').add;\nconsole.log(add(1,2))//3\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[t._v("AMD (异步)")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("define(['myModule', 'myOtherModule'],function(myModule, myOtherModule) {\n\tconsole.log(myModule.hello());\n});\n")])])]),e("ol",{attrs:{start:"3"}},[e("li",[t._v("UMD (统一)\n简而言之就是从同步到异步再到统一\n"),e("a",{attrs:{href:"https://75team.com/post/%E8%AF%91%E7%A5%9E%E9%A9%AC%E6%98%AFamd-commonjs-umd.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("详细参见"),e("OutboundLink")],1)])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("环境")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("规范")]),t._v(" "),e("th",{staticStyle:{"text-align":"right"}},[t._v("实现")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("node")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("CommonJS")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("nodejs 模块")])]),t._v(" "),e("tr",[e("td",[t._v("浏览器")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("CommonJS")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("Browserify")])]),t._v(" "),e("tr",[e("td",[t._v("浏览器")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("AMD")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("RequireJS")])]),t._v(" "),e("tr",[e("td",[t._v("浏览器")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("UMD")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("👆两者")])])])]),t._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[t._v("ES module (规范) (我们用这种就行了)\n上面的模块化解决方案都是缺乏官方的模块规范才出来的，既然对模块化的需求这么旺盛，官方在ES2015(ES6)里也就提出了官方的模块化方案，主要使用import和export 两个关键字.\n示例")])]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" export1 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" export2 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"module-name"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("注意：现在主流浏览器都没有原生支持es module. 我们需要通过babel转译我们的代码才能达到此目的。即我们用es规范实现js代码，最终转译打包成浏览器支持运行的js代码。")]),t._v(" "),e("h2",{attrs:{id:"webpack-万物皆模块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpack-万物皆模块","aria-hidden":"true"}},[t._v("#")]),t._v(" webpack (万物皆模块)")]),t._v(" "),e("h3",{attrs:{id:"什么是模块？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是模块？","aria-hidden":"true"}},[t._v("#")]),t._v(" 什么是模块？")]),t._v(" "),e("p",[e("em",[t._v("在模块化编程中，开发者将程序分解成离散功能块(discrete chunks of functionality)，并称之为模块。")]),t._v("\nwebpack 通过 loader 可以支持各种语言和预处理器编写模块。loader 描述了 webpack 如何处理 非 JavaScript(non-JavaScript) "),e("em",[t._v("模块")]),t._v("，并且在 bundle 中引入这些依赖。 webpack 社区已经为各种流行语言和语言处理器构建了 loader，包括：")]),t._v(" "),e("ul",[e("li",[t._v("CoffeeScript")]),t._v(" "),e("li",[t._v("TypeScript")]),t._v(" "),e("li",[t._v("ESNext (Babel)")]),t._v(" "),e("li",[t._v("Sass")]),t._v(" "),e("li",[t._v("Less")]),t._v(" "),e("li",[t._v("Stylus")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://webpack.github.io/assets/what-is-webpack.png",alt:"webpack模块"}})]),t._v(" "),e("p",[t._v("Webpack 是一个打包模块化 JavaScript 的工具，在 Webpack 里一切文件皆模块，通过 Loader 转换文件，通过 Plugin 注入钩子，最后输出由多个模块组合成的文件。Webpack 专注于构建模块化项目。\n"),e("a",{attrs:{href:"http://webpack.wuhaolin.cn/1%E5%85%A5%E9%97%A8/img/1-2webpack.png",target:"_blank",rel:"noopener noreferrer"}},[t._v("图例"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"一个健全打包器的职责"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一个健全打包器的职责","aria-hidden":"true"}},[t._v("#")]),t._v(" 一个健全打包器的职责")]),t._v(" "),e("ol",[e("li",[t._v("代码转换：TypeScript 编译成 JavaScript、SCSS 编译成 CSS 等。")]),t._v(" "),e("li",[t._v("文件优化：压缩 JavaScript、CSS、HTML 代码，压缩合并图片等。")]),t._v(" "),e("li",[t._v("代码分割：提取多个页面的公共代码、提取首屏不需要执行部分的代码让其异步加载。")]),t._v(" "),e("li",[t._v("模块合并：在采用模块化的项目里会有很多个模块和文件，需要构建功能把模块分类合并成一个文件。")]),t._v(" "),e("li",[t._v("自动刷新：监听本地源代码的变化，自动重新构建、刷新浏览器。")]),t._v(" "),e("li",[t._v("代码校验：在代码被提交到仓库前需要校验代码是否符合规范，以及单元测试是否通过。")]),t._v(" "),e("li",[t._v("自动发布：更新完代码后，自动构建出线上发布代码并传输给发布系统。")])]),t._v(" "),e("h3",{attrs:{id:"loader-文件翻译员"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#loader-文件翻译员","aria-hidden":"true"}},[t._v("#")]),t._v(" loader 文件翻译员")]),t._v(" "),e("p",[t._v("打包器中的文件类型翻译员，")]),t._v(" "),e("h3",{attrs:{id:"plugin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#plugin","aria-hidden":"true"}},[t._v("#")]),t._v(" plugin")]),t._v(" "),e("p",[t._v("webpack的插件用来提供额外的功能（通过在构建过程注入钩子实现）")]),t._v(" "),e("h3",{attrs:{id:"devserver"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#devserver","aria-hidden":"true"}},[t._v("#")]),t._v(" DevServer")]),t._v(" "),e("ol",[e("li",[t._v("提供 HTTP 服务而不是使用本地文件预览；")]),t._v(" "),e("li",[t._v("监听文件的变化并自动刷新网页，做到实时预览；")]),t._v(" "),e("li",[t._v("支持 Source Map，以方便调试。")])]),t._v(" "),e("h3",{attrs:{id:"几个核心概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#几个核心概念","aria-hidden":"true"}},[t._v("#")]),t._v(" 几个核心概念")]),t._v(" "),e("ol",[e("li",[t._v("Entry：入口，Webpack 执行构建的第一步将从 Entry 开始，可抽象成输入。")]),t._v(" "),e("li",[t._v("Module：模块，在 Webpack 里一切皆模块，一个模块对应着一个文件。Webpack 会从配置的 Entry 开始递归找出所有依赖的模块。")]),t._v(" "),e("li",[t._v("Chunk：代码块，一个 Chunk 由多个模块组合而成，用于代码合并与分割。")]),t._v(" "),e("li",[t._v("Loader：模块转换器，用于把模块原内容按照需求转换成新内容。")]),t._v(" "),e("li",[t._v("Plugin：扩展插件，在 Webpack 构建流程中的特定时机注入扩展逻辑来改变构建结果或做你想要的事情。")]),t._v(" "),e("li",[t._v("Output：输出结果，在 Webpack 经过一系列处理并得出最终想要的代码后输出结果。")])]),t._v(" "),e("h3",{attrs:{id:"实例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实例","aria-hidden":"true"}},[t._v("#")]),t._v(" 实例")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/TRUEJASONFANS/lovingFish",target:"_blank",rel:"noopener noreferrer"}},[t._v("Love fish"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"起步"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#起步","aria-hidden":"true"}},[t._v("#")]),t._v(" 起步")]),t._v(" "),e("p",[t._v("webpack4")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("npm install webpack webpack-cli --save-dev\n或者\nyarn add -D webpack webpack-cli\n")])])]),e("p",[t._v("添加webpack.config.js 示例")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("const path = require('path');\n\nmodule.exports = {\n  entry: 'index.js',//入口设置\n\tdevtool: 'inline-source-map',// 配置映射源码\n  output: {// 输出设定\n    filename: 'bundle.js',\n    path: path.resolve(__dirname, 'dist')\n  }\n};\n\n")])])]),e("h3",{attrs:{id:"每次修改代码后需要重新build-然后重新刷新html"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#每次修改代码后需要重新build-然后重新刷新html","aria-hidden":"true"}},[t._v("#")]),t._v(" 每次修改代码后需要重新build, 然后重新刷新html")]),t._v(" "),e("ol",[e("li",[t._v("使用观察模式")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("webpack --watch\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[t._v("使用 webpack-dev-server\n修改文件后，自动重新加载html页面\nwebpack.config.js")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("  const path = require('path');\n  const HtmlWebpackPlugin = require('html-webpack-plugin');\n  const CleanWebpackPlugin = require('clean-webpack-plugin');\n\n  module.exports = {\n    entry: {\n      app: './src/index.js',\n      print: './src/print.js'\n    },\n    devtool: 'inline-source-map',\n+   devServer: {\n+     contentBase: './dist'\n+   },\n    plugins: [\n      new CleanWebpackPlugin(['dist']),\n      new HtmlWebpackPlugin({\n        title: 'Development'\n      })\n    ],\n    output: {\n      filename: '[name].bundle.js',\n      path: path.resolve(__dirname, 'dist')\n    }\n  };\n")])])]),e("p",[t._v("更新package.json")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(' {\n    "name": "development",\n    "version": "1.0.0",\n    "description": "",\n    "main": "webpack.config.js",\n    "scripts": {\n      "test": "echo \\"Error: no test specified\\" && exit 1",\n      "watch": "webpack --watch",\n+     "start": "webpack-dev-server --open",\n      "build": "webpack"\n    },\n    "keywords": [],\n    "author": "",\n    "license": "ISC",\n    "devDependencies": {\n      "clean-webpack-plugin": "^0.1.16",\n      "css-loader": "^0.28.4",\n      "csv-loader": "^2.1.1",\n      "file-loader": "^0.11.2",\n      "html-webpack-plugin": "^2.29.0",\n      "style-loader": "^0.18.2",\n      "webpack": "^3.0.0",\n      "xml-loader": "^1.2.1"\n    }\n  }\n\n')])])]),e("p",[t._v("运行以下命令即可启动开发模式")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("yarn start\n")])])]),e("h3",{attrs:{id:"热加载（类似于java热加载技术）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#热加载（类似于java热加载技术）","aria-hidden":"true"}},[t._v("#")]),t._v(" 热加载（类似于java热加载技术）")]),t._v(" "),e("p",[t._v("模块热替换(Hot Module Replacement 或 HMR)是 webpack 提供的最有用的功能之一。它允许在运行时更新各种模块，而无需进行完全刷新。本页面重点介绍实现，而概念页面提供了更多关于它的工作原理以及为什么它有用的细节。\n"),e("em",[t._v("HMR 不适用于生产环境，这意味着它应当只在开发环境使用")]),t._v(" "),e("img",{attrs:{src:"https://pic1.zhimg.com/v2-2ae68735d9eb4e4b6a877d843d520f6c_r.jpg",alt:""}})])])},[],!1,null,null,null);a.default=n.exports}}]);