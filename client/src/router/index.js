import Vue from 'vue'
import Router from 'vue-router'
import env from '../config/env'
import store from '../store/'

import login from '../pages/login'
import layout from '../pages/layout'
import explore from '../pages/explore'
import bookmark from '../pages/bookmark'
import tag from '../pages/tag'
import docs from '../pages/docs'
import read from '../pages/read'
import user from '../pages/user'
import help from '../pages/help'
import changelog from '../pages/changelog'
import about from '../pages/about'
import support from '../pages/support'
import svg from '../pages/svg'
// import index from '../pages/index'
import search from '../pages/search'
import page from '../pages/page'
import bookmarkAdd from '../pages/bookmark-add'
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

// 别名与跳转
// 暂时用别名 后期如为归纳统一路径 则使用跳转比别名好
const contentRoutes = [
  {
    path: '/explore',
    name: 'explore',
    component: explore,
  },
  {
    path: '/read',
    name: 'read',
    component: read,
  },
  {
    path: '/bookmark',
    name: 'bookmark',
    component: bookmark,
    alias: ['/bookmarks', 'b'],
  },
  {
    path: '/user',
    name: 'user',
    component: user,
    alias: ['/users', 'u'],
  },
  {
    path: '/docs',
    name: 'docs',
    component: docs,
    alias: '/doc',
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
]

Vue.use(Router)

const router = new Router({
  // mode: 'history', // hash
  mode: env.routerMode,
  base: '',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    // { path: '/', name: 'index', component: index },
    {
      path: '/',
      // 使用默认子路由，则父路由的 name 就得去掉
      // 否则使用 `:to="{name: 'demo'"` 会导致默认子路由不会render
      name: '',
      component: layout,
      children: [{
        path: '/',
        name: 'bookmarks',
        component: bookmark,
      }].concat(contentRoutes),
    },
    {
      path: '/bookmark/add',
      name: 'bookmark-add',
      component: bookmarkAdd,
    },
    {
      path: '/tag',
      name: 'tag',
      component: tag,
      alias: ['/tags', '/t'],
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
  ],
})

const auth = {
  loggedIn() {
    return Boolean(store.state.user.email === '1395093509@qq.com' && store.state.user.passward === 'xiaohan')
  },
}


const loginPath = '/login'
// let indexScrollTop = 0
// 权限检测
router.beforeEach((to, from, next) => {
  const { meta, path } = to
  const { requiresAuth = true } = meta

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
