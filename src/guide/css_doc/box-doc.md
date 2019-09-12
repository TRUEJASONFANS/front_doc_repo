# 盒模型

## inline-box

1. 内联盒子和匿名内联盒子

```html
<p>这是一行普通文字，这里有个<em>em</em>标签</p>
<!-- <em>内是内联盒子 -->
```

这是一行。。这里这个是一个匿名内链盒子

光秃秃的文字可能是内联盒子，也可能是块级盒子， 得看前后的标签是内联还是块级。

2. 行框盒子

每一行就是一个行框盒子，每个行框盒子又是由一个一个内联盒子组成的。

3. 包含盒子
<p> 标签就是一个包含盒子

4. 幽灵空白节点
strut “支柱”，幽灵盒子 是一个存在于每个“行框盒子”前面，同时具有该元素的字体和行高属性的0宽度的内联盒。


## 一切皆是流
元素的内外盒子, 外盒子主要负责结构(是否占一行)，内联盒子负责内容(宽和高)

## 设计原则
1. 不破坏流的特性
2. 


## width：auto
1. 外部尺寸 Extrinsic Sizing 宽度由外部元素决定 典型如块状元素， 默认100%宽度, margin/border/padding/content 内容区域自动分配水平空间的限制
   1. 正常流宽度
   2. 格式化宽度
2. 内部尺寸 Intrinsic Sizing 宽度由内部元素决定
   1. 包裹性
   2. 自适应性->智能宽度
3. 宽度width 是作用于content盒子上
   1. css流体布局下的宽度分离原子, width独立占用一层标签，而padding,border,margin利用流动性在内部自适应呈现.

## 盒尺寸四大家族
### 替换元素的特性
   1. 内容的外观不受页面上的css的影响(样式表现在css作用域之外)
   2. 有自己的尺寸 
   3. 在很多css属性上有自己一套的表现规则。比如veritical-align
### 替换元素与非替换元素的距离 content
1. 只隔一个src属性
2. 有无content属性
### padding
1. padding 与width 无关，除非设置box-sizing
2. padding 百分比值 是基于宽度计算
块状元素
```css
<!-- 正方形框 -->
div {padding:%50;}
<!-- 矩形框 -->
div {padding: 25% 50%} 
```
### margin
```html
元素对应方向具有自动填充特性
margin:auto
```
1. margin:auto 天生为左右对其而设计。(左右等分margin, 就像text-align:center一样),效果前提：
2. 绝对定位的元素将会单独渲染，非定位方向margin 作用将会被忽略
```css
img {
  top:10%; left:30%
  margin-right:30px; //无效
}
```
## 内联元素高度之本line-height
1. 内联的元素的高度由line-height确定，如果还有替换元素，则决定最小高度
2. 对于块级元素，line-height对起本身并没有任何作用，我们平时改变line-height,块级元素的高度跟着变化实际上是通过改变块级元素的内联级别元素的高度实现，定义其中行框盒子的最小高度
## line-height的好朋友vertical-align
1. 只能应用于内联元素
2. 以及display位table-cell的元素
3. 其百分比值是依据line-height计算得到
```css
.example {
  float:left;
  vertical-align: middle; /* 没有作用 */
}
```
4. vertical-align: 
   1. top 
      1. 内联元素：元素底部和当前行框盒子的顶部对齐
      2. table-cell 元素底部padding边缘和表格行的顶部对齐
   2. bottom
      1. 内联元素：元素底部和当前行框盒子的底部对齐
      2. 2. table-cell 元素底部padding边缘和表格行的底部对齐
   3. top/bottom看行框盒子
   4. baseline/middle是和字符x打交道