# 专题项目示例

本地存储的记事本 source: https://github.com/lin-xin/notepad

从这个项目中能学到什么？

- 部分组件的简单实现
- store 的简单实现以及使用
- store 的结构层次划分，此处 vuex 文档有详细说明，可参见 shopping-cart 项目
- css3 动画的应用

对于大型应用，我们会希望把 Vuex 相关代码分割到模块中。下面是项目结构示例：

```
├── index.html
├── main.js
├── api
│   └── ... # 抽取出API请求
├── components
│   ├── App.vue
│   └── ...
└── store
    ├── index.js          # 我们组装模块并导出 store 的地方
    ├── actions.js        # 根级别的 action
    ├── mutations.js      # 根级别的 mutation
    └── modules
        ├── cart.js       # 购物车模块
        └── products.js   # 产品模块
```

参见： https://vuex.vuejs.org/zh-cn/structure.html
