import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello';
// import Layout from '@/components/Layout';
// import World from '@/components/World';
import layout2 from '@/layout/Layout2'
import group1 from './group1'


const World = () => import('@/components/World')
const systemRoutes = [
  {
    path: '/world',
    name: 'world',
    component: World,
  },
]

Vue.use(Router)

export default new Router({
  routes: [
    ...group1,
    {
      path: '/',
      // 使用默认子路由，则父路由的 name 就得去掉
      // 否则使用 `:to="{name: 'demo'"` 会导致默认子路由不会render
      name: 'layout2',
      component: layout2,
      // component: bookmark,
      children: [
        ...systemRoutes,
      ],
    },
  ],
})
