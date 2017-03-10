// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

var appDir
appDir = 'abc'

// 这里项目名不能用 test1 不然，会自动引发 eslint 检查，哪里的问题
appDir = 'test1'
// appDir = 'single'  // 单页专题
appDir = 'multi'   // 多页专题
appDir = 'login'   // 登录授权

var projectPath = '../' + appDir // 相对于 __filename 即，此文件路径

console.log('__dirname ', __dirname)          // specials/config
console.log('__filename ', __filename)        // specials/config/index.js
console.log('process.cwd() ', process.cwd())  // specials

// var distPath = './' + appDir + '/dist'

module.exports = {
  target: 'web',
  appDir: appDir,
  index: 'index.html', // 引用文件，相对于 assetsRoot
  template: appDir + '/index.html',
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, projectPath + '/dist/index.html'),
    // 无需编译的静态资源目录，会拷贝到 assets 中
    staticPath: path.resolve(__dirname, projectPath + '/src/assets'),
    // 所有输出文件的目标路径，必须绝对路径
    assetsRoot: path.resolve(__dirname, projectPath + '/dist'),
    // 输出解析文件的目录，url 相对于 HTML 页面
    assetsSubDirectory: 'assets',
    assetsPublicPath: '',
    productionSourceMap: false,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report,
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'assets',
    assetsPublicPath: '',
    proxyTable: {},
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false,
  },
}
