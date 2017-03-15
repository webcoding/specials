# specials_demo 专题项目

> A Vue.js project

## 多个专题的开发管理维护

参见实现 [specials_demo](https://github.com/webcoding/specials_demo)

专题用于推广项目，和项目紧密关联，如用户信息、产品等，所以目前设定为专题依附于项目，多个专题之间可以相互独立，也可以关联；专题也可以简单或复杂

为了便于开发维护，特约定如下：

- 专题统一放在项目的子目录——`zt/` 目录下
- 专题和项目共用 build、config以及 package.json 依赖等
- 每个专题独立一个目录，包含专题所需所有资源 src、src/assets、test、index.html 等
- 目前规定一个专题只有一个根路径（即根路由），不使用子路径路由，详细参见下文的专题路径规划
- 制定基础的实现方案，如：路由管理、状态管理、api 接入、测试用例等，参考示例实现[specials_demo](https://github.com/webcoding/specials_demo)
  - 状态管理 vuex，简单专题可使用 [global event bus](https://vuejs.org/v2/guide/components.html#Non-Parent-Child-Communication) 方案实现（但我建议直接使用 vuex 即可，简单方案可做了解）
  - 路由管理 vue-router，简单专题无需引用，单页面实现即可，复杂专题可以使用 hash 模式区别该专题多页面
  - api 接入，使用 vue-resource
  - 测试用例，单元测试可以写起来（项目打包输出会到一个目录，还准备有一个全量打包的流程，所以单元测试还是比较重要的）
- 提交到 Git？（此机制待确定，）
- 发布到七牛？
- 发布到生产？

### 专题路径规划

首先专题项目和主项目隔离，发布相互独立，而访问时，会做路由跳转 xxx.com/special 指向到专题发布目录，此时各个专题路径即各个专题项目，项目内不再做路由规划（history 模式）

如果专题项目如果比较复杂，需要多个页面实现，可以使用 hash 模式，暂时不要使用 history 模式

## Build Setup

专题依附于项目，所以这里考虑了和项目共用配置

``` bash
# 安装工具
npm install webx-cli -g

# 第一次使用要初始化专题目录，安装相关依赖等
webx init specials zt

# 新建一个专题 如: lottery
webx init special-tpl lottery

# 如果专题不依赖项目，可以直接使用 simple 模板
webx init simple

# 专题的 开发调试、编译发布
npm install
npm run dev --path=zt/todomvc
npm run build --path=zt/todomvc
npm run deploy --path=zt/todomvc
npm run qn --path=zt/todomvc
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).


