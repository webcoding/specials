
import fetchApi from '@common/services/fetch-api'
import topicskusinfo from './mock/topicskusinfo'
import topicskulist from './mock/topicskulist'

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

// 编译环境使用真实数据
var getTopicInfo
var getTopicList
if (process.env.NODE_ENV !== 'development') {
  console.log('开发环境使用 fake 数据')

  getTopicInfo = () => setPromise(topicskusinfo)
  getTopicList = () => setPromise(topicskulist)
} else {
  console.log('编译环境使用真实数据')

  getTopicInfo = function (params) {
    return fetchApi.get('/product/topicskusinfo', params)
  }
  getTopicList = function (params) {
    return fetchApi.get('/product/topicskulist', params)
  }
  var getAboutMe = function (params) {
    return fetchApi.get('me')
  }
  var getPost = function (id) {
    return fetchApi.get(`articles/${id}`)
  }
  var getPostList = function (params) {
    return fetchApi.get('articles', params)
  }
  var getPostListWithTag = function (tagId) {
    return fetchApi.get('articles', { tag: tagId })
  }
  var getAllTags = function (params) {
    return fetchApi.get('tags')
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
