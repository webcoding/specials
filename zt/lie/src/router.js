
import Vue from 'vue'
import Router from 'vue-router'

import Edit from './components/Edit'
import Result from './components/Result'
import Answer from './components/Answer'

Vue.use(Router)


const routes = [
  {
    path: '/edit',
    name: 'edit',
    component: Edit,
  },
  {
    path: '/result/:name/:time',
    name: 'result',
    component: Result,
  },
  {
    path: '/answer/:name/:time',
    name: 'answer',
    component: Answer,
  },
  { path: '*', redirect: '/edit' },
]

const router = new Router({
  routes: routes,
})

export default router
