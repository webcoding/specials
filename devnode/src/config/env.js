/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 *
 */
let baseUrl
let apiBaseUrl
let routerMode
const imgBaseUrl = 'https://static.devnode.cn'

// debugger
var devHost = window.location.origin
if (process.env.NODE_ENV === 'development') {
  baseUrl = `${devHost}/#`
  apiBaseUrl = `${devHost}/proxy`
  // apiBaseUrl = 'http://api.devnode.cn'
  routerMode = 'hash'
} else {
  baseUrl = 'https://devnode.cn'
  apiBaseUrl = 'https://api.devnode.cn'
  routerMode = 'history'
}

export default {
  apiBaseUrl,
  baseUrl,
  routerMode,
  imgBaseUrl,
}
