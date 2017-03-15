// import ajax from '../services/ajax'

// 注意 import 和 export 的使用
// 参见 http://es6.ruanyifeng.com/#docs/module

// 如果 asynData 使用 default
// import * as asynData from '../services/asynData'
// output: asynData.default.getItemDetail

// import asynData from '../services/asynData'
// // output: asynData.getItemDetail
// console.log(asynData)

// asynData 不要使用 default，否则输出 getItemDetail 为 undefined
import { getItemDetail } from '../services/asynData'
// output undefined
// console.log(getItemDetail)

export default {
  addNum({ commit, state }, id) {
    commit('REMBER_ANSWER', { id })
    if (state.itemNum < state.itemDetail.length) {
      commit('ADD_ITEMNUM', {
        num: 1,
      })
    }
  },

  // getData({ commit, state }) {
  //   ajax('GET', 'http://operating-activities.putao.com/happyfriday?active_topic_id=4')
  //   .then(res => {
  //     setTimeout(function () {
  //       console.log('api 延迟 2s')
  //       commit('GET_DATA', {
  //         res,
  //       })
  //     }, 2000)
  //   })
  // },

  async getData ({ commit, state }) {
    // 因为 babel 打包的原因，这里要写 default
    const res = await getItemDetail()
    // const res = await getItemDetail()
    setTimeout(function () {
      console.log('api 再延迟 1s')
      console.log(res)
      commit('GET_DATA', {
        res,
      })
    }, 2000)
  },

  initializeData({ commit }) {
    commit('INITIALIZE_DATA')
  },
}
