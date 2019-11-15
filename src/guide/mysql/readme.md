# MYSQL


## MYSQL 的结构
![MYSQL结构图](https://static001.geekbang.org/resource/image/0d/d9/0d2070e8f84c4801adbfa03bda1f98d9.png)
mysql 可以分为Server层和存储引擎两部分
   1. Server 包括连接器,查询缓存，分析器，优化器，执行器
   2. 存储引擎负责数据的存储和提取，其架构是插件式，目前支持InnoDB,MyISAM,Memeory等多个引擎
   3. 不同存储引擎共用Server层

### 连接器
连接器负责跟客户端建立连接、获取权限、维持和管理连接。
### 查询缓存
8.0 后已经移除。
更新语句后缓存将失效
### 分析器
词法和语法分析，构建AST. 让MYSQL 理解你的SQL.
### 优化器
1. 决定使用哪个索引
2. 多表关联的时候连接顺序是怎么样的？