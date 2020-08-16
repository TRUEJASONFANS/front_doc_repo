# Cmake
管理dependency

## 写一个CMakeLists.txt 来描述如何构建你的程序
``` cmake
# 描述cmake最低版本
cmake_minimum_required (VERSION 2.6)
# 定义project 名字 "sample1“
project (sample1)

# find_package (寻找CMake内置定义的依赖包)
find_package(OpenGL REQUIRED)

```