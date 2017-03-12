# 专题项目示例

购物车 source: https://github.com/vuejs/vuex/tree/dev/examples/shopping-cart


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
