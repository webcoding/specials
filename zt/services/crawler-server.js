'use strict'
const http = require('http')
const url = require('url')
const util = require('util')
const superagent = require('superagent')
const cheerio = require('cheerio')

const onRequest = (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*'})
  let keyWord = encodeURI(url.parse(req.url, true).query.query)
  console.log(keyWord)
  if (keyWord) {
    let resultArr = []
    var url = 'http://weixin.sogou.com/weixin?type=1&query=' + keyWord + '&ie=utf8&_sug_=n&_sug_type_='
    superagent.get(url).end((err, response) => {
      if (err) console.log(err)
      let $ = cheerio.load(response.text)

      $('.mt7 .wx-rb').each((index, item) => {
        let resultObj = {
          title: '',
          wxNum: '',
          link: '',
          pic: '',
        }

        resultObj.title = $(item).find('h3').text()
        resultObj.wxNum = $(item).find('label').text()
        resultObj.link = $(item).attr('href')
        resultObj.pic = $(item).find('img').attr('src')
        resultArr.push(resultObj)
      })

      res.write(JSON.stringify(resultArr))
      res.end()
    })
  }
}

http.createServer(onRequest).listen(process.env.PORT || 8011)
console.log('Server Start!')
