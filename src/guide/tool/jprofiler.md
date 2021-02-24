# jprofiler 术语

1. Retained size 该对象自己的shallow size，加上从该对象能直接或间接访问到对象的shallow size之和。换句话说，retained size是该对象被GC之后所能回收到内存的总和。为了更好的理解retained size，不妨看个例子。
2. Shallow size就是对象本身占用内存的大小

## memoery leak 查询

1. sampling attach
2. Heap walker full gc
3. Sort based on caculating the retained size 
   