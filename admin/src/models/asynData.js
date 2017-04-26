import fetch from './fetch'
import * as item from './tempdata/itemDetail'

/**
 * 创建临时数据
 */
const setPromise = data => {
  return new Promise((resolve, reject) => {
    resolve(data)
  })
}

var getItemDetail
// 编译环境使用真实数据
if (process.env.NODE_ENV === 'development') {
  console.log('开发环境使用 fake 数据')
  getItemDetail = () => setPromise(item.itemDetail)
} else {
  console.log('编译环境使用真实数据')
  getItemDetail = () => fetch('GET', '/happyfriday', {
    'active_topic_id': '4',
  })
}

export {
  getItemDetail,
}

