(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{191:function(t,a,s){t.exports=s.p+"assets/img/canvas-opengl-webgl-css-shaders-glsl.874e50f8.png"},214:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"canvas"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#canvas","aria-hidden":"true"}},[t._v("#")]),t._v(" Canvas")]),t._v(" "),n("p",[n("img",{attrs:{src:s(191),alt:"canvas"}})]),t._v(" "),n("p",[t._v("Canvas是HTML5新增的组件，它就像一块幕布，可以用JavaScript在上面绘制各种图表、动画等。\n没有Canvas的年代，绘图只能借助Flash插件实现，页面不得不用JavaScript和Flash进行交互。有了Canvas，我们就再也不需要Flash了，直接使用JavaScript完成绘制。\n一个Canvas定义了一个指定尺寸的矩形框，在这个范围内我们可以随意绘制。")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("  \n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("canvas id"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"canvas1"')]),t._v(" width"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1000"')]),t._v(" height"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"440"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Canvas not supported"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("canvas"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  \n")])])]),n("h2",{attrs:{id:"案例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#案例","aria-hidden":"true"}},[t._v("#")]),t._v(" 案例")]),t._v(" "),n("p",[t._v("一个基于canvas的动画\n"),n("ClientOnly",[n("canvas-example")],1)],1),t._v(" "),n("h2",{attrs:{id:"canvas-坐标"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#canvas-坐标","aria-hidden":"true"}},[t._v("#")]),t._v(" Canvas 坐标")]),t._v(" "),n("p",[t._v("原点位于左上角, x 轴横向向右,  Y 轴竖向向下为正方向.\ncanvas元素默认被网格所覆盖。通常来说网格中的一个单元相当于canvas元素中的一像素。栅格的起点为左上角（坐标为（0,0））。所有元素的位置都相对于原点来定位。所以图中蓝色方形左上角的坐标为距离左边（X轴）x像素，距离上边（Y轴）y像素（坐标为（x,y)。")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://mdn.mozillademos.org/files/224/Canvas_default_grid.png",alt:"坐标"}})]),t._v(" "),n("h2",{attrs:{id:"绘制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#绘制","aria-hidden":"true"}},[t._v("#")]),t._v(" 绘制")]),t._v(" "),n("p",[t._v("canvas只支持一种原生的 图形绘制：矩形。所有其他图形都至少需要生成一种路径(path)。")]),t._v(" "),n("ul",[n("li",[t._v("画矩形")])]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("drawRect")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" canvas "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tutorial'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("canvas"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getContext"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ctx "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" canvas"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getContext")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2d"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fillRect")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//绘制矩形,填充的默认颜色为黑色")]),t._v("\n    ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("strokeRect")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("70")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//绘制矩形边框")]),t._v("\n    \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("矩形：\n"),n("ClientOnly",[n("rect-example")],1)],1),t._v(" "),n("ul",[n("li",[t._v("绘制路径")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("function drawLine(){\n    var canvas = document.getElementById('tutorial');\n    if (!canvas.getContext) return;\n    var ctx = canvas.getContext(\"2d\");\n    ctx.beginPath(); //新建一条path\n    ctx.moveTo(50, 50); //把画笔移动到指定的坐标\n    ctx.lineTo(200, 50);  //绘制一条从当前位置到指定坐标(200, 50)的直线.\n    //闭合路径。会拉一条从当前点到path起始点的直线。如果当前点与起始点重合，则什么都不做\n    ctx.closePath();\n    ctx.stroke(); //绘制路径。\n}\nfunction drawTriangle(){\n    var canvas = document.getElementById('tutorial');\n    if (!canvas.getContext) return;\n    var ctx = canvas.getContext(\"2d\");\n    ctx.beginPath();\n    ctx.moveTo(50, 50);\n    ctx.lineTo(200, 50);\n    ctx.lineTo(200, 200);\n   \n    ctx.fill(); //填充闭合区域。如果path没有闭合，则fill()会自动闭合路径。\n}\n")])])]),n("p",[t._v("绘制路径：\n"),n("ClientOnly",[n("path-example")],1)],1),t._v(" "),n("h2",{attrs:{id:"贝塞尔曲线"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#贝塞尔曲线","aria-hidden":"true"}},[t._v("#")]),t._v(" 贝塞尔曲线")]),t._v(" "),n("ul",[n("li",[t._v("二次贝塞尔曲线: 由两个锚点和一个控制点组成quadraticCruveTo(double cpx, double cpy, double x, double y)")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("function draw(){\n    var canvas = document.getElementById('tutorial');\n    if (!canvas.getContext) return;\n    var ctx = canvas.getContext(\"2d\");\n    ctx.beginPath();\n    ctx.moveTo(10, 200); //起始点\n    var cp1x = 40, cp1y = 100;  //控制点\n    var x = 200, y = 200; // 结束点\n    //绘制二次贝塞尔曲线\n    ctx.quadraticCurveTo(cp1x, cp1y, x, y);\n    ctx.stroke();\n    \n    ctx.beginPath();\n    ctx.rect(10, 200, 10, 10);\n    ctx.rect(cp1x, cp1y, 10, 10);\n    ctx.rect(x, y, 10, 10);\n    ctx.fill();\n    \n}\n")])])]),n("ul",[n("li",[t._v("三次方贝塞尔曲线：创建一条代表三次方贝塞尔曲线的路径. bezierCurveTo(double cpx, double cpy, double cp2x, double cp2y, double x, double y)")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("function draw(){\n    var canvas = document.getElementById('tutorial');\n    if (!canvas.getContext) return;\n    var ctx = canvas.getContext(\"2d\");\n    ctx.beginPath();\n    ctx.moveTo(40, 200); //起始点\n    var cp1x = 20, cp1y = 100;  //控制点1\n    var cp2x = 100, cp2y = 120;  //控制点2\n    var x = 200, y = 200; // 结束点\n    //绘制二次贝塞尔曲线\n    ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);\n    ctx.stroke();\n\n    ctx.beginPath();\n    ctx.rect(40, 200, 10, 10);\n    ctx.rect(cp1x, cp1y, 10, 10);\n    ctx.rect(cp2x, cp2y, 10, 10);\n    ctx.rect(x, y, 10, 10);\n    ctx.fill();\n\n}\ndraw();\n")])])]),n("p",[t._v("贝塞尔曲线：\n"),n("ClientOnly",[n("bezier-example")],1)],1),t._v(" "),n("h2",{attrs:{id:"绘制文本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#绘制文本","aria-hidden":"true"}},[t._v("#")]),t._v(" 绘制文本")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('var ctx;\nfunction draw(){\n    var canvas = document.getElementById(\'tutorial\');\n    if (!canvas.getContext) return;\n    ctx = canvas.getContext("2d");\n    ctx.font = "100px sans-serif"\n    ctx.fillText("天若有情", 10, 100);\n    ctx.strokeText("天若有情", 10, 200)\n}\ndraw();\n')])])]),n("h2",{attrs:{id:"绘制图片，切片"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#绘制图片，切片","aria-hidden":"true"}},[t._v("#")]),t._v(" 绘制图片，切片")]),t._v(" "),n("h2",{attrs:{id:"canvas-save-restore"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#canvas-save-restore","aria-hidden":"true"}},[t._v("#")]),t._v(" Canvas save&&restore")]),t._v(" "),n("p",[t._v("canvas的API提供了两个名叫save()和restore()的方法，用于保存及恢复当前Canvas绘图环境的所有属性。其中save()可以保存当前状态，而restore()可以还原之前保存的状态。这两个方法再绘图中有着重要的作用，比如我们在绘图的时候需要使用多种颜色，颜色需要不时的切换。那么使用save()和restore()方法即可比较方便的实现此功能。\n保存的信息包含：")]),t._v(" "),n("ol",[n("li",[t._v("当前的坐标变换（变换矩阵）信息，比如旋转或平移时使用的rotate()和setTransform()方法")]),t._v(" "),n("li",[t._v("当前剪贴区域")]),t._v(" "),n("li",[t._v("图形上下文对象（CanvasRenderingContext2D）的当前属性值")])]),t._v(" "),n("h2",{attrs:{id:"坐标变换"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#坐标变换","aria-hidden":"true"}},[t._v("#")]),t._v(" 坐标变换")]),t._v(" "),n("p",[t._v("1.平移 translate\n2.旋转 rotate\n3.scale 缩放坐标体系\n4. transform")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("draw")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("save")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n   skyOffset "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" skyOffset "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" canvas"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("\n               skyOffset "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SKY_VELOCITY")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("fps "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n   grassOffset "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" grassOffset "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" canvas"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("\n                 grassOffset "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GRASS_VELOCITY")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("fps "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n   treeOffset "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" treeOffset "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" canvas"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("\n                treeOffset "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TREE_VELOCITY")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("fps "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n   nearTreeOffset "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nearTreeOffset "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" canvas"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("\n                    nearTreeOffset "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FAST_TREE_VELOCITY")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("fps "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n   context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("save")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("translate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("skyOffset"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("drawImage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sky"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("drawImage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sky"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sky"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("restore")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n   context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("save")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("translate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("treeOffset"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("drawImage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tree"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("240")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("drawImage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tree"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("240")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("drawImage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tree"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("400")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("240")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("drawImage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tree"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1400")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("240")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("drawImage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tree"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("700")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("240")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("drawImage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tree"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1700")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("240")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("restore")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n   context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("save")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("translate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("nearTreeOffset"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("drawImage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nearTree"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("250")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("220")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("drawImage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nearTree"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1250")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("220")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("drawImage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nearTree"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("800")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("220")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("drawImage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nearTree"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1800")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("220")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("restore")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n   context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("save")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("translate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("grassOffset"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n   context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("drawImage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("grass"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" canvas"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("grass"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n   context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("drawImage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("grass"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" grass"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                     canvas"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("grass"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n   context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("drawImage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("grass2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" canvas"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("grass2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n   context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("drawImage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("grass2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" grass2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                     canvas"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("grass2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("restore")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"合成"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#合成","aria-hidden":"true"}},[t._v("#")]),t._v(" 合成")]),t._v(" "),n("ul",[n("li",[t._v("source-over(default)\n"),n("img",{attrs:{src:"http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/imgs/17-6-10/15850624.jpg",alt:"覆盖"}})])]),t._v(" "),n("h2",{attrs:{id:"动画"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#动画","aria-hidden":"true"}},[t._v("#")]),t._v(" 动画")]),t._v(" "),n("ol",[n("li",[t._v("setInterval")]),t._v(" "),n("li",[t._v("setTimeout")]),t._v(" "),n("li",[t._v("requestAnimationFrame 自行决定最佳的帧速率")])]),t._v(" "),n("p",[t._v("setInterval或setTimeout实现的JavaScript动画的缺点就是可靠性不足，浏览器无法保证每一帧渲染的时间间隔，一般情况下，每秒平均刷新次数能够达到60帧，就能够给人流畅的体验，即每过 1000/60 毫秒渲染新一帧即可\n为此，requestAnimationFrame应运而生，其作用就是让浏览器流畅的执行动画效果。可以将其理解为专门用来实现动画效果的api，通过这个api,可以告诉浏览器某个JavaScript代码要执行动画，浏览器收到通知后，则会运行这些代码的时候进行优化，实现流畅的效果，而不再需要开发人员烦心刷新频率的问题了。")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("animate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("time")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Update and draw animation objects")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestAnimationFrame")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("animate"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// sustatin the animation")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nrequestAniamtionFrame\n")])])]),n("h2",{attrs:{id:"更多知识"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#更多知识","aria-hidden":"true"}},[t._v("#")]),t._v(" 更多知识")]),t._v(" "),n("p",[t._v("Three.js webGL的封装\n各大游戏动画引擎coco2d js")]),t._v(" "),n("h3",{attrs:{id:"版权声明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#版权声明","aria-hidden":"true"}},[t._v("#")]),t._v(" 版权声明")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://blog.csdn.net/u012468376/article/details/73350998",target:"_blank",rel:"noopener noreferrer"}},[t._v("本文部分插图和文字节选自"),n("OutboundLink")],1)])])},[],!1,null,null,null);a.default=e.exports}}]);