
export function rmb(value, decimals, currency) {
  value = parseInt(value, 10)
  if (!isFinite(value) || (!value && value !== 0)) return ''
  currency = currency != null ? currency : '￥'
  decimals = decimals != null ? decimals : 2
  var stringified = (value * 0.01).toFixed(decimals)
  var sign = value < 0 ? '-' : ''
  return sign + currency + stringified
}
