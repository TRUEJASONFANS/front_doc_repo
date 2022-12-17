# c++ mock small talk

## 什么是 mock? 

怎么样去写一个关于 DrawCircle 方法的测试?    Mock 一个Turtle 对象 是我们的目标.

```cpp
class Painter
{
    Turtle* turtle;
public:
    Painter(Turtle* turtle)
        : turtle(turtle) {}

    bool DrawCircle(int, int, int) {
        turtle->PenDown();
        return true;
    }
};
```


A mock object implements the same interface as a real object (so it can be used as one), but lets you specify at run time how it will be used and what it should do (which methods will be called?in which order? how many times? with what arguments? what will they return? etc)

In a word,  it will have followings  characters for a mocked object.

- It has same interfaces （有着相同的接口）
- It has customized implementation （有着定制化的实现）
- It's design for some expectation. （有着设计的预期）



*如果它看起来像鸭子、游泳像鸭子、叫声像鸭子，那么它可能就是只鸭子*

in GTest,   gMock is a library (sometimes we also call it a “framework” to make it sound cool) for creating mock classes and using them. It does to C++ what jMock/EasyMock does to Java (well, more or less).

when you considering the mock a object ?


- In a test,  if the dependency is difficult to construct like the DB Connection （依赖难以构建）
- If we want to decoupling with some code. Less dependency on others and focus on own business. （解耦代码）
- Verify the flow and not care about the real implementation （关注业务本身）


总之， mock release you（减缓你的痛苦）

## Mock test case

考虑如下的Test
```cpp
class Turtle {
  ...
  virtual ~Turtle() {}
  virtual void PenUp() = 0;
  virtual void PenDown() = 0;
  virtual void Forward(int distance) = 0;
  virtual void Turn(int degrees) = 0;
  virtual void GoTo(int x, int y) = 0;
  virtual int GetX() const = 0;
  virtual int GetY() const = 0;
};

class Painter
{
    Turtle* turtle;
public:
    Painter(Turtle* turtle)
        : turtle(turtle) {}

    bool DrawCircle(int, int, int) {
        turtle->PenDown();
        return true;
    }
};
```
怎么样写一个 test for DrawCircle?

### 运用gmock MOCK_METHOD


```cpp
#include "gmock/gmock.h"  // Brings in gMock.

class MockTurtle : public Turtle {
 public:
  ...
  MOCK_METHOD(void, PenUp, (), (override));
  MOCK_METHOD(void, PenDown, (), (override));
  MOCK_METHOD(void, Forward, (int distance), (override));
  MOCK_METHOD(void, Turn, (int degrees), (override));
  MOCK_METHOD(void, GoTo, (int x, int y), (override));
  MOCK_METHOD(int, GetX, (), (const, override));
  MOCK_METHOD(int, GetY, (), (const, override));
};
```
如何写Test?
```cpp
TEST(PainterTest, CanDrawSomething) {
    MockTurtle turtle;
    EXPECT_CALL(turtle, PenDown())
        .Times(AtLeast(1)); // 定义预期

    Painter painter(&turtle);

    EXPECT_TRUE(painter.DrawCircle(0, 0, 10));
}
```

### 问题: 

如果去掉接口的**virtual**关键字会怎么样？

## 怎么样mock 非 虚函数的接口？

**模板化**你的实现代码 （[mock non-virtual methods using templates](https://google.github.io/googletest/gmock_cook_book.html#MockingNonVirtualMethods)）

```cpp
class Turtle {
  ...
  virtual ~Turtle() {}
  void PenUp() = 0;
  void PenDown() = 0;
  void Forward(int distance) = 0;
  void Turn(int degrees) = 0;
  void GoTo(int x, int y) = 0;
  int GetX() const = 0;
  int GetY() const = 0;
};
```

```cpp
template<class T>
class Painter_
{
    T* turtle;
public:
    Painter_(T* turtle)
        : turtle(turtle) {}

    bool DrawCircle(int, int, int) {
        turtle->PenDown();
        return true;
    }
};

using Painter = Painter_<RealTurtle>
 
```

In Test
```cpp
class MockTurtle {
 void PenDown() {
	std::cout<< "I am a mocked one" << std::endl;
 }
}

TEST(PainterTest, CanDrawSomething) {
    MockTurtle turtle;

    Painter_<MockTurtle> painter(&turtle);

    EXPECT_TRUE(painter.DrawCircle(0, 0, 10));
}
```

## 参考
[gTest](https://google.github.io/googletest/gmock_for_dummies.html)
[gTest 示例](https://www.cnblogs.com/pugang/p/9500352.htm)