
import api from '@api
import topicList from './tempdata/topicList'

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
if (process.env.NODE_ENV !== 'development') {
  console.log('开发环境使用 fake 数据')

  var getItemDetail = setPromise(topicList)
} else {
  console.log('编译环境使用真实数据')

  var getItemDetail = getTopicList(params) {
    return api.get('/product/topicskusinfo', params)
  }
}

export default {
  getItemDetail,
}
