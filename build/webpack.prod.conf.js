var path = require('path')
var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
var SWPrecachePlugin = require('sw-precache-webpack-plugin')
var QiniuPlugin = require('qiniu-webpack-plugin')
var qnConfig = config.qnConfig

var env = process.env.NODE_ENV === 'testing'
  ? require('../config/test.env')
  : config.build.env

var webpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true,
    }),
  },
  devtool: config.build.productionSourceMap ? '#source-map' : false,
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js'),
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env,
    }),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        // false 是去掉注释
        comments: false,
      },
      compress: {
        // 忽略警告,要不然会有一大堆的黄色字体出现...
        warnings: false,
      },
      mangle: {
        // 排除不想要压缩的对象名称
        // except: ['$super', '$', 'exports', 'require', 'module', '_']
      },
      sourceMap: config.build.productionSourceMap,
    }),
    // extract css into its own file
    new ExtractTextPlugin({
      filename: utils.assetsPath('css/[name].[contenthash].css'),
    }),
    // // this is needed in webpack 2 for minifying CSS
    // new webpack.LoaderOptionsPlugin({
    //   // debug: true
    //   minimize: true
    // }),


    // /**
    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true,
      },
    }),
    //  */

    // generate dist index.html with correct asset hash for caching.
    // you can customize output by editing /index.html
    // see https://github.com/ampedandwired/html-webpack-plugin
    // 多个 HTML 就配置多个 HtmlWebpackPlugin
    new HtmlWebpackPlugin({
      filename: process.env.NODE_ENV === 'testing'
        ? config.index
        : config.build.index,    // 生成的文件
      template: config.template, // 相对于当前这个配置文件的
      inject: true,
      minify: {
        removeComments: true,       // 删除 html 中注释
        collapseWhitespace: true,   // 删除空白行与换行符
        removeAttributeQuotes: true, // 去除属性引用
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      // 必须通过 CommonsChunkPlugin 的依赖关系自动添加 js，css 等
      chunksSortMode: 'dependency',
    }),
    // split vendor js into its own file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      },
    }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor'],
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: config.build.staticPath,
        to: config.build.assetsSubDirectory,
        ignore: ['.*'],
      },
    ]),

    new QiniuPlugin({
      prefix: qnConfig.prefix,
      ACCESS_KEY: qnConfig.ak,
      SECRET_KEY: qnConfig.sk,
      bucket: qnConfig.bucket,
      path: qnConfig.path,
    }),
  ],
})

if (config.build.productionGzip) {
  var CompressionWebpackPlugin = require('compression-webpack-plugin')

  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8,
    })
  )
}

if (config.build.bundleAnalyzerReport) {
  var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

if (process.env.NODE_ENV === 'production') {
  webpackConfig.plugins.push(
    // auto generate service worker
    new SWPrecachePlugin({
      // https://googlechrome.github.io/sw-toolbox/api.html
      cacheId: 'vue-devnode',
      filename: 'service-worker.js',
      minify: true,
      dontCacheBustUrlsMatching: /./,
      staticFileGlobsIgnorePatterns: [/\.map$/, /\.json$/],
      runtimeCaching: [
        {
          urlPattern: '/(.*)',
          handler: 'networkFirst',
        },
        {
          urlPattern: '/(.*)',
          // urlPattern: '/bookmark/tag?page=1&tag=SVG',
          handler: 'networkFirst',
          options: {
            origin: 'https://api.devnode.cn',
          },
        },
        // {
        //   urlPattern: /\/(top|new|show|ask|jobs)/,
        //   handler: 'networkFirst',
        // },
        // {
        //   urlPattern: '/item/:id',
        //   handler: 'networkFirst',
        // },
        // {
        //   urlPattern: '/user/:id',
        //   handler: 'networkFirst',
        // },
      ],
    })
  )
}

module.exports = webpackConfig
