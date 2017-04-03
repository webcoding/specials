(function (doc, win) {
  var docEl = doc.documentElement
  var cssEl = doc.createElement('style')
  docEl.firstElementChild.appendChild(cssEl)
  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  var setPxPerRem = function () {
    var dpr = 1
    // 把viewport分成10份的rem，html标签的font-size设置为1rem的大小;
    var pxPerRem = docEl.clientWidth * dpr / 10
    cssEl.innerHTML = 'html{font-size:' + pxPerRem + 'px!important;}'
  }
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, setPxPerRem, false)
  doc.addEventListener('DOMContentLoaded', setPxPerRem, false)
})(document, window)
