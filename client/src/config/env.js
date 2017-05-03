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
if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://localhost:8080#'
  apiBaseUrl = 'http://localhost:8080/proxy'
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
