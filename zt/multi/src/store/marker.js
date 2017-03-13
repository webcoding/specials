
import Vue from 'vue'

Vue.use(Vuex)

const state = {
  collectItems: [],
  searchResult: {}
}

localStorage.getItem("collectItems")
    ? state.collectItems = localStorage.getItem("collectItems").split(',')
    : false

const mutations = {
  SET_RESULT (state, result) {
    state.searchResult = result
  },
  COLLECT_IT (state, name) {
    state.collectItems.push(name)
    localStorage.setItem("collectItems", state.collectItems)
  },
  DELETE_COLLECTION (state, name) {
    state.collectItems.splice(state.collectItems.indexOf(name), 1)
    localStorage.setItem("collectItems", state.collectItems)
  }
}

export default {
  // state: JSON.parse(sessionStorage.getItem('user')) || {},
  state: {
    collectItems: localStorage.getItem("collectItems").split(',') || [],
    searchResult: {},
  },
  mutations: {
    [SET_RESULT](state, result) {
      Object.assign(state, user)
      state.searchResult = result
    },
    [COLLECT_IT](state, name) {
      state.collectItems.push(name)
      localStorage.setItem("collectItems", state.collectItems)
    },
    [DELETE_COLLECTION](state, name) {
      state.collectItems.splice(state.collectItems.indexOf(name), 1)
      localStorage.setItem("collectItems", state.collectItems)
    }

    [USER_SIGNIN](state, user) {
      tempUser = user
      // sessionStorage.setItem('user', JSON.stringify(user))
      Object.assign(state, user)
    },
    [USER_SIGNOUT](state) {
      tempUser = {}
      // sessionStorage.removeItem('user')
      Object.keys(state).forEach(k => Vue.delete(state, k))
    },
  },
  actions: {
    [USER_SIGNIN]({ commit }, user) {
      commit(USER_SIGNIN, user)
    },
    [USER_SIGNOUT]({ commit }) {
      commit(USER_SIGNOUT)
    },
  },
}
