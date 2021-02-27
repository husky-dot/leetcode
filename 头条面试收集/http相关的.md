#### 1.浏览器访问一个url所展示页面的流程。详细说明

https://blog.csdn.net/qq_43356200/article/details/107363084

#### 2.强缓存，协商缓存，及缓存涉及的 headers
https://blog.csdn.net/wzc_coder/article/details/108426834
#### 3.HTTP1.0, HTTP1.1, HTTp2

#### 4.前端后如何鉴别不同的用户？ cookie,session相关的

https://blog.csdn.net/qq_16030133/article/details/78505538

#### 5.HTTP 和 HTTPS 的区别

https://www.cnblogs.com/cxuanBlog/p/12735623.html

#### 6.什么是无状态协议，HTTP 是无状态协议吗，怎么解决


#### 7.UDP 和 TCP 的区别

https://www.cnblogs.com/cxuanBlog/p/12735623.html


#### 8.TCP 三次握手和四次挥手

https://www.cnblogs.com/cxuanBlog/p/12735623.html


#### 9.简述 HTTP1.0/1.1/2.0 的区别

https://www.cnblogs.com/cxuanBlog/p/12735623.html

#### 10.请你说一下 HTTP 常见的请求头
https://www.cnblogs.com/cxuanBlog/p/12735623.html


#### 11.地址栏输入 URL 发生了什么
https://www.cnblogs.com/cxuanBlog/p/12735623.html

#### 12.HTTPS 的工作原理
https://www.cnblogs.com/cxuanBlog/p/12735623.html


#### 13.常见的HTTP相应状态码
https://blog.csdn.net/yicixing7/article/details/79320821


#### 14.HTTP1.1版本新特性
https://blog.csdn.net/yicixing7/article/details/79320821

#### 15.HTTP优化方案
https://blog.csdn.net/yicixing7/article/details/79320821



#### 16.cookie有哪些属性
https://www.cnblogs.com/daysme/p/8052930.html


#### 17.cookie、session、sessionStorage、localStorage区别

https://www.jianshu.com/p/bdbae99a3871


#### 18.options请求方法有什么用

https://juejin.cn/post/6844903821634699277
简而言之，OPTIONS请求方法的主要用途有两个：

1、获取服务器支持的HTTP请求方法；

2、用来检查服务器的性能。

其实在正式跨域之前，浏览器会根据需要发起一次预检（也就是option请求），用来让服务端返回允许的方法（如get、post），被跨域访问的Origin（来源或者域），还有是否需要Credentials(认证信息)等。



#### 浏览器同源策略
https://blog.csdn.net/qq_42044542/article/details/105349667

#### 说一下cdn的原理

https://juejin.cn/post/6844904197792628749




### TCP 四次挥手

https://www.bilibili.com/video/BV1C5411Y7dG?from=search&seid=4997250634902508640


### 简述 HTTP1.0/1.1/2.0 的区别

1.0 短连接  
1.1 长连接
2.0 长连接 + 多路复用


 ### Restful API

 * 一种新的 API 设计方法 (早已推广使用)
 * 传统 API 设计：把每个 url 当做一个功能
 * Restful API 设计：把每个 url 当做一个唯一的资源



### 如何设计成一个资源？

* 尽量不用 url参数
* 用 method 表示操作类型



#### Request Headers

* Accept 浏览器可以接收的数据格式
* Accept-Encoding 浏览器可以接收的压缩算法，如 gzip。
* Accept-Languange 浏览器可接收的语言，如 zh-CN
* Conncetion: keep-alive  一次 TCP 连接重复使用
* cookie
* Host
* UA
  

### Response Headers

* Content-type 返回数据格式，如 application/json
* Content-length 返回数据大小，多少字节
* Content-Encoding 返回数据的压缩算法，如 gzip





