var path = require('path')
var fs = require('fs')
// see http://vuejs-templates.github.io/webpack for documentation.

// 读取 path 参数，比对 specials 下专题目录，检测参数是否正确
var ztAppName = process.env.npm_config_path || 'webpack'
var ztDir = 'zt/'
var ztDirReg = new RegExp('^' + ztDir)
var buildDist = 'dist/'
ztAppName = ztAppName.replace(ztDirReg, '')

function resolve (dir) {
  // console.log('resolve ', dir, ' ', path.join(__dirname, dir))
  // 使用 __dirname 而不是process.cwd()，好处是，运行命令根目录或子目录都可以运行，但配置前者稳定
  return path.join(__dirname, '../' + dir)
}
// 全相对于项目根目录，即执行命令的目录，也是package.json对应的目录
// 此文件所在目录的上级(../${__dirname})，使用
var ztApp = {
  name: ztAppName,
  app: ztDir + ztAppName,
  dist: buildDist + ztDir + ztAppName,
  ztFolder: resolve(ztDir), // 专题文件夹绝对路径
}

// console.log(ztApp)

// if (!ztPathPreReg.test(appDir)) {
//   appDir = ztDir + appDir
// }
console.log('')
console.log('    build: ', ztApp.app)
console.log('     dist: ', ztApp.dist)
console.log('')

var projectList = fs.readdirSync(ztApp.ztFolder).reduce((entries, dir) => {
  const fullDir = path.join(ztApp.ztFolder, dir)
  const entry = path.join(fullDir, 'src/main.js')
  if (fs.statSync(fullDir).isDirectory() && fs.existsSync(entry)) {
    entries[ztDir + dir] = [entry]
  }

  return entries
}, {})

// 输出所有 zt 项目
// console.log(projectList)
// console.log('')

if (!projectList[ztApp.app]) {
  console.log('错误提示: ', 'dir error! please check input path! ')
  console.log('')
  console.log('')
}

// 都是绝对路径
// console.log('__dirname ', __dirname)          // .../zt/config
// console.log('__filename ', __filename)        // .../zt/config/index.js
// console.log('process.cwd() ', process.cwd())  // .../zt

module.exports = ztApp
