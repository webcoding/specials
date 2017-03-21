var path = require('path')
// see http://vuejs-templates.github.io/webpack for documentation.
var devEnv = require('./dev.env')

var project = require('./project')

function resolve (dir) {
  return path.join(__dirname, '../' + dir)
}

module.exports = {
  // target: 'web',
  appDir: project.app,
  index: 'index.html', // 引用文件，相对于 assetsRoot
  template: project.app + '/index.html',
  build: {
    env: require('./prod.env'),
    // 无需编译的静态资源目录，会拷贝到 dist/assets 中
    staticPath: resolve(project.app + '/src/assets'),
    // 编译输出，引用资源的注入
    index: resolve(project.dist + '/index.html'),
    // 所有输出文件的目标路径，必须绝对路径
    assetsRoot: resolve(project.dist),
    // 输出解析文件的目录，url 相对于 HTML 页面
    assetsSubDirectory: 'assets/',
    assetsPublicPath: '', // 不使用 cdn，设为空
    // assetsPublicPath: 'https://cdn.xxx.cn/' + project.app, // 这里可以设置 cdn
    productionSourceMap: true,
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
    env: devEnv,
    port: 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'assets',
    assetsPublicPath: '',
    // https://vuejs-templates.github.io/webpack/proxy.html
    // https://github.com/chimurai/http-proxy-middleware
    proxyTable: {
      // proxy all requests starting with /api to jsonplaceholder
      '/proxy': {
        target: devEnv.api['beta'],
        changeOrigin: true,
        // true/false, if you want to verify the SSL Certs
        // secure: false,
        pathRewrite: {
          '^/proxy': '',
        },
      },
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false,
  },
}
