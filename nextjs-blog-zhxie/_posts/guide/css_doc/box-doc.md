# 盒模型

盒子准则
1. 世界是由一个个盒子组成。
2. 每一个盒子分为内外盒子, 外盒子主要负责结构(是否占一行)，内联盒子负责内容(宽和高)


## 元素的display特性


1. 块级元素(block)：独占一行，对宽高的属性值生效；如果不给宽度，块级元素就默认为浏览器的宽度，即就是100%宽。
   block-block 元素
   
2. 行内元素(inline)：可以多个标签存在一行，对宽高属性值不生效，完全靠内容撑开宽高。(那怎么来调节行内元素的高度呢？)
   inline-inline 元素
 
3. 行内块元素(inline-block)：结合的行内和块级的优点，既可以设置长宽，可以让padding和margin生效，又可以和其他行内元素并排。
   inline-block 元素
4. 例外：替换元素是inline 元素，但却可以设置宽和高
   1. img
   2. input
##  例子

## 内联元素高度之本line-height
1. 内联的元素的高度由line-height确定，如果还有替换元素，则决定最小高度
2. 对于块级元素，line-height对起本身并没有任何作用，我们平时改变line-height,块级元素的高度跟着变化实际上是通过改变块级元素的内联级别元素的高度实现，定义其中行框盒子的最小高度
## line-height的好朋友vertical-align
1. 只能应用于内联元素
2. 以及display位table-cell的元素
3. 其百分比值是依据line-height计算得到

## 什么是流 
文档流指的是元素排版布局过程中，元素会默认自动从左往右，从上往下的流式排列方式。并最终窗体自上而下分成一行行，并在每行中从左至右的顺序排放元素。
css 世界的流似乎就像现实世界的水流一样， 流本身具有自适应性。 比如块级元素在水平方向的流体特性

## position

position 的四个值：
* static 默认在流中的位置
* relative 相对于原来所在流的位置进行偏移. **依旧跟文档流相关**
* absolute 生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。**脱离文档流**
* fixed 生成绝对定位的元素，相对于浏览器窗口进行定位。**脱离文档流**

默认值：static

### 什么叫父相子绝
父亲节点相对定位， 儿子节点绝对定位
“子绝父相”的意义：这样可以保证父亲没有脱标，儿子脱标在父亲的范围里面移动。于是，工程上经常这样做：
父亲浮动，设置相对定位（零偏移），然后让儿子绝对定位一定的距离。


## css3
### flex 盒子布局
#### 自定义新世界流！
1. 给div这类块状元素元素设置display:flex或者给span这类内联元素设置display:inline-flex，flex布局即创建！
2. 其中，直接设置display:flex或者display:inline-flex的元素称为flex容器，里面的子元素称为flex子项。
3. 在容器中定义对齐方式和流向
4. 在子项中定义自适应性
* [张鑫旭写给自己看的display: flex布局教程](https://www.zhangxinxu.com/wordpress/2018/10/display-flex-css3-css/)

### float 
1. 使用float脱离文档流时，其他盒子会无视这个元素，但其他盒子内的文本依然会为这个元素让出位置，环绕在周围。
2. 包裹性
3. BFC 块状格式化上下文
4. 破坏文档流
5. 没有任何margin合并

## 设计原则
1. 不破坏流的特性
2. 无宽度原则 ， 如果实在需用， 利用宽度分离原则，在父元素定义宽度，在子元素使用margin, padding [页面重构“鑫三无准则”-之“无宽度”准则/](https://www.zhangxinxu.com/wordpress/2010/10/%e9%a1%b5%e9%9d%a2%e9%87%8d%e6%9e%84%e2%80%9c%e9%91%ab%e4%b8%89%e6%97%a0%e5%87%86%e5%88%99%e2%80%9d-%e4%b9%8b%e2%80%9c%e6%97%a0%e5%ae%bd%e5%ba%a6%e2%80%9d%e5%87%86%e5%88%99/)
3. 无图片[css页面重构鑫三无准则之无图片准则](https://www.zhangxinxu.com/wordpress/2011/05/css%e9%a1%b5%e9%9d%a2%e9%87%8d%e6%9e%84%e9%91%ab%e4%b8%89%e6%97%a0%e5%87%86%e5%88%99%e4%b9%8b%e6%97%a0%e5%9b%be%e7%89%87%e5%87%86%e5%88%99/)
4. 无浮动

## width 和height的作用细节
1. 默认值auto 充满了水流


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


## width：auto
1. 外部尺寸 Extrinsic Sizing 宽度由外部元素决定 典型如块状元素， 默认100%宽度, margin/border/padding/content 内容区域自动分配水平空间的限制
   1. 正常流宽度
   2. 格式化宽度
2. 内部尺寸 Intrinsic Sizing 宽度由内部元素决定
   1. 包裹性
   2. 自适应性->智能宽度
3. 宽度width 是作用于content盒子上
   1. css流体布局下的宽度分离原子, width独立占用一层标签，而padding,border,margin利用流动性在内部自适应呈现.

## 盒尺寸四大家族 margin box, boder box, padding box, content box
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