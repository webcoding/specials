
import { btoa, atob } from 'Base64'

export function encode(value) {
  return typeof btoa === undefined ? encodeURIComponent : btoa(value)
}

export function decode(value) {
  return typeof atob === undefined ? decodeURIComponent : atob(value)
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
