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
const imgBaseUrl = 'https://static.cloudai.net'

// debugger
if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://127.0.0.1:8080'
  apiBaseUrl = 'http://api.cloudai.net'
  routerMode = 'hash'
} else {
  baseUrl = 'http://bookmarks.cloudai.net'
  apiBaseUrl = 'http://api.cloudai.net'
  routerMode = 'hash'
}

export default {
  apiBaseUrl,
  baseUrl,
  routerMode,
  imgBaseUrl,
}
