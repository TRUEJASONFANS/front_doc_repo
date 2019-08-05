# 包管理器
1. npm
2. yarn

npm 和 yarn 相当于java世界中的maven,  他们是 js 开发的模块管理器,在js的世界中,依赖的最小单元是一个模块。

## 本地依赖与全局依赖

添加本地依赖
```
npm install antd //安装antd依赖
yarn add antd //安装antd依赖
```

添加全局依赖
```
npm install -g 
yarn global add 

```

通过上面的命令行（带-g修饰符）安装某个包，就叫全局安装。通常全局包安装在node目录下的node_modules文件夹。可以通过执行下面几条命令查看node、npm的安装目录和全局包的安装目录。
全局安装的包可提供直接执行的命令，他是可以独立运行的一个应用程序

```
which node   // 查看node的安装目录
which npm   // 查看npm的安装目录
npm root -g // 查看全局包的安装目录
npm list -g --depth 0 //查看全局安装过的包
````

## 开发依赖与生产依赖

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

## yarn vs npm
1. yarn.lock 锁定版本 
2. yarn 并行安装 
3. yarn 拥有更清晰的输出
