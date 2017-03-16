/**
 * 收纳测试命令
 * 通过转换，命令执行时，转到对应的路径上
 *
 * npm run lint
 * npm run unit
 * npm run e2e
 * npm run test
 */

// import shell from 'shelljs'

var config = require('../config')
var appDir = config.appDir
var commandKey = process.argv[2] || 'ready'

/* eslint quotes: 0 */
function getTestTask(key) {
  const testTask = {
    "ready": "pwd && ls",
    "unit": "cross-env BABEL_ENV=test karma start test/unit/karma.conf.js --single-run",
    "e2e": "node test/e2e/runner.js",
    // "test": "npm run unit && npm run e2e",
    "lint": "eslint --ext .js,.vue src test/unit/specs test/e2e/specs",
  }
  return testTask[key]
}

const exec = require('child_process').exec

function runNode(key) {
  const task = getTestTask(key)
  // 执行时，改变当前执行目录
  exec(task, {
    cwd: appDir,
  }, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`)
      return
    }
    console.log(`stdout: ${stdout}`)
    if (stderr) {
      console.log(`stderr: ${stderr}`)
    }
  })
}

runNode(commandKey)

// var spawn = require('child_process').spawn
// var free = spawn('free', ['-m'])
// // 捕获标准输出并将其打印到控制台
// free.stdout.on('data', function (data) {
//   console.log('standard output:\n' + data)
// })
// // 捕获标准错误输出并将其打印到控制台
// free.stderr.on('data', function (data) {
//   console.log('standard error output:\n' + data)
// })
// // 注册子进程关闭事件
// free.on('exit', function (code, signal) {
//   console.log('child process eixt ,exit:' + code)
// })


