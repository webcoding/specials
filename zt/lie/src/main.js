// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Wilddog from 'wilddog'
import WildVue from 'wildvue'
import router from './router'

import App from './App'
import './rem'
import '@common/init'

import Raven from 'raven-js'
import RavenVue from 'raven-js/plugins/vue'

const debug = false

if (process.env.NODE_ENV === 'production' || debug) {
  Raven
    .config('https://37695669ab8e4d0688819f320de4a73a@sentry.io/144523')
    .addPlugin(RavenVue, Vue)
    .install()
}

Vue.use(Wilddog)
Vue.use(WildVue)

Vue.config.productionTip = false

// 野狗接口，本地 OK，远程不 OK 的问题
// https://ns.wilddog.com/v1/lookup?appId=xxx
// 接口报 10403 Request forbidden. 错误，是由于“安全域名”开启导致的
// 这里需要赠设 *.wilddogio.com 到安全域名白名单
var wilddogApp = Wilddog.initializeApp({
  syncURL: 'https://testlie.wilddogio.com/',
})
var sync = wilddogApp.sync()
const ref = sync.ref('/lie')

const vm = new Vue({
  router,
  // store,
  // el: '#app',
  template: '<App/>',
  components: { App },
  wilddog: {
    ref: ref,
    userInfo: {
      source: sync.ref('/lie'),
      // 可选，作为对象绑定
      asObject: true,
      // 可选，提供一个回调
      cancelCallback: function () {},
    },
  },
}).$mount('#app')

router.beforeEach((to, from, next) => {
  if (from.name === 'edit' && to.name === 'result') {
    vm.fromEdit = true
  } if (from.name === 'answer' && to.name === 'result') {
    vm.fromAnswer = true
  }
  next()
})
