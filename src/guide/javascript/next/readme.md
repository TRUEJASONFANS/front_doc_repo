# Next

# 优点 来自于官网
1. 直观的、 基于页面 的路由系统（并支持 动态路由）
2. 预渲染。支持在页面级的 静态生成 (SSG) 和 服务器端渲染 (SSR)
3. 自动代码拆分，提升页面加载速度
4. 具有经过优化的预取功能的 客户端路由
5. 内置 CSS 和 Sass 的支持，并支持任何 CSS-in-JS 库
6. 开发环境支持 快速刷新
7. 利用 Serverless Functions 及 API 路由 构建 API 功能
8. 完全可扩展

## 预渲染
不依赖于javascript 渲染也能展现网站的雏形

1. 在目标页面，定义一个 导出 的 async getStaticProps 函数， next 将会为这个页面做预渲染
### SSG(静态生成)

```js
export async function getStaticProps() {
  return {
    props: {
      // props for your component
    }
  }
}

```

### SSR(服务器端渲染)

```js
export async function getServerSideProps(context) {
  return {
    props: {
      // props for your component
    }
  }
}

```