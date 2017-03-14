var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')

var appDir = config.appDir

function resolve (dir) {
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
    extensions: ['.js', '.json', '.vue', '.css'],
    alias: {
      // 运行时构建比独立构建要轻量30%(适用于单文件输出，无懒加载 template)
      // 独立构建包含模板编译器并支持 template 选项
      // 'vue$': 'vue/dist/vue.common.js',
      'vue$': 'vue/dist/vue.esm.js',
      'src': resolve('src'),
      'assets': resolve('assets'),
      'components': resolve('components'),
      // '@': resolve(appDir + '/src'),
    },
  },
  module: {
    // noParse: /es6-promise\.js$/, // avoid webpack shimming process
    rules: [
      {
        test: /\.(jsx?|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        exclude: /node_modules/,
        // options: {
        //   // 这里要使用 vue 的格式规范，不写就自动使用 .eslintrc 的配置
        //   formatter: require('eslint-friendly-formatter')
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
