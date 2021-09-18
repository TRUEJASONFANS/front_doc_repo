# flex 盒子布局

## flex 属性分类

### 作用在flex容器上	
1. flex-direction
2. flex-wrap
3. flex-flow
4. justify-content
5. align-items
6. align-content

### 作用在flex子项上
1. order
2. flex-grow
3. flex-shrink
4. flex-basis
5. flex
6. align-self
   
无论作用在flex容器上，还是作用在flex子项，都是控制的flex子项的呈现，只是前者控制的是整体，后者控制的是个体。


### 文档流方向

#### flex-direction
1. row 默认值，显示为行。方向为当前文档水平流方向，默认情况下是从左往右。如果当前水平文档流方向是rtl（如设置direction:rtl），则从右往左。
2. row-reverse 显示为行。但方向和row属性值是反的。
3. column 显示为列
4. column-reverse 显示为列,但方向和column属性值是反的

#### flex-wrap
flex-wrap用来控制子项整体单行显示还是换行显示，如果换行，则下面一行是否反方向显示。这个属性比较好记忆，在CSS世界中，只要看到单词wrap一定是与换行显示相关的，word-wrap属性或者white-space:nowrap或者pre-wrap之类。


#### flex-flow
flex-flow属性是flex-direction和flex-wrap的缩写，表示flex布局的flow流动特性，语法如下：

flex-flow: <‘flex-direction’> || <‘flex-wrap’>
当多属性同时使用的时候，使用空格分隔。
举个例子，容器元素如下设置：
.container {
    display: flex;
    flex-flow: row-reverse wrap-reverse;
}

### 对齐

#### justify-content (水平方向)
justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;

1. flex-start 默认值。逻辑CSS属性值，与文档流方向相关。默认表现为左对齐。
2. flex-end 逻辑CSS属性值，与文档流方向相关。默认表现为右对齐。
3. center 表现为居中对齐。
4. space-between 表现为两端对齐。between是中间的意思，意思是多余的空白间距只在元素中间区域分配。使用抽象图形示意如下：
5. space-around around是环绕的意思，意思是每个flex子项两侧都环绕互不干扰的等宽的空白间距，最终视觉上边缘两侧的空白只有中间空白宽度一半。使用抽象图形示意如下：
6. space-evenly evenly是匀称、平等的意思。也就是视觉上，每个flex子项两侧空白间距完全相等。使用抽象图形示意如下

#### align-items (垂直方向相对于flex容器)
align-items中的items指的就是flex子项们，因此align-items指的就是flex子项们相对于flex容器在垂直方向上的对齐方式，大家是一起顶部对齐呢，底部对齐呢，还是拉伸对齐呢，类似这样。
align-items: stretch | flex-start | flex-end | center | baseline;


#### align-content

align-content可以看成和justify-content是相似且对立的属性，justify-content指明水平方向flex子项的对齐和分布方式，而align-content则是指明垂直方向每一行flex元素的对齐和分布方式。如果所有flex子项只有一行，则align-content属性是没有任何效果的。
align-content: stretch | flex-start | flex-end | center | space-between | space-around | space-evenly;


### 作用在flex子项的css 属性

#### order
所有flex子项的默认order属性值是0，因此，如果我们想要某一个flex子项在最前面显示，可以设置比0小的整数，如-1就可以了。

#### flex-grow
flex-grow属性中的grow是扩展的意思，扩展的就是flex子项所占据的宽度，扩展所侵占的空间就是除去元素外的剩余的空白间隙。

所有剩余空间总量是1。
如果只有一个flex子项设置了flex-grow属性值：
如果flex-grow值小于1，则扩展的空间就总剩余空间和这个比例的计算值。
如果flex-grow值大于1，则独享所有剩余空间。
具体可参见下面“grow案例1”。

如果有多个flex设置了flex-grow属性值：
如果flex-grow值总和小于1，则每个子项扩展的空间就总剩余空间和当前元素设置的flex-grow比例的计算值。
如果flex-grow值总和大于1，则所有剩余空间被利用，分配比例就是flex-grow属性值的比例。例如所有的flex子项都设置flex-grow:1，则表示剩余空白间隙大家等分，如果设置的flex-grow比例是1:2:1，则中间的flex子项占据一半的空白间隙，剩下的前后两个元素等分。

#### flex-shrink
主要处理当flex容器空间不足时候，单个元素的收缩比例。
flex-shrink不支持负值，默认值是1，也就是默认所有的flex子项都会收缩。如果设置为0，则表示不收缩，保持原始的fit-content宽度。

#### flex-bias
flex-basis定义了在分配剩余空间之前元素的默认大小。相当于对浏览器提前告知：浏览器兄，我要占据这么大的空间，提前帮我预留好。
默认值是auto，就是自动。有设置width则占据空间就是width，没有设置就按内容宽度来。

#### flex
*flex*属性是flex-grow，flex-shrink和flex-basis的缩写。

