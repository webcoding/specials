
// const Storage = window.sessionStorage
export const Storage = window.localStorage

// 获取当天日期
export function getDate() {
  const date = new Date()
  const mouth = parseInt(date.getMonth()) + 1
  return date.getFullYear() + '-' + mouth + '-' + date.getDate()
}
export function LocalEvent(item) {
  this.get = function () {
    return JSON.parse(Storage.getItem(item))
  }
  this.set = function (obj) {
    Storage.setItem(item, JSON.stringify(obj))
  }
  this.clear = function () {
    Storage.removeItem(item)
  }
}
