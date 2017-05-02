
import axios from 'axios'
// import fetchApi from '@common/services/fetch-api'
import mock from './mock'

// const apiPath = '/bookmark'
// var buildUrl = function (url) {
//   return apiPath + url
// }

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

// 创建一个实例，并进行默认设置
var ajax = axios.create({
  baseURL: 'http://api.cloudai.net/bookmark',
  timeout: 1000,
  withCredentials: true,
  headers: {
    'X-Custom-Header': 'foobar',
  },
})

const AUTH_TOKEN = 'sdfjsdlfjqweirjq'

// ajax.fetch = function ajaxFetch(url, params) {
//   const method = params.method || 'get'
//   switch (method) {
//     case 'get':
//     case 'post':
//     case 'delete':
//     case 'put':
//     case 'patch':
//       delete params.method
//       return ajax[method](arguments)
//   }
// }

// 编译环境使用真实数据
var getBookmarks
var getTagsList
var getBookmarksWithTag
var addBookmark
var addTag
var getHelps
if (process.env.NODE_ENV !== 'development') {
  console.log('开发环境使用 fake 数据')

  // 在实例创建之后改变默认值
  ajax.defaults.baseURL = 'localhost'
  ajax.defaults.headers.common['Authorization'] = AUTH_TOKEN

  getBookmarks = () => setPromise(mock.bookmarks)
  getTagsList = () => setPromise(mock.tags)
} else {
  console.log('编译环境使用真实数据')
  // 在实例创建之后改变默认值
  // ajax.defaults.baseURL = ''

  getBookmarks = function (params) {
    return ajax.get('/index', params)
  }
  getTagsList = function (params) {
    return ajax.get('/tag/index', params)
  }
  getBookmarksWithTag = function (tagId) {
    return ajax.get('/index', { tag: tagId })
  }
  addBookmark = function (params) {
    return ajax.post('/index/create', params)
  }
  addTag = function (id) {
    return ajax.post(`/tag/create`)
  }
  // getHelps = function (id) {
  //   return ajax.post(`/help`)
  // }
  getHelps = () => setPromise(mock.helps)
  // var getAboutMe = function (params) {
  //   return ajax.get('me')
  // }
  // var getPost = function (id) {
  //   return ajax.get(`articles/${id}`)
  // }
  // var getPostList = function (params) {
  //   return ajax.get('articles', params)
  // }
  // var getAllTags = function (params) {
  //   return ajax.get('tags')
  // }
}

export {
  getBookmarks,
  getTagsList,
  getBookmarksWithTag,
  addBookmark,
  addTag,
  getHelps,
  // getPostListWithTag,
  // getAllTags,
  // getTopicInfo,
  // getTopicList,
}
