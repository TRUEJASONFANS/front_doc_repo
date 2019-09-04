# SVG
SVG 是一种基于 XML 语法的图像格式，全称是可缩放矢量图（Scalable Vector Graphics）。其他图像格式都是基于像素处理的，SVG 则是属于对图像的形状描述，所以它本质上是文本文件，体积较小，且不管放大多少倍都不会失真。
    1.描述图形的矢量图
    2.本质是文本文件
## 一些标签
```javascript
 // 圆
 <svg width="300" height="180">
  <circle cx="30"  cy="50" r="25" />
  <circle cx="90"  cy="50" r="25" class="red" />
  <circle cx="150" cy="50" r="25" class="fancy" />
</svg>
  // line
  <svg width="300" height="180">
    <line x1="0" y1="0" x2="200" y2="0" style="stroke:rgb(0,0,0);stroke-width:5" />
  </svg>
  //ployline
  <svg width="300" height="180">
    <polyline points="3,3 30,28 3,53" fill="none" stroke="black" />
  </svg>
  //rect
  <svg width="300" height="180">
    <rect x="0" y="0" height="100" width="200" style="stroke: #70d5dd; fill: #dd524b" />
  </svg>
  //ellipse
  <svg width="300" height="180">
    <ellipse cx="60" cy="60" ry="40" rx="20" stroke="black" stroke-width="5" fill="silver"/>
  </svg>
  //polygon
  <svg width="300" height="180">
    <polygon fill="green" stroke="orange" stroke-width="1" points="0,0 100,0 100,100 0,100 0,0"/>
  </svg>
  //path标签用于制路径
  <svg width="300" height="180">
    <path d="
    M 18,3
    L 46,3
    L 46,40
    L 61,40
    L 32,68
    L 3,40
    L 18,40
    Z
    "></path>
  </svg>
  //标签用于插入图片文件
  <svg viewBox="0 0 100 100" width="100" height="100">
  <image xlink:href="path/to/image.jpg"
    width="50%" height="50%"/>
  </svg>
  //<text>标签
  <svg width="300" height="180">
    <text x="50" y="25">Hello World</text>
  </svg>
  //<g>标签 讲多个形状组成一个组
  <svg viewBox="0 0 30 10" xmlns="http://www.w3.org/2000/svg">
  <circle id="myCircle" cx="5" cy="5" r="4"/>

  <use href="#myCircle" x="10" y="0" fill="blue" />
  <use href="#myCircle" x="20" y="0" fill="white" stroke="blue" />
  </svg>
  //<defs> 自定义标签
  <svg width="300" height="100">
    <defs>
        <g id="myCircle">
        <text x="25" y="20">圆形</text>
        <circle cx="50" cy="50" r="20"/>
        </g>
    </defs>

    <use href="#myCircle" x="0" y="0" />
    <use href="#myCircle" x="100" y="0" fill="blue" />
    <use href="#myCircle" x="200" y="0" fill="white" stroke="blue" />
  </svg>
  
```
css 也可以修改svg中定义的class
```css
 //css
 .red {
  fill: red;
}

.fancy {
  fill: none;
  stroke: black;
  stroke-width: 3pt;
}
```