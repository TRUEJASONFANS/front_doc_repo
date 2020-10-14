---
sidebar: auto
---
# react-query

[本文节选自](https://developer.51cto.com/art/202007/621844.htm)

React 是一个专注的组件库。因此，它对如何请求远程数据没有什么建议。如果要通过 HTTP 请求数据并将其发送到 Web API，可以考虑下面四种方法。

1. 内联写法
2. 集中管理
3. 自定义 Hook
4. react-query/swr

## 内联写法

``` javascript
import React, { useState, useEffect } from "react"; 
 
export default function InlineDemo() { 
  const [users, setUsers] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
 
  useEffect(() => { 
    fetch(`${process.env.REACT_APP_API_BASE_URL}users`) 
      .then(response => { 
        if (response.ok) return response.json(); 
        throw response; 
      }) 
      .then(json => { 
        setUsers(json); 
      }) 
      .catch(err => { 
        console.error(err); 
        setError(err); 
      }) 
      .finally(() => { 
        setLoading(false); 
      }); 
  }, []); 
 
  if (loading) return "Loading..."; 
  if (error) return "Oops!"; 
  return users[0].username; 
} 
```

对于一个简单的应用程序，只要发起几个请求，就可以正常工作。但是上面的状态声明和 useEffect 都是模版。如果我要进行许多 HTTP 调用，我不想为每个调用重复和维护大约 20 行代码。内联调用让你的代码变得很丑。

看一下我们要解决的一些问题：

声明加载状态
声明错误状态
将错误打印到控制台
检查响应是否通过返回 200 response.ok
如果响应正常，将响应转换为 json 并返回 promise
如果响应不正确，抛出错误
在 finally 中隐藏加载状态，以确保 Loading 即使发生错误也被隐藏
声明一个空的依赖项数组，以便 useEffect 只运行一次
这只是一个简单的示例，它忽略了许多其他相关问题。


## 文件夹集中管理

如果我们在一个文件夹中处理所有 HTTP 调用会怎么样? 使用这种方法，我们创建了一个名为 services 的文件夹，并且把进行 HTTP 调用的函数都放进去。service 是比较流行的术语，我在下面也讨论了很多好的替代名称，如 client 或 api。

要点是，所有的 HTTP 调用都是通过纯 JavaScript 函数处理的，存储在一个文件夹中。这是一个集中的 getUsers 函数:

``` javascript
export function getUsers() { 
  return fetch(`${process.env.REACT_APP_API_BASE_URL}users`).then(response => 
    response.json() 
  ); 
} 
```

下面是对 getUsers 函数的调用：

``` javascript
import React, { useState, useEffect } from "react"; 
import { getUsers } from "./services/userService"; 
 
export default function CentralDemo() { 
  const [users, setUsers] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  useEffect(() => { 
    getUsers() 
      .then(json => { 
        setUsers(json); 
        setLoading(false); 
      }) 
      .catch(err => { 
        console.error(err); 
        setError(err); 
      }); 
  }, []); 
 
  if (loading) return "Loading..."; 
  if (error) return "Oops!"; 
  return users[0].username; 
} 
```

## 方式3：自定义Hook

借助 React Hooks 的魔力，我们终于可以集中处理重复的逻辑。那么如何创建一个自定义 useFetch 钩子来简化我们的 HTTP 调用呢?

```javascript
import { useState, useEffect, useRef } from "react"; 
// This custom hook centralizes and streamlines handling of HTTP calls 
export default function useFetch(url, init) { 
  const [data, setData] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const prevInit = useRef(); 
  const prevUrl = useRef(); 
 
  useEffect(() => { 
  // Only refetch if url or init params change. 
    if (prevUrl.current === url && prevInit.current === init) return; 
    prevUrl.current = url; 
    prevInit.current = init; 
    fetch(process.env.REACT_APP_API_BASE_URL + url, init) 
      .then(response => { 
        if (response.ok) return response.json(); 
        setError(response); 
      }) 
      .then(data => setData(data)) 
      .catch(err => { 
        console.error(err); 
        setError(err); 
      }) 
      .finally(() => setLoading(false)); 
  }, [init, url]); 
 
  return { data, loading, error }; 
} 
```

你的可能看起来不一样，但我发现这个基本的使用方法很有用。这个 Hook 极大地简化了所有调用。看看使用这个 Hook 需要多少代码 :

``` javascript
import React from "react"; 
import useFetch from "./useFetch"; 
 
export default function HookDemo() { 
  const { data, loading, error } = useFetch("users"); 
  if (loading) return "Loading..."; 
  if (error) return "Oops!"; 
  return data[0].username; 
} 

```
对于许多应用程序，你只需要一个这样的自定义Hook。但是这个Hook已经很复杂了，并且它消除了许多问题。

但是还有很多我们没有考虑到的点：缓存?、如果客户端的连接不可靠，如何重新获取?你想在用户重新调整标签时重新获取新数据吗?如何消除重复查询?

你可以不断完善这个自定义Hook来完成所有这些操作。但是，您应该只需要方式4:


## react-query/swr
使用 react-query或swr，可以为我们处理缓存、重试、重复查询等等。我不必维护自己的自定义Hook了。而且每个 HTTP 调用都需要很少的代码：

```javascript
import React from "react"; 
import { getUsers } from "./services/userService"; 
import { useQuery } from "react-query"; 
 
export default function ReactQueryDemo() { 
  const { data, isLoading, error } = useQuery("users", getUsers); 
  if (isLoading) return "Loading..."; 
  if (error) return "Oops!"; 
  return data[0].username; 
} 
```

[本文节选自](https://developer.51cto.com/art/202007/621844.htm)