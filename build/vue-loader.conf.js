var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'
var px2rem = require('postcss-plugin-px2rem')

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction,
  }),
  // 直接将 px 值编译出处为 rem
  // 以 iphone6 414px 为基准宽度
  postcss: [px2rem({
    rootValue: 16,
    // unitPrecision: 5,
    // propWhiteList: [],
    // propBlackList: [],
    // selectorBlackList: [],
    // ignoreIdentifier: false,
    // replace: true,
    // mediaQuery: false,
    minPixelValue: 0,
  })],
}
