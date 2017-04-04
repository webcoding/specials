'use strict'

// AccessKey/SecretKey
var ASKey = {
  // 2015-01-12
  'cloudai': {
    ak: '',
    sk: '',
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
  zt: {
    prefix: 'zt/',
    ak: curASKey.ak,
    sk: curASKey.sk,
    bucket: 'static-cloudai-net', // your bucket name
    domain: 'https://static.cloudai.net/',  // //xxxx.xxx.xx.glb.clouddn.com
    path: '', // [hash]
  },
  // cdn资源合一
  cdn: {
    prefix: '',
    ak: curASKey.ak,
    sk: curASKey.sk,
    bucket: 'xxx', // your bucket name
    domain: 'https://img.xxx.com/',  // //xxxx.xxx.xx.glb.clouddn.com
    path: '', // [hash]
  },
}

module.exports = qnConfig
