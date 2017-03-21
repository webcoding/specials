var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  api: {
    dev: 'http://m.devapi.haoshiqi.net/',
    beta: 'http://m.betaapi.haoshiqi.net/',
    prod: 'http://m.api.haoshiqi.net/',
  },
})
