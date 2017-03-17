import Vue from 'vue'
import Vuex from 'vuex'
// import { state } from './state'
// import actions from './actions'
// import mutations from './mutations'

// import cart from './modules/cart'

// import * as api from './api'

Vue.use(Vuex)



export default new Vuex.Store({
  // 在非生产环境下，才可以使用严格模式
  strict: process.env.NODE_ENV !== 'production',

  state: {
    topicList: [],
    answerid: {},
  },
  actions: {
    // getTopicList({ commit, state }) {
    //   api.getTopicList({
    //     'topic_code': '6330f4fa6c1d0b5b7c4158765dedbc6f',
    //   })
    //   // ajax('GET', 'http://operating-activities.putao.com/happyfriday?active_topic_id=4')
    //   .then(res => {
    //     setTimeout(function () {
    //       console.log('api 延迟 2s')
    //       // commit('GET_DATA', {
    //       //   res,
    //       // })
    //     }, 2000)
    //   })
    // },
  },
  mutations: {},
  modules: {
    // cart,
  },
})

