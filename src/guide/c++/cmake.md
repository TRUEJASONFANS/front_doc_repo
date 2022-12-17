# cmake 
跨平台的编译工具， 利用工具包来生成相应的make file或者project文件, CMake 的描述文件 CMakeLists.txt。Cmake 并不直接建构出最终的软件，而是产生标准的建构档（如 Unix 的 Makefile 或 Windows Visual C++ 的 projects/workspaces），然后再依一般的建构方式使用


1.cmake  ${CMakeList.txt_PATH}
2.make 


1. cmake 安装
2. mingw64 安装
3. 讲mingw64 bin下的ming-32-make.exe  复制重命名为make.exe
4. 不能讲gcc, opencv 放在program files 路径下， gcc 对 windows路径中带空格的支持有限
5. build\3rdparty\ffmpeg 下三个文件 由于墙的原因要手动下载到本地
6. 编译opencv 步骤
    1. cmake configure
    2. cmake generator
    3. make -j4(并行数量，4线程？, 可加速编译)
7. 将编译好的opencv build的bin(\build\bin)库加入到系统path路


## CMake 构建编译一个第三方库

Method 2: Via CMake command line
Go to the source path (e.g. cd D:\projects\sumo)
Create a build directory (e.g. mkdir cmake-build && cd cmake-build)
Run CMake with the correct Visual Studio version (e.g. cmake .. -G "Visual Studio 16 2019 Win64")
For a list of all possible generators run cmake --help
Open the solution D:\projects\sumo\cmake-build\SUMO.sln
Or build from the command line using cmake --build . --config Release
