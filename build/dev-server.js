require('./check-versions')()

var config = require('../config')

// console.log(process)
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
// var favicon = require('serve-favicon')
// var session = require('cookie-session')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = process.env.NODE_ENV === 'testing'
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
app.disable('x-powered-by')
// var expiryDate = new Date(Date.now() + 60 * 60 * 1000 * 24 * 10) // 1 hour
// app.use(session({
//   name: 'session',
//   keys: [''],
//   cookie: {
//     secure: true,
//     httpOnly: true,
//     domain: 'http://devnode.cn',
//     path: '/',
//     expires: expiryDate,
//   },
// })
// )
// console.log('webpackConfig:')
// console.log(JSON.stringify(webpackConfig, null, 2))
// console.log(JSON.stringify({ a: 1, b: 2 }, null, 2))
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true,
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {},
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
// function splitCookie(cookie) {
//   if (!cookie) return ''
//   var cookieItems = cookie[0].split(';')
//   var newCookie = ''
//   for (var i = 0; i < cookieItems.length; ++i) {
//     if (newCookie.length > 0) newCookie += ';'
//     if (cookieItems[i].indexOf('Path=') >= 0) {
//       newCookie += 'Path=/'
//     } else {
//       newCookie += cookieItems[i]
//     }
//   }
//   return newCookie
// }
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
console.log('staticPath: ', staticPath)
// app.use(favicon(path.join(__dirname, 'static', 'favicon.ico')))
app.use(staticPath, express.static('./static'))
// app.all('*', function (req, res, next) {
//   // res.header('Access-Control-Allow-Origin', req.headers.origin) // 需要显示设置来源
//   // res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
//   // res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
//   // res.header('Access-Control-Allow-Credentials', true) // 带cookies
//   // res.header('X-Powered-By', ' 3.2.1')
//   // res.header('Content-Type', 'application/json;charset=utf-8')
//   next()
// })
var uri = 'http://localhost:' + port

devMiddleware.waitUntilValid(function () {
  console.log('> Listening at ' + uri + '\n')
})

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }

  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
})
