import Vue from 'vue'
import Router from 'vue-router'

import layout from '@/components/layout'
import search from '@/components/search'

Vue.use(Router)

// console.log(env.routerMode)
const router = new Router({
  // mode: 'history', // hash
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: layout,
      children: [
        {
          path: '/',
          name: 'search',
          component: search,
          alias: ['search'],
        },
      ],
    },
  ],
})
export default router
