
// import * as actions from './actions'

import { getDate, LocalEvent } from './util'

const local = new LocalEvent('lx_notepad')
const state = local.get() || {
  event: [],
  count: 0,
}

export const EVENT_DO_ADD = 'EVENT_DO_ADD'
export const EVENT_DONE = 'EVENT_DONE'
export const EVENT_TODO = 'EVENT_TODO'
export const EVENT_CANCEL = 'EVENT_CANCEL'
export const EVENT_DO_CLEAR = 'EVENT_DO_CLEAR'
export const EVENT_DO_DEL = 'EVENT_DO_DEL'
export const EVENT_DO_EDIT = 'EVENT_DO_EDIT'

const mutations = {
  [EVENT_DO_ADD](states, obj) {
    states.count++
    obj.items.id = states.count
    states.event.unshift(obj.items)
    local.set(states)
  },
  [EVENT_DONE](states, obj) {
    for (let i = 0; i < states.event.length; i++) {
      if (states.event[i].id === obj.id) {
        states.event[i].type = 2
        states.event[i].time = getDate()
        var item = states.event[i]
        states.event.splice(i, 1)
        break
      }
    }
    states.event.unshift(item)
    local.set(states)
  },
  [EVENT_TODO](states, obj) {
    for (let i = 0; i < states.event.length; i++) {
      if (states.event[i].id === obj.id) {
        states.event[i].type = 1
        var item = states.event[i]
        states.event.splice(i, 1)
        break
      }
    }
    states.event.unshift(item)
    local.set(states)
  },
  [EVENT_CANCEL](states, obj) {
    for (let i = 0; i < states.event.length; i++) {
      if (states.event[i].id === obj.id) {
        states.event[i].type = 3
        var item = states.event[i]
        states.event.splice(i, 1)
        break
      }
    }
    states.event.unshift(item)
    local.set(states)
  },
  [EVENT_DO_CLEAR](states) {
    states.event = []
    local.clear()
  },
  [EVENT_DO_DEL](states, info) {
    if (states.event[info.index].id === info.id) {
      states.event.splice(info.index, 1)
    } else {
      states.event.filter(function (d, i) {
        if (d.id === info.id) {
          states.event.splice(i, 1)
        }
      })
    }
    local.set(states)
  },
  [EVENT_DO_EDIT](states, info) {
    if (states.event[info.index].id === info.id) {
      states.event[info.index].content = info.content
    } else {
      states.event.filter(function (d) {
        if (d.id === info.id) {
          d.content = info.content
        }
      })
    }
    local.set(states)
  },
}

const actions = {
  [EVENT_DO_ADD]({ commit }, param) {
    commit(EVENT_DO_ADD, { items: param })
  },
  [EVENT_DONE]({ commit }, param) {
    commit(EVENT_DONE, { id: param })
  },
  [EVENT_TODO] ({ commit }, param) {
    commit(EVENT_TODO, { id: param })
  },
  [EVENT_CANCEL]({ commit }, param) {
    commit(EVENT_CANCEL, { id: param })
  },
  [EVENT_DO_CLEAR]({ commit }) {
    commit(EVENT_DO_CLEAR)
  },
  [EVENT_DO_DEL]({ commit }, param) {
    commit(EVENT_DO_DEL, param)
  },
  [EVENT_DO_EDIT]({ commit }, param) {
    commit(EVENT_DO_EDIT, param)
  },
}

function filterTodos(states, status) {
  return states.event.filter(function (todo) {
    if (todo && todo.type === status) {
      return todo
    }
  })
}

const getters = {
  getToDo(states) {
    return filterTodos(states, 1)
  },
  getDone(states) {
    return filterTodos(states, 2)
  },
  getCancel(states) {
    return filterTodos(states, 3)
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
