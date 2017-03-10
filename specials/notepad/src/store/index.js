import Vue from 'vue'
import Vuex from 'vuex'
import note from './note'
// import { fetchItems, fetchIdsByType, fetchUser } from './api'

Vue.use(Vuex)

export default new Vuex.Store({
  // 在非生产环境下，使用严格模式
  // strict: process.env.NODE_ENV !== 'production',
  strict: true,
  modules: {
    note,
  },
})

