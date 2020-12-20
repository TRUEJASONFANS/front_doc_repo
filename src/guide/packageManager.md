# 包管理器
1. npm
2. yarn

npm 和 yarn  他们是 js 开发的模块管理器,在js的世界中,依赖的最小单元是一个模块。 一个模块我们通常我们可以理解为一个功能单元， 


当你安装 node 后， npm 是自带于node 的一个Node js 程序


## 初始化一个模块
```shell
npm init  依次项目name, 版本， 入口文件， lisense 
或
npm init -y  采用默认值
```
此命令会生成一个package.json文件.  这就定义该目录是一个Node 模块（很简单吧).

默认的生成package.json
<img :src="$withBase('/package_default.png')" alt="default package.json">

Sprint poker的 package.json
<img :src="$withBase('/package_json.png')" alt="package.json">


## 本地依赖

添加本地依赖
```
npm install antd //安装antd依赖
yarn add antd //安装antd依赖
```

### 开发依赖与生产依赖

保存到开发依赖(devDependencies): npm install pageName --save-dev
保存到生产依赖(dependencies): npm install pageName --save

```
添加dev依赖
npm i pageName --save-dev
yarn add -D pageName
```
```
添加生产依赖
npm i pageName
yarn add pageName
```
devDependencies只会在开发环境下使用，生产环境不会被打入包内；而dependencies不仅在开发环境中要使用，生产环境也需要使用到。根据以上规则，我们就很容易区分哪些插件是用--save-dev模式安装，哪些用--save模式安装。

## 全局依赖
为本地node 安装脚本程序.全局安装的包可提供直接执行的命令，他是可以独立运行的一个应用程序
通常全局包安装在node目录下的node_modules文件夹。

添加全局依赖
```
npm install -g 
yarn global add 

```

通过上面的命令行（带-g修饰符）安装某个包，就叫全局安装。执行下面几条命令查看node、npm的安装目录和全局包的安装目录。

```
which node   // 查看node的安装目录
which npm   // 查看npm的安装目录
npm root -g // 查看全局包的安装目录
npm list -g --depth 0 //查看全局安装过的包
````


## yarn vs npm
1. yarn.lock 锁定版本 
2. yarn 并行安装 
3. yarn 拥有更清晰的输出
