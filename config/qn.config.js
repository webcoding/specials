'use strict'

// AccessKey/SecretKey
var ASKey = {
  // 2015-01-12
  'cloudai': {
    ak: 'iEjLq_SN2PZqV8SI32e8BH2ZrsfnYbi2QlLn5SDF',
    sk: 'PzunIV1w8U9cD0QGDQQRoII_gcl-CbPMQpicQSK7',
  },
  // 2014-09-11
  'new': {
    ak: '',
    sk: '',
  },
  // 2013-08-01
  'old': {
    ak: '',
    sk: '',
  },
}

var curASKey = ASKey['cloudai']

var qnConfig = {
  // cdn资源合一
  cdn: {
    prefix: '',
    ak: curASKey.ak,
    sk: curASKey.sk,
    bucket: 'static-cloudai-net', // your bucket name
    domain: 'https://static.cloudai.net/',  // //xxxx.xxx.xx.glb.clouddn.com
    path: '', // 路径: [hash] 或 zt/lie
  },
  zt: {
    prefix: '',
    ak: curASKey.ak,
    sk: curASKey.sk,
    bucket: 'static-cloudai-net',
    domain: 'https://static.cloudai.net/',
    path: '', // 路径: [hash] 或 zt/lie
  },
  dev: {
    prefix: '',
    ak: curASKey.ak,
    sk: curASKey.sk,
    // bucket: 'static-cloudai-net',
    // domain: 'https://static.cloudai.net/',
    bucket: 'static-devnode-cn',
    domain: 'https://static.devnode.cn/',
    path: '', // 路径: [hash] 或 zt/lie
  },
}

module.exports = qnConfig
