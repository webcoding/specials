var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')

var appDir = config.appDir

function resolve (dir) {
  console.log(dir, ': ', path.join(__dirname, '../' + appDir + '/', dir))
  return path.join(__dirname, '../' + appDir + '/', dir)
}


module.exports = {
  entry: {
    app: `./${appDir}/src/main.js`,
  },
  output: {
    // 所有输出文件的目标路径，必须是绝对路径（使用 node.js 的 path 模块），如 path.resolve(__dirname, "dist"),
    path: config.build.assetsRoot,
    filename: '[name].[hash].js',
    // 输出解析文件的目录，url 相对于 HTML 页面，如 'assets/' 或者 'https://cdn.com/assets/'
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath // 这里可以换七牛 cdn
      : config.dev.assetsPublicPath,
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      // '@': resolve(appDir + '/src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        exclude: /node_modules/,
        // options: {
        //   // 检测 vue 语法，要使用 vue 规则，不能使用 airbnb
        //   formatter: require('eslint-config-vue')
        // }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig,
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: [resolve('src'), resolve('test')],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]'),
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]'),
        },
      },
    ],
  },
}

// @see https://webpack.vuefe.cn/configuration/
//
