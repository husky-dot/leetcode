#### Vue computed的原理是什么？为什么避免在computed里面进行修改数据的操作？（答出懒求值应该就可以，实际是特殊watcher）
总结：在对 computed 的属性进行 watcher 的时候，传入一个 lazy 为 true 的参数，在 watcher 内部将 lazy 值赋值给 dirty 属性，在获取 computed 属性的时候，如果 dirty 为 true，则重新执行被 defineComputed 改写过的 get 方法，获取最新值，如果 dirty 为 false，则获取上一次 watcher 实例的 value 值，这里就实现了缓存。对于 dirty 值更改为 true 的时机，则是在 props 和 data 等被 defineProperty 劫持改写的 set 方法内，每当数据发生变化，则通过 defineReactive$$1 方法最后执行 update 方法更新 dirty 值。


#### v-if和v-for能不能写在同一个标签中？
https://www.kancloud.cn/donaf/vue/633890


#### v-if和v-show的区别

https://juejin.cn/post/6844903767553359885


#### Vue实现双向数据绑定的原理，能手写吗
https://my.oschina.net/lenglingx/blog/4476845


#### 面试官：手写一个快速排序，并对其改进
https://zhuanlan.zhihu.com/p/82671667


#### Vuex 的一些缺陷

https://juejin.cn/post/6844903588334927885


#### v-for中为什么要用key
https://blog.csdn.net/qq_42072086/article/details/107997149



#### Vue 组件间通信有哪些方式?

https://juejin.cn/post/6844903887162310669


#### Vue中computed、methods和watch之间的区别
https://juejin.cn/post/6844903815175487495



#### vue中怎么重置data？

https://zhuanlan.zhihu.com/p/110978595


#### vue中组件name的作用

https://zhuanlan.zhihu.com/p/225164488


#### Vue首屏加载速度优化，提升80%以上

https://juejin.cn/post/6844904185264095246


#### vue-cli 替我们做了哪些工作？
https://zhuanlan.zhihu.com/p/67720854