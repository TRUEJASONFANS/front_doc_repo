# Spring boot
**靡不有初, 鲜克有终**



## Spring boot executable jar 揭秘

1. Main-class: JarLauncher （spring boot 引导入口文件）
2. Start-class: 才是用户定义@SpringbootApplication main class

## Spring boot 固化依赖
1. spring-boot-starter-parent
2. spring-boot-dependencies

## 嵌入式Web 容器分类

### servlet container
Embeded binary

1. Tomcat: spring-boot-starter-tomcat
2. Jetty: spring-boot-starter-jetty
3. Undertow: spring-boot-starter-undertow

###  Reactive Web 容器
去掉starter-web , starter-webflux以及组合组合以下
1. UndertowServletWebServer
2. Tomcat: spring-boot-starter-tomcat
3. Jetty: spring-boot-starter-jetty

### Auto-configuration

## Spring boot Session


### Session与Cookie
1. Session 位于服务器, Cookie位于客户端
   
### 持久化问题
   1. JDBC
   2. Redis
### 集成Spring Security
   
## Token vs Session
1. Token 更好的支持移动端，以及对浏览器的兼容性更好
2. Token 无需查询数据库， 效率更好，只需解密你的签名即可