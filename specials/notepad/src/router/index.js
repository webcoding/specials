import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/'


import index from '../pages/index'
import login from '../pages/login'
// import profile from '../pages/profile'

Vue.use(Router)
console.log(222)

const router = new Router({
  // 使用 history 模式（默认 hash）
  mode: 'history',
  // base: '',
  // 记住页面的滚动位置，仅 history 模式适用(浏览器返回，系统会自动记住处理)
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/login', name: 'login', component: login },
    { path: '/index', name: 'index', component: index },
    {
      path: '/profile',
      name: 'profile',
      meta: { requiresAuth: true },
      // require.ensure 是 Webpack 的特殊语法，用来设置 code-split point（代码分块）
      //  require.ensure(['./Foo.vue'], () => {
      //    resolve(require('./Foo.vue'))
      //  })
      // 以下是 AMD 风格的 require
      component: resolve => require(['../pages/profile'], resolve),
    },
    {
      path: '/about',
      name: 'about',
      component: resolve => require(['../pages/about'], resolve),
    },
    { path: '/*', name: 'default', component: index },
  ],
})

const auth = {
  loggedIn() {
    return Boolean(store.state.user.id)
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
