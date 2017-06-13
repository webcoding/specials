
// const Storage = window.sessionStorage

// 获取当天日期
export function getDate() {
  const date = new Date()
  return date.toJSON().split('T')[0]
  // const mouth = parseInt(date.getMonth()) + 1
  // return date.getFullYear() + '-' + mouth + '-' + date.getDate()
}

export const localStorage = window.localStorage
export class Storage {
  get(item) {
    return JSON.parse(localStorage.getItem(item))
  }
  set(item, obj) {
    localStorage.setItem(item, JSON.stringify(obj))
  }
  remove(item) {
    localStorage.removeItem(item)
  }
  clear(item) {
    localStorage.removeItem(item)
  }
}
