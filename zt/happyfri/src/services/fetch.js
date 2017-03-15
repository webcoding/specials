import { baseUrl } from '../config/env'

const fetch = typeof window !== 'undefined' && window.fetch
const httpReg = /^https?:\/\//

export default async(type = 'GET', url = '', data = {}, method = 'fetch') => {
  type = type.toUpperCase()

  if (!httpReg.test(url)) {
    url = baseUrl + url
  }

  if (type === 'GET') {
    let dataStr = '' // 数据拼接字符串
    Object.keys(data).forEach(key => {
      dataStr += key + '=' + data[key] + '&'
    })

    if (dataStr !== '') {
      dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'))
      url = url + '?' + dataStr
    }
  }

  if (fetch && method === 'fetch') {
    const requestConfig = {
      method: type,
      headers: {
        'Accept': 'application/json',
        // Request header field content-type is not allowed by Access-Control-Allow-Headers in preflight response.
        // 'Content-Type': 'application/json',
      },
      // The value of the 'Access-Control-Allow-Origin' header in the response must not be the wildcard '*' when the request's credentials mode is 'include'. Origin 'http://127.0.0.1:8090' is therefore not allowed access.
      // credentials: 'include',
      mode: 'cors',
      cache: 'force-cache',
    }

    if (type === 'POST') {
      Object.defineProperty(requestConfig, 'body', {
        value: JSON.stringify(data),
      })
    }

    try {
      var response = await fetch(url, requestConfig)
      var responseJson = await response.json()
    } catch (error) {
      throw new Error(error)
    }
    return responseJson
  } else {
    let requestObj
     /* global XMLHttpRequest:false, ActiveXObject:false */
    if (window.XMLHttpRequest) {
      requestObj = new XMLHttpRequest()
    } else {
      requestObj = new ActiveXObject()
    }

    let sendData = ''
    if (type === 'POST') {
      sendData = JSON.stringify(data)
    }

    requestObj.open(type, url, true)
    requestObj.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    requestObj.send(sendData)

    requestObj.onreadystatechange = () => {
      if (requestObj.readyState === 4) {
        if (requestObj.status === 200) {
          let obj = requestObj.response
          if (typeof obj !== 'object') {
            obj = JSON.parse(obj)
          }
          return obj
        } else {
          throw new Error(requestObj)
        }
      }
    }
  }
}
