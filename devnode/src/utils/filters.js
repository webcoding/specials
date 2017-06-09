
import { btoa, atob } from 'Base64'

export function encode(value) {
  return typeof btoa === undefined ? encodeURIComponent : btoa(value)
}

export function decode(value) {
  return typeof atob === undefined ? decodeURIComponent : atob(value)
}

const isBrowser = !(typeof document === 'undefined')
function enUrl(url) {
  var ssl = url.substr(0, 8) === 'https://'
  var preCode = isBrowser && ssl ? 'n' : 'b'
  return encodeURIComponent(preCode + url.substr(7 + Number(ssl)))
}
function deUrl(url) {
  var ssl = url[0] === 'b' ? '' : 's'
  return decodeURIComponent(`http${ssl}://${url.substr(1)}`)
}
export function cEncode(value) {
  return encode(enUrl(value))
}

export function cDecode(value) {
  return deUrl(decode(value))
}

export function rmb(value, decimals, currency) {
  value = parseInt(value, 10)
  if (!isFinite(value) || (!value && value !== 0)) return ''
  currency = currency != null ? currency : '￥'
  decimals = decimals != null ? decimals : 2
  var stringified = (value * 0.01).toFixed(decimals)
  var sign = value < 0 ? '-' : ''
  return sign + currency + stringified
}

export function timeAgo (date) {
  var time = (new Date(date)).getTime() / 1000
  const between = Date.now() / 1000 - Number(time)
  if (between < 3600) {
    return pluralize(~~(between / 60), ' 分钟')
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' 小时')
  } else if (between < 86400 * 30) {
    return pluralize(~~(between / 86400), ' 天')
  } else {
    return date.split(' ')[0]
  }
}

function pluralize (time, label) {
  if (time === 1) {
    return time + label + '前'
  }
  return time + label + '前'
}

export function formatTime (time, format) {
  return new Date(time).toISOString().slice(0, 19)
}

export function throttle(fn, wait, mustRun) {
  let timeout
  let startTime = new Date()
  return function () {
    const context = this
    const args = arguments
    const curTime = new Date()

    clearTimeout(timeout)
    // 如果达到了规定的触发时间间隔，触发 handler
    if (curTime - startTime >= mustRun) {
      fn.apply(context, args)
      startTime = curTime
      // 没达到触发间隔，重新设定定时器
    } else {
      timeout = setTimeout(fn, wait)
    }
  }
}
