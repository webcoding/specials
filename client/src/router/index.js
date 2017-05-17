import Vue from 'vue'
import Router from 'vue-router'
import env from '../config/env'
// import store from '../store/'
import ajaxApi from '../store/api'
import login from '../pages/login'
import support from '../pages/support'
// import index from '../pages/index'
import search from '../pages/search'
import page from '../pages/page'
import bookmarkPages from './bookmark'
import userPages from './user'

// import score from '../pages/score'
// import profile from '../pages/profile'

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

const systemPages = [
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
    path: '/support',
    name: 'support',
    component: support,
  },
  { path: '/guide', name: 'guide', component: page },
  { path: '/search', name: 'search', component: search },
  { path: '/login', name: 'login', component: login },
  { path: '/coming', name: 'coming', component: coming },
  { path: '/*', name: '404', component: page404 },
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

const router = new Router({
  // mode: 'history', // hash
  mode: env.routerMode,
  base: '',
  scrollBehavior: () => ({ y: 0 }),
  routes: [].concat(
    bookmarkPages,
    userPages,
    systemPages,
  ),
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

// let indexScrollTop = 0
// 权限检测
router.beforeEach((to, from, next) => {
  const { meta, path } = to
  const { requiresAuth = false } = meta

  // if (to.matched.some(record => record.meta.requiresAuth)) {
  if (requiresAuth && path !== loginPath) {
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
