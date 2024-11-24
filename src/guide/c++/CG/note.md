# MVP 变换
把顶点坐标从：局部坐标（局部空间） → 世界坐标 → 观察坐标 → 裁剪坐标 →屏幕坐标
## M 矩阵 是一种 仿射变换

让顶点坐标从模型空间 → 世界空间

首先我们定义什么是仿射变换： 放缩， 平移， 旋转 统一是一种仿射变换。

M = 
$$\begin{matrix}
1&0&0&a\\
0&1&0&b\\
0&0&1&c\\
0&0&0&1\\
\end{matrix}$$

$$\begin{matrix}
cosΘ&0&sinΘ&0\\
0&1&0&0\\
-sinΘ&0&cosΘ&0\\
0&0&0&1\\
\end{matrix}$$

$$\begin{matrix}
kx&0&0&0\\
0&ky&0&0\\
0&0&kz&0\\
0&0&0&1\\
\end{matrix}$$


通过该矩阵可以完成一切的仿射变换

下面我们来认识几种坐标系：

1. 模型坐标系， 以几何中心为原点
2. 世界坐标系， 以世界某一点为中心建立的坐标系
3. 摄像机坐标系， 以摄像机所在视角为中心建立的坐标系

## V矩阵

世界空间 → 视觉空间（以camera为中心的空间坐标系）

V = 
$$\begin{matrix}
1&0&0&0\\
1&cosΘ&-sinΘ&0\\
0&sinΘ&cosΘ&0\\
0&0&0&1\\
\end{matrix}$$

$$\begin{matrix}
1&0&0&a\\
0&1&0&b\\
0&0&1&c\\
0&0&0&1\\
\end{matrix}$$


## P 矩阵

视觉空间→ 裁剪空间（判断顶点是否在可见范围内，（看不到的没必要处理））
注意：p矩阵并不是真正的做投影，而是为投影做准备。
对x，y，z分量进行缩放，用w分量做范围值。如果xyz都在w范围内，那么就是可见的

