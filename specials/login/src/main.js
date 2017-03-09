// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/'
import router from './router/'


// 错误统计
import Raven from 'raven-js'
import RavenVue from 'raven-js/plugins/vue'
Raven
  .config('https://37695669ab8e4d0688819f320de4a73a@sentry.io/144523')
  .addPlugin(RavenVue, Vue)
  .install()


// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
