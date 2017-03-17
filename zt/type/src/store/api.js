
import api from '@api'
import topicList from './mock/topicList'

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
var getTopicList
if (process.env.NODE_ENV === 'development') {
  console.log('开发环境使用 fake 数据')

  getTopicList = () => setPromise(topicList)
} else {
  console.log('编译环境使用真实数据')

  getTopicList = function (params) {
    return api.get('/product/topicskusinfo', params)
  }
}

export {
  getTopicList,
}
