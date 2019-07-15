## meta标签
meta 标签是一组键值对，它是一种通用的元信息表示标签
一般的 meta 标签由 name 和 content 两个...

```html
  <meta name=application-name content="lsForums">
  <!--特殊的meta标签 -->
  <meta charset="UTF-8" >

```
## 具有 http-equiv 属性的 meta 标签，表示执行一个命令,这样的meta的标签就不需要属性了。
```
<meta http-equiv="content-type" content="text/html; charset=UTF-8">

```
##约定成俗的meta
name 为 viewport 的 meta,这类 meta 的 name 属性为 viewport，它的 content 是一个复杂结构，是用逗号分隔的键值对.
键值对的格式是 key=value。
```
<meta name="viewport" content="width=500, initial-scale=1">
```

```
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<!-- 默认使用最新浏览器 -->
<meta http-equiv="Cache-Control" content="no-siteapp">
<!-- 不被网页(加速)转码 -->
<meta name="robots" content="index,follow">
<!-- 搜索引擎抓取 -->
<meta name="renderer" content="webkit">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui">
<meta name="apple-mobile-web-app-capable" content="yes">
<!-- 删除苹果默认的工具栏和菜单栏 -->
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<!-- 设置苹果工具栏颜色 -->
```