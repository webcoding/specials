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
    // chunkFilename: '[name].chunk.js' // 给require.ensure用
  },
  resolve: {
    extensions: ['.js', '.json', '.vue', '.css'],
    // 别名，便于引用并提高查找速度
    alias: {
      // 运行时构建比独立构建要轻量30%(适用于单文件输出，无懒加载 template)
      // 独立构建包含模板编译器并支持 template 选项
      // 'vue$': 'vue/dist/vue.common.js',
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      '@api': path.join(__dirname, '../src/services'),
      // 'src': resolve('src'),
      // 'assets': resolve('assets'),
      // 'components': resolve('components'),
    },
  },
  module: {
    // 忽略对已知文件的解析 确定一个模块中没有其它新的依赖 就可以配置这项
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
        // 不要包含绝对路径的资源
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]'),
        },
      },
    ],
  },
  plugins: [
    // [fetch polyfill](https://github.com/github/fetch)
    // new webpack.ProvidePlugin({
    //   'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch',
    // }),
  ],
}

// @see https://webpack.vuefe.cn/configuration/


// 图片引用，输出规则不同于 js、css()
// 开发路径相对于 index.html，设置为 assets/img/xxx
// 编译路径一般相对于 assets/css/xxx.css，设置为 ../img/xxx
//    但如果为html、js中的引用，使用assets/img/xxx
//    或者设置为 cdn 路径，https://cdn.xxx.cn/assets/img/xxx
// NOTE: 专题项目统一配置专题目录路径前缀，如 ...[zt/xxx/]assets...
