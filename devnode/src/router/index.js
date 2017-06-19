import Vue from 'vue'
import Router from 'vue-router'
import env from '@/config/env'
// import store from '@/store/'
import ajaxApi from '@/store/api'

import layout from '@/layout/layout'
import bookmarkRoutes from './bookmarks'
import userRoutes from './user'
import link from '@/pages/link'

const login = () => import('@/user/login')
const support = () => import('@/pages/support')
const page = () => import('@/pages/page')
const learn = () => import('@/pages/learn')
const docs = () => import('@/pages/docs')
const unread = () => import('@/pages/unread')
const help = () => import('@/pages/help')
const changelog = () => import('@/pages/changelog')
const about = () => import('@/pages/about')
const svg = () => import('@/pages/svg')
const test = () => import('@/pages/test')
// const page404 = () => import('@/components/404')

// import score from '@/pages/score'
// import profile from '@/pages/profile'

const coming = {
  template: `
    <div class="page-coming">
      <div class="coming">coming soon...</div>
    </div>`,
}
const page404 = {
  template: `
    <div class="page-coming">
      <div class="coming">404...</div>
    </div>`,
}

const systemRoutes = [
  // { path: '/', name: 'index', component: index },
  // {
  //   path: '/tag/add',
  //   name: 'tag-add',
  //   meta: {
  //     requiresAuth: true,
  //   },
  //   component: tagAdd,
  // },
  {
    path: '/unread',
    name: 'unread',
    component: unread,
  },
  {
    path: '/docs',
    name: 'docs',
    component: docs,
    alias: '/doc',
  },
  {
    path: '/learn',
    name: 'learn',
    component: learn,
  },
  {
    path: '/changelog',
    name: 'changelog',
    component: changelog,
  },
  {
    path: '/help',
    name: 'help',
    component: help,
  },
  {
    path: '/about',
    name: 'about',
    component: about,
  },
  {
    path: '/support',
    name: 'support',
    component: support,
  },
  {
    path: '/svg',
    name: 'svg',
    component: svg,
  },
  {
    path: '/test',
    name: 'test',
    component: test,
  },
  { path: '/guide', name: 'guide', component: page },
  { path: '/coming', name: 'coming', component: coming },
  // { path: '/score', name: 'score', component: score },
  // {
  //   path: '/item',
  //   name: 'item',
  //   component: resolve => require(['../pages/item'], resolve),
  //   // component: r => require.ensure([], () => r(require('../page/home')), 'home')
  // },
  // { path: '*', redirect: '/' },
  // {
  //   path: '/',
  //   // component: App,
  //   children: [
  //   ],
  // },
]

Vue.use(Router)

// console.log(env.routerMode)
const router = new Router({
  // mode: 'history', // hash
  mode: env.routerMode,
  // base: '',
  scrollBehavior: () => ({ y: 0 }),
  // scrollBehavior (to, from, savedPosition) {
  //   console.log('savedPosition: ' + savedPosition)
  //   if (savedPosition) {
  //     return savedPosition
  //   } else {
  //     return { x: 0, y: 0 }
  //   }
  // },
  routes: [
    ...bookmarkRoutes,
    ...userRoutes,
    { path: '/link', name: 'link', component: link },
    { path: '/login', name: 'login', component: login },
    {
      path: '/',
      // 使用默认子路由，则父路由的 name 就得去掉
      // 否则使用 `:to="{name: 'demo'"` 会导致默认子路由不会render
      name: 'layout',
      component: layout,
      // component: bookmark,
      children: [
        ...systemRoutes,
      ],
    },
    { path: '/*', name: '404', component: page404 },
  ],
})

const loginPath = '/login'
let logged
async function checkAuth() {
  const res = await ajaxApi.checkLogin()
  if (res.errno === 0) {
    logged = true
  } else {
    console.log(res.errmsg)
    logged = false
  }
  return logged
}

// console.log(router)

// let indexScrollTop = 0
// 权限检测
router.beforeEach((to, from, next) => {
  const { meta, path } = to
  const { auth = false } = meta

  // if (to.matched.some(record => record.meta.requiresAuth)) {
  if (auth && path !== loginPath) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    checkAuth().then((logged) => {
      if (!logged) {
        return next({
          path: loginPath,
          query: { redirect: to.fullPath },
        })
      } else {
        next()
      }
    })
  } else {
    // 确保一定要调用 next()
    return next()
  }
})

export default router


/**
 *
 * { path: '/' },
    // params are denoted with a colon ":"
    { path: '/params/:foo/:bar' },
    // a param can be made optional by adding "?"
    { path: '/optional-params/:foo?' },
    // a param can be followed by a regex pattern in parens
    // this route will only be matched if :id is all numbers
    { path: '/params-with-regex/:id(\\d+)' },
    // asterisk can match anything
    { path: '/asterisk/*' },
    // make part of th path optional by wrapping with parens and add "?"
    { path: '/optional-group/(foo/)?bar' }
 */
