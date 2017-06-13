import Vue from 'vue'
import Vuex from 'vuex'
// import { state } from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import modules from './modules'
// import user from './user'
// import { mapState } from 'vuex'

Vue.use(Vuex)

const state = {}

// 在非生产环境下，才可以使用严格模式
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: debug,
  state: state,
  actions,
  mutations,
  getters,
  modules,
})

