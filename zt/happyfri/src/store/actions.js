import ajax from '../services/ajax'
import fetch from '../services/fetch'

export default {
  addNum({ commit, state }, id) {
    commit('REMBER_ANSWER', { id })
    if (state.itemNum < state.itemDetail.length) {
      commit('ADD_ITEMNUM', {
        num: 1,
      })
    }
  },

  getData({ commit, state }) {
    ajax('GET', 'http://operating-activities.putao.com/happyfriday?active_topic_id=4')
    .then(res => {
      setTimeout(function () {
        console.log('api 延迟 2s')
        commit('GET_DATA', {
          res,
        })
      }, 2000)
    })

    // fetch('GET', 'http://operating-activities.putao.com/happyfriday?active_topic_id=4', {
    //   type: 'group',
    // })
  },

  initializeData({ commit }) {
    commit('INITIALIZE_DATA')
  },
}
