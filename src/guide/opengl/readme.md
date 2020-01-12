# openGL

## 状态机
open GL 是一个巨大的状态机： 一系列的变量描述OpenGL此刻应当如何运行
1. OpenGL的状态通常被称为OpenGL上下文(Context)
2. 调用Open GL 外放接口来改变状态机的状态
3. 使用当前OpenGL上下文来渲染

## 关于OpenGL 的几个库
1. glew: the OpenGL Extension Wrangler library provides access to all GL entrypoints
2. glew3: the GL3W library focuses on the core profile of OpenGL 3 and 4. GLFW for context and window management.
3. glLoadGen 
4. Glad 由于各大驱动程序实现OpenGL标准不同，它大多数函数的位置都无法在编译时确定下来，需要在运行时查询。所以任务就落在了开发者身上。
开发者需要在运行时获取函数地址并将其保存在一个函数指针中供以后使用。 所以才有glad 帮我们封装获取函数地址。
5. glfw3:  提供窗口创建以及 上下文等的接口

## 渲染管线
![渲染管线](https://open.gl/media/img/c2_pipeline.png)
1.  顶点着色器 将顶点坐标转为世界坐标系
2.  图元装配 生成原生图形:顶点着色器输出的所有顶点作为输入（如果是GL_POINTS，那么就是一个顶点），并所有的点装配成指定图元的形状
3.  几何着色器 几何着色器把图元形式的一系列顶点的集合作为输入，它可以通过产生新顶点构造出新的（或是其它的）图元来生成其他形状
4.  光栅化阶段 它会把图元映射为最终屏幕上相应的像素,生成片段，并进行裁切，裁切会丢弃超出你的视图以外的所有像素，用来提升执行效率。
5.  

## 着色器
1. 声明版本
2. 输入和输出变量、
3. uniform
4. main函数

/usr/local/go/
/usr/local/bin/
/usr/local/.com.apple.installer.keep
/usr/local/include/
/usr/local/etc/
/usr/local/var/
/usr/local/lib/
/usr/local/opt/
/usr/local/share/