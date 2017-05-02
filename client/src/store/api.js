
import axios from 'axios'
// import fetchApi from '@common/services/fetch-api'
import topicskusinfo from './mock/topicskusinfo'
import topicskulist from './mock/topicskulist'

// 添加请求拦截器
axios.interceptors.request.use((config) => {
  // 在发送请求之前做某事
  return config
}, function (error) {
  // 请求错误时做些事
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use((response) => {
  // 对响应数据做些事
  return response
}, function (error) {
  // 请求错误时做些事
  return Promise.reject(error)
})

// // 发送一个 get 请求
// axios.get('package.json')
//     .then((res) => {
//       console.log(res)
//     })
//     .catch((err) => {
//       console.log(err)
//     })

/**
 * 创建临时数据
 */
const setPromise = data => {
  return new Promise((resolve, reject) => {
    resolve(data)
  })
}

// let modal = {
//   getTopicList(params) {
//     return api.get('/product/topicskusinfo', params)
//   },
// }

var ajax
// 编译环境使用真实数据
var getTopicInfo
var getTopicList
if (process.env.NODE_ENV !== 'development') {
  console.log('开发环境使用 fake 数据')

  ajax = axios.create({
    baseURL: 'http://api.cloudai.net/bookmark',
    timeout: 1000,
    headers: {
      'X-Custom-Header': 'foobar',
    },
  })

  getTopicInfo = () => setPromise(topicskusinfo)
  getTopicList = () => setPromise(topicskulist)
} else {
  console.log('编译环境使用真实数据')
  ajax = axios.create({
    baseURL: 'http://api.cloudai.net/bookmark',
    timeout: 1000,
    withCredentials: true,
    headers: {
      'X-Custom-Header': 'foobar',
    },
  })

  getTopicInfo = function (params) {
    return ajax.get('/product/topicskusinfo', params)
  }
  getTopicList = function (params) {
    return ajax.get('/product/topicskulist', params)
  }
  var getAboutMe = function (params) {
    return ajax.get('me')
  }
  var getPost = function (id) {
    return ajax.get(`articles/${id}`)
  }
  var getPostList = function (params) {
    return ajax.get('articles', params)
  }
  var getPostListWithTag = function (tagId) {
    return ajax.get('articles', { tag: tagId })
  }
  var getAllTags = function (params) {
    return ajax.get('tags')
  }
}

export {
  getPost,
  getAboutMe,
  getPostList,
  getPostListWithTag,
  getAllTags,
  getTopicInfo,
  getTopicList,
}
