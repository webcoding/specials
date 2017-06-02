// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store/'
import router from './routes/'
import App from './App'
import ajaxApi from './store/api'
import './config/analysis' // 统计信息
// import currency from './filters/currency'
// import '@common/init'
// import '@common/rem'

Vue.prototype.$ajax = ajaxApi

import * as filters from './filters'
// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

/**
 * 错误统计 https://docs.sentry.io/clients/javascript/integrations/vue/
 * Vue.config.errorHandler https://cn.vuejs.org/v2/api/#errorHandler
 */
import Raven from 'raven-js'
import RavenVue from 'raven-js/plugins/vue'
const debug = false
if (process.env.NODE_ENV === 'production' || debug) {
  Raven
    .config('https://9ea85fb7e2a34fe6b74b4fb8c9e25435@sentry.io/169395')
    .addPlugin(RavenVue, Vue)
    .install()
}

Vue.mixin({
  goBack() {
    window.history.go(-1)
  },
})

// Vue.config.productionTip = false

/* eslint-disable no-new */
// const app = new Vue(Vue.util.extend({
//   routes,
//   store,
// }, App))

// app.$mount('#app')

// 创建并挂载到 #app (会替换 #app)
// 提供的元素只能作为挂载点。所有的挂载元素会被 Vue 生成的 DOM 替换。
// 因此不推荐挂载root实例到 <html> 或者 <body> 上。
// FIXME: App.vue 放在 main.js同级，为什么没有替换的效果，这里使用 transition 时有 bug
new Vue({
  router, // 这里命名 的 key 必须是 router
  store,
  el: '#app',
  render: (h) => h(App),
  // el: '#app',
  // template: '<App/>',
  // components: { App },
})

// var topScrolled = false
// window.addEventListener('scroll', function () {
//   if (window.pageYOffset > 165 && !topScrolled) {
//     topScrolled = true
//     document.getElementById('mobile-bar').classList.remove('top')
//   } else if (window.pageYOffset <= 165 && topScrolled) {
//     topScrolled = false
//     document.getElementById('mobile-bar').classList.add('top')
//   }
// })
