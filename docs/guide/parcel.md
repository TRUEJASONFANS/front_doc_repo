---
sidebarDepth: 1
---

# Parcel 概念

## 极速零配置Web应用打包工具
Parcel是基于资源的,资源可以代表任意文件,并且 Parcel 对 JavaScript,CSS,HTML文件有更多的支持Parcel会自动地分析这些文件和包中引用的依赖.相同类型的资源会被组合到同一捆绑包中.如果导入其他类型的资源（例如:你在JS文件中导入CSS文件),Parcel会启动子捆绑包,并在父捆绑包中保留对它的引用.
