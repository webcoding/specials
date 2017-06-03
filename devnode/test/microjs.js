
// microjs 小程序获取页面内容
// http://123.paomianba.com/

;(function () {
  var aa = document.querySelectorAll('#test li a')
  var bb = []
  aa.forEach(function (item, index) {
    var temp = {
      title: item.innerHTML,
      url: item.href,
      logo: 'z1-1.svg',
    }
    bb.push(temp)
    console.log(item.innerHTML)
  })
})()

;(function () {
  var aa = document.querySelectorAll('.box')
  var bb = []
  aa.forEach(function (item, index) {
    var $a = item.querySelector('.hd')
    var $b = item.querySelectorAll('a')
    var list = []
    $b.forEach(function (link) {
      var badge = []
      var tb = link.nextSibling
      while (tb) {
        badge.push(tb.innerHTML)
        tb = tb.nextSibling
      }
      list.push({
        title: link.innerHTML,
        url: link.href,
        badge: badge,
      })
    })
    bb.push({
      tag: $a.innerText,
      list: list,
    })
  })
  JSON.stringify(bb)
})()
