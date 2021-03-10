// new Compile(el, vm)

class Compile {
  constructor (el, vm) {
    this.$vm = vm;
    this.$el = document.querySelector(el);

    if (this.$el) {
      // 提取宿主中模板内容到 Fragment 标签， dom 操作
      this.$fragment = this.node2Fragment(this.$el);
      // 编译模板内容，同时进行依赖收集
      this.compile(this.$fragment);
      this.$el.appendChild(this.$fragment)
    }
  }

  node2Fragment(el) {
    const fragment = document.createDocumentFragment();
    let child;
    while (child = el.firstChild) {
      fragment.appendChild(child)
    }
    return fragment;
  }

  compile(el) {
    const childNodes = el.childNodes;
    Array.from(childNodes).forEach(node => {
      // 判断节点类型

      if (node.nodeType === 1) {
        // element 节点
        // console.log('编译元素节点' + node.nodeName)
        this.compileElement(node);
      } else if (this.isInterpolation(node)) {
        // 插值表达式
        // console.log('编译插值文本' + node.textContent)
        this.text(node);
      }

      // 递归子节点
      if (node.childNodes && node.childNodes.length > 0) {
        this.compile(node)
      }
    })
  }

  isInterpolation (node) {
    // 是文本且符合 {{}}
    return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent)
  }

  compileElement () {
    // <div k-text="test" @click="onClick"></div>
    let nodeAttrs = node.attributes;
    Array.from(nodeAttrs).forEach(attr => {
      const attrName = attr.name;
      const exp = attr.value;
      if (this.isDirective(attrName)) {
        const dir = attrName.substring(2);
        this[dir] && this[dir](node, this.$vm, exp);
      }
      if (this.isEvent(attrName)) {

      }
      
    })
  }

  isDirective (attr) {
    return attr.indexOf('k-') === 0;
  }

  isEvent () {
    return attr.indexOf('@') === 0;
  }

  text (node, vm, exp) {
    // console.log(RegExp.$1)
    this.update(node, vm, RegExp.$1, 'text')
  } 

  update (node, vm, exp, dir) {
    let updatorFn = this[dir+'Updator'];
    updatorFn && updatorFn(node, vm[exp]);
    // 依赖收集
    new Watcher(vm, exp, function (value) {
      updatorFn && updatorFn(node, value);
    })
  }

  textUpdator (val) {
    node.textContent = val;
  }

}