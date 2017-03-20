
// API_BASE

const HOSTS = {
  local: 'localhost:8080',
  test: 'm.devapi.haoshiqi.net',
  dev: 'm.devapi.haoshiqi.net',
  beta: 'm.betaapi.haoshiqi.net',
  prod: 'm.api.haoshiqi.net',
  prodEnv: '',
}

let useProxy = false
let supportSwitchEnv = false
let envHost

const API = {
  // 切换 API 环境
  switchEnv(env) {
    supportSwitchEnv = true
    return (envHost = HOSTS[env])
  },
  runTimeEnvironment() {
    let server = HOSTS.prod
    const host = window.location.host

    // 匹配线上直接返回
    if (host === HOSTS.prodEnv) {
      useProxy = false
      supportSwitchEnv = false
      return server
    }
    // 切换环境
    if (supportSwitchEnv && envHost) {
      return envHost
    }

    if (host.match(/^(localhost|10\.0|127\.0|192\.168|test\.haoshiqi\.net)/i)) {
      server = HOSTS.local
      // server = HOSTS.dev
      // server = HOSTS.beta
      // server = HOSTS.prod
      useProxy = true
    } else if (host.match(/^(jingxuan\.dev\.haoshiqi\.net)/i)) {
      server = HOSTS.dev
    } else if (host.match(/^(jingxuan\.beta\.haoshiqi\.net)/i)) {
      server = HOSTS.beta
    }

    return server
  },
  // API 域名地址
  restApi(url) {
    const protocol = window.location.protocol
    const host = this.runTimeEnvironment()
    let proxyMiddlewarePath = ''
    if (useProxy) {
      proxyMiddlewarePath = '/proxy'
    }
    return `${protocol}//${host}${proxyMiddlewarePath}${url}`
  },
}

export default API
