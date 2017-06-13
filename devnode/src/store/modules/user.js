
import Vue from 'vue'

// import * as types from '../types'
import { USER_SIGNIN, USER_SIGNOUT } from '../types'
import storage from '@/utils/storage'


const state = storage.get('user') || {}

const mutations = {
  [USER_SIGNIN](state, user) {
    storage.set('user', user)
    Object.assign(state, user)
  },
  [USER_SIGNOUT](state) {
    storage.clear('user')
    Object.keys(state).forEach(k => Vue.delete(state, k))
  },
}

const actions = {
  [USER_SIGNIN]({ commit }, user) {
    commit(USER_SIGNIN, user)
  },
  [USER_SIGNOUT]({ commit }) {
    commit(USER_SIGNOUT)
  },
}

export default {
  state,
  mutations,
  actions,
}
