import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello'
import Marker from '../pages/Marker'

Vue.use(Router)

console.log(222)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Marker
    },
    {
      path: '*',
      name: '404',
      component: Hello
    }
  ]
})
