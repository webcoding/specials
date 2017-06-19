import Vue from 'vue'
import Router from 'vue-router'

import layout from '@/components/layout'
import hello from '@/components/hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: layout,
      children: [
        {
          path: '/',
          name: 'hello',
          component: hello,
          alias: ['hello'],
        },
      ],
    },
  ],
})
