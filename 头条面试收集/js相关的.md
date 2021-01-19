####实现Bind函数

```
if(!Function.prototype.bind){
  Function.prototype.bind = function(context){
    // 首先判断this是不是function
    if(typeof this !== 'function'){
      // 抛出错误
    }
    var _this = this,
          fNOP = function(){},    // 用于后面维护原型关系
          args = Array.prototype.slice.call(arguments, 1),    // 取出bind收到的参数，除去第一个作为上下文的参数并保存
          fBound = function(){
            _this.call(context, args.concat(Array.prototype.slice.call(arguments)))   // 将bind接收的的参数和实际接收到的参数相连接
          };
    // 维护原型关系
    if(this.prototype){
        fNOP.prototype = this.prototype;
        fBound.prototype = new fNOP;
    }
    return fBound;
  }
}
```



#### 实现节流函数

有一个高频操作会让函数迅速执行很多次，需要按照下面的时间线图来实现一个节流函数。

```
var throttle = function(fn){
  var timer = null;
  return function(){
    var args = arguments, context = this;
    clearTimeout(timer);
    timer = setTimeout(function(){
      fn.call(context, args)
    }, 100)
  }
}
这跟javascript高级程序设计中的实现方式差不多，其实严格来说这种实现方式并不叫节流函数，而是防抖函数：短时间内多次调用同一函数，只执行最后一次调用。
下面是改进：
var throttle = function(fn){
  var timer = null;
  return function(){
    var args = arguments, context = this;
    if(!timer){
      timer = setTimeout(function(){
        timer = null;
        fn.call(context, args)
      }, 100);
    }
  }
}
如此一来这个功能基本上就可以实现了，但是仍有一个问题，第一次调用的时候函数并没有执行，而是直接从第三次调用开始执行的，那么我们再改进一下，加一个第一次调用时的哨兵即可：
var throttle = function(fn){
  var timer = null, first = true;
  return function(){
    var args = arguments, context = this;
    if(first){
      first = false;
      fn.call(context, args)
    }
    if(!timer){
      timer = setTimeout(function(){
        timer = null;
        fn.call(context, args)
      }, 100);
    }
  }
}
```



#### script中defer和async的区别
https://juejin.cn/post/6844903512493522958


#### Base64 的原理、实现及应用

https://juejin.cn/post/6844903663459106829



#### require，import区别？
https://www.zhihu.com/question/56820346

