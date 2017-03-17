import Vue from 'vue'
import Vuex from 'vuex'
// import { state } from './state'
import actions from './actions'
import mutations from './mutations'

// import cart from './modules/cart'

// import { fetchItems, fetchIdsByType, fetchUser } from './api'

Vue.use(Vuex)

export default new Vuex.Store({
  // 在非生产环境下，才可以使用严格模式
  strict: process.env.NODE_ENV !== 'production',

  state: {
    // level: '第一周',
    itemNum: 1,
    // 严格模式下，为什么这里 allTime 不能直接初始化为 0
    // 因为这里列出来的属性都是要 watcher 的，如果不列出来，就不 watch，页面就不会响应此数据
    // 可以把时间显示（作为一个 watch 数据）在页面上来验证此结论
    // allTime: 0,
    // timer: '',
    itemDetail: [],
    answerid: {},
  },
  actions,
  mutations,
  modules: {
    // cart,
  },
})

