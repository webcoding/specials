var path = require('path')
var fs = require('fs')
// see http://vuejs-templates.github.io/webpack for documentation.

// var appDir
// appDir = 'abc'
// appDir = 'single'  // 单页专题
// appDir = 'multi'   // 多页专题
// appDir = 'login'   // 登录授权
// appDir = 'notepad'
// appDir = 'todomvc'
// appDir = 'shopping-cart'

// 读取 path 参数，比对 specials 下专题目录，检测参数是否正确
var ztAppName = process.env.npm_config_path || 'zt/notepad'
var ztDir = 'zt/'
var ztDirReg = new RegExp('^' + ztDir)
var buildDist = 'dist/'
ztAppName = ztAppName.replace(ztDirReg, '')

// 全相对于项目根目录，即执行命令的目录，也是package.json对应的目录
// 即process.cwd()，此文件所在目录的上级(../${__dirname})
var ztApp = {
  name: ztAppName,
  app: ztDir + ztAppName,
  dist: buildDist + ztDir + ztAppName,
  ztFolder: process.cwd() + '/' + ztDir, // 专题文件夹绝对路径
}

// if (!ztPathPreReg.test(appDir)) {
//   appDir = ztDir + appDir
// }
console.log('    build: ', ztApp.app)
console.log('     dist: ', ztApp.dist)
console.log('      ENV: ', process.env.NODE_ENV)
console.log('')

var projectList = fs.readdirSync(ztApp.ztFolder).reduce((entries, dir) => {
  const fullDir = path.join(ztApp.ztFolder, dir)
  const entry = path.join(fullDir, 'src/main.js')
  if (fs.statSync(fullDir).isDirectory() && fs.existsSync(entry)) {
    entries[ztDir + dir] = [entry]
  }

  return entries
}, {})

console.log(projectList)

if (!projectList[ztApp.app]) {
  console.log('')
  console.log('错误提示: ', 'dir error! please check input path! ')
  console.log('')
  console.log('')
}

// console.log('__dirname ', __dirname)          // zt/config
// console.log('__filename ', __filename)        // zt/config/index.js
// console.log('process.cwd() ', process.cwd())  // zt

module.exports = {
  // target: 'web',
  appDir: ztApp.app,
  index: 'index.html', // 引用文件，相对于 assetsRoot
  template: ztApp.app + '/index.html',
  build: {
    env: require('./prod.env'),
    // 无需编译的静态资源目录，会拷贝到 dist/assets 中
    staticPath: path.resolve(process.cwd(), ztApp.app + '/src/assets'),
    // 编译输出，引用资源的注入
    index: path.resolve(process.cwd(), ztApp.dist + '/index.html'),
    // 所有输出文件的目标路径，必须绝对路径
    assetsRoot: path.resolve(process.cwd(), ztApp.dist),
    // 输出解析文件的目录，url 相对于 HTML 页面
    assetsSubDirectory: 'assets/',
    assetsPublicPath: '', // 不使用 cdn，设为空
    // assetsPublicPath: 'https://cdn.xxx.cn/' + ztApp.app, // 这里可以设置 cdn
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
