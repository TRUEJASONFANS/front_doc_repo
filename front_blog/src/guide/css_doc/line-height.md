# line-height
1. 内联元素的高度由line-height决定

行距：文字与文字之间的上下间距离
行距 = line-height - font-size

# vertical-align
vertical-align的默认值baseline
1. 对于普通内联元素那里是字符x的下边缘
2. 对于替换元素则是替换元素的下边缘
3. 对于inline-block元素，如果里面无内联元素(或者overflow不是visiable)，则该元素的基线就是其margin低边缘

## vertical-align:middle
1. 能达到近似垂直居中, 对于内联元素为行框盒子基线往上1/2x-height(x指的是字母x)
