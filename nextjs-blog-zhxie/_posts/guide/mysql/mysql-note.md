# 查看数据库表和数据扩容评估

1. 查看数据库数据存储的位置
```sql
show global variables like "%datadir%";
```

## 查看数据库大小
information_shema 是每个mysql数据库都有一个原数据库，记录和保存了当前 mysql 所有数据库及表的存储信息，包含列，索引，大小，字段等等：

　　　　　　information_schema中的表主要有：

　　　　　　　　schemata表：这个表里面主要是存储在mysql中的所有的数据库的信息

　　　　　　　　tables表：这个表里存储了所有数据库中的表的信息，包括每个表有多少个列等信息。

　　　　　　　　columns表：这个表存储了所有表中的表字段信息。

　　　　　　　　statistics表：存储了表中索引的信息。

　　　　　　　　user_privileges表：存储了用户的权限信息。

　　　　　　　　schema_privileges表：存储了数据库权限。

　　　　　　　　table_privileges表：存储了表的权限。

　　　　　　　　column_privileges表：存储了列的权限信息。

　　　　　　　　character_sets表：存储了mysql可以用的字符集的信息。

　　　　　　　　collations表：提供各个字符集的对照信息。

　　　　　　　　collation_character_set_applicability表：相当于collations表和character_sets表的前两个字段的一个对比，记录了字符集之间的对照信息。

　　　　　　　　table_constraints表：这个表主要是用于记录表的描述存在约束的表和约束类型。

　　　　　　　　key_column_usage表：记录具有约束的列。

　　　　　　　　routines表：记录了存储过程和函数的信息，不包含自定义的过程或函数信息。

　　　　　　　　views表：记录了视图信息，需要有show view权限。

　　　　　　　　triggers表：存储了触发器的信息，需要有super权限


2. 查询所有数据库大小
```sql
select
table_schema as '数据库',sum(table_rows) as '记录数',
sum(truncate(data_length/1024/1024, 2)) as '数据容量(MB)',
sum(truncate(index_length/1024/1024, 2)) as '索引容量(MB)'
from information_schema.tables
group by table_schema
order by sum(data_length) desc, sum(index_length) desc;
```