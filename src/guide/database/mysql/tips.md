# tips

## where 1=1
当我们有多个动态where条件需要拼接时候, 主动添加Where 1=1 能有效避免一些and 判断的边界情况。

``` sql
SELECT *FROM TALBLE WHERE 1=1 {and xxx1}
```

## where 1<>1
只复制表结构而不复制数据
```sql
CREATE TALBE as SELECT *FROM TABLE2 WHERE 1<>1
```