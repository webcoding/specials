
import Layout from '@/layout/Layout'
// import Hello from '@/components/Hello';
// import World from '@/components/World';
import page1 from '@/pages/page1'
import page2 from '@/pages/page2'

const pages = [
  {
    path: '/',
    name: 'page1',
    component: page1,
    alias: ['page1'],
  },
]

export default [
  {
    path: '/',
    // 使用默认子路由，则父路由的 name 就得去掉
    // 否则使用 `:to="{name: 'demo'"` 会导致默认子路由不会render
    // name: '',
    component: Layout,
    // component: bookmark,
    children: [
      ...pages,
    ],
  },
  {
    path: '/page2',
    name: 'page2',
    component: page2,
  },
]
