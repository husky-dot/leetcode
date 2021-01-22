

### HRM 后台管理系统

gitlab 地址：http://gitlab.xstudy.com.cn/web/hrm

技术栈： vue

### 官微

gitlab 地址：http://gitlab.xstudy.com.cn/web/hrm-mobile

注：除了官微，还包括  入职,兼职,离职登记，还有校招签到功能。

技术栈： vue + vux


### 简历解析插件

gitlab 地址：http://gitlab.xstudy.com.cn/web/hrm-mobile-manage

技术栈: vue-cli-plugin-chrome-ext + elementUI

开发环境打包：
```
npm run start
```
测试环境打包：
```
npm run test
```

正式环境打包：
```
npm run prod
```
运行上述命令后，会生成  dist 目录，然后直接在 谷歌的扩展功能添加文件即可使用该插件。

#### PC 招聘官网

gitlab 地址：http://gitlab.xstudy.com.cn/web/official-employment

技术栈：hyperapp.js 框架

> 注：这个需要学习一下，写法用 JSX


### OKR 
gitlab 地址： http://gitlab.xstudy.com.cn/web/web-okr

技术栈：Vue

注：OKR 列表的界面交互主要是通过 model 层来管理的，后续更改状态可以这对应的 model 文件下更改对应的对象即可。

视图用的一个自行开源的组件：vue-okr-tree
地址：https://github.com/qq449245884/vue-okr-tree

> 注： 后续有需要优化的这个组件的，可以叫我重新发布，或者自行 PR 一下。

### 个人档案



gitlab 地址： http://gitlab.xstudy.com.cn/web/hrm-mobile-manage

技术栈：Vue

功能包含企业微信的  `个人档案`, `伯乐推荐`