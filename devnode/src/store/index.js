import Vue from 'vue'
import Vuex from 'vuex'
// import { state } from './state'
import * as getters from './getters'
import actions from './actions'
import mutations from './mutations'
import modules from './modules'
// import createLogger from '../../../src/plugins/logger'
// import user from './user'
// import { mapState } from 'vuex'

// 内置 Logger 插件
// 如果正在使用 vue-devtools，你可能不需要此插件。
// import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const state = {}

// 在非生产环境下，才可以使用严格模式
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: debug,
  state: state,
  actions,
  getters,
  mutations,
  modules,
  // plugins: debug ? [createLogger()] : [],
})

