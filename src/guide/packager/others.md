---
sidebarDepth: 1
---
# 其他打包器相关
## Parcel 概念
是一个快速的、零配置的网页应用打包器，并且可以搭配 React 一起工作,极速零配置Web应用打包工具
Parcel是基于资源的,资源可以代表任意文件,并且 Parcel 对 JavaScript,CSS,HTML文件有更多的支持Parcel会自动地分析这些文件和包中引用的依赖.相同类型的资源会被组合到同一捆绑包中.如果导入其他类型的资源（例如:你在JS文件中导入CSS文件),Parcel会启动子捆绑包,并在父捆绑包中保留对它的引用.
## Neutrino 
    把 webpack 的强大功能和简单预设结合在一起。并且包括了 React 应用和 React 组件的预设。(脚手架库)

## nwb
    特别适合于将 React 组件发布到 npm。它也能用于创造 React 应用
     
## browserify
    require('modules') in the browser
    Use a node-style require() to organize your browser code and load modules installed by npm.
    browserify will recursively analyze all the require() calls in your app in order to build a bundle you can serve up to the browser in a single <script> tag.

