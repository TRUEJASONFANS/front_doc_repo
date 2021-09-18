# lerna
使用lerna优雅地管理多个package
如何有效管理多个node项目


我们使用lerna初始化整个项目，并且在packages里新建了2个package，执行命令进行初始化：

lerna init
初始化化后目录结构如下所示：

.
├── lerna.json
├── package.json
└── packages
    ├── house
    │   ├── index.js
    │   ├── node_modules
    │   └── package.json
    └── window
        ├── index.js
        ├── node_modules
        └── package.json