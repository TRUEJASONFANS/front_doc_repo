## meta标签
meta 标签是一组键值对，它是一种通用的元信息表示标签
一般的 meta 标签由 name 和 content 两个...

```html
  <meta name=application-name content="lsForums">
  <!--特殊的meta标签 -->
  <meta charset="UTF-8" >

```

具有 http-equiv 属性的 meta 标签，表示执行一个命令,这样的meta的标签就不需要属性了。
```
<meta http-equiv="content-type" content="text/html; charset=UTF-8">

```
name 为 viewport 的 meta,这类 meta 的 name 属性为 viewport，它的 content 是一个复杂结构，是用逗号分隔的键值对.
键值对的格式是 key=value。
```
<meta name="viewport" content="width=500, initial-scale=1">
```