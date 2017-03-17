import Vue from 'vue'
import Router from 'vue-router'
// import store from '../store/'

import index from '../pages/index'
// import score from '../pages/score'
// import profile from '../pages/profile'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '', name: 'index', component: index },
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
  ],
})

const auth = {
  loggedIn() {
    // return Boolean(store.state.user.id)
  },
}

const loginPath = '/login'
// let indexScrollTop = 0
// 权限检测
router.beforeEach((to, from, next) => {
  const { meta, path } = to
  const { requiresAuth = false } = meta

  // if (to.matched.some(record => record.meta.requiresAuth)) {
  if (requiresAuth && !auth.loggedIn() && path !== loginPath) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    return next({
      path: loginPath,
      query: { redirect: to.fullPath },
    })
  }

  // 确保一定要调用 next()
  return next()
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
