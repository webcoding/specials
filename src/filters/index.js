// const digitsRE = /(\d{3})(?=\d)/g

import is from 'is'

export function rmb(value, decimals, currency) {
  value = parseInt(value, 10)
  if (!isFinite(value) || (!value && value !== 0)) return ''
  currency = currency != null ? currency : '￥'
  decimals = decimals != null ? decimals : 2
  var stringified = (value * 0.01).toFixed(decimals)
  var sign = value < 0 ? '-' : ''
  return sign + currency + stringified
}

export function dealPrice(skuInfo, timestamp) {
  // 处理初始价格
  // const obj = JSON.parse(value)
  if (!is.object(skuInfo)) return 0
  // const timestamp = this.timestamp

  // 起售价 price
  // 最底价 lowest_price
  // 开售时间 seller_time

  let curPrice = 0

  // 下架时间 = 保质期截止时间 - 提前下架的时间
  // 剩余时间 = 下架时间 - 当前时间
  const offlineTime = skuInfo.expired_date - skuInfo.offline_before_expired // 下架时间
  const leftTimes = offlineTime - timestamp

  if (leftTimes > 1) {
    // 单位时间变动的价格 =（起售价-最底价）*1s /（保质期截止时间-提前下架的时间-上架售卖时间）
    // 当前价格 = 起售价 - 单位时间变动的价格 * 已上架时间
    const diffPriceTotal = skuInfo.price - skuInfo.lowest_price
    const salledTimes = timestamp - skuInfo.seller_time
    const diffPrice = diffPriceTotal / (offlineTime - skuInfo.seller_time)
    curPrice = skuInfo.price - diffPrice * salledTimes
  } else {
    curPrice = skuInfo.lowest_price
  }

  return curPrice
}
