<template>
  <div class="page-index">
    <div class="sidebar">
      <ul class="main-menu">
        <li>partials main_menu  sidebar</li>
      </ul>
    </div>

    <div id="hero">
      <div class="inner">
        <div class="left">
          <img class="hero-logo" src="../assets/img/logo.png">
        </div><div class="right">
          <h2 class="vue">Vue.js</h2>
          <h1>渐进式<br>JavaScript 框架</h1>
          <p>
            <a class="button" href="/guide">起步</a>
            <a class="button white" href="https://github.com/vuejs/vue" target="_blank">GITHUB</a>
          </p>
        </div>
      </div>
    </div>

    <div id="highlights">
      <div class="inner">
        <div class="point">
          <h2>易用</h2>
          <p>已经会了HTML,CSS,JavaScript？即刻阅读指南开始构建应用！</p>
        </div>

        <div class="point">
          <h2>灵活</h2>
          <p>简单小巧的核心，渐进式技术栈，足以应付任何规模的应用。</p>
        </div>

        <div class="point">
          <h2>性能</h2>
          <p>
            17kb min+gzip 运行大小<br>
            超快虚拟 DOM <br>
            最省心的优化
          </p>
        </div>
      </div>
    </div>

    <div id="sponsors">
      <div class="inner">
        <h3>赞助者</h3>
        <p>partials/sponsors</p>
        <br>
        <a class="become-sponsor button white" href="/support-vuejs">成为赞助者</a>
      </div>
    </div>

    <div id="footer">
      遵循 <a href="https://opensource.org/licenses/MIT" target="_blank">MIT 开源协议</a><br>
      Copyright &copy; 2014- Evan You
    </div>
  </div>
</template>

<script>

import XHeader from '@common/components/x-header'
import device from '@common/utils/device'
import list from '../components/list'
import * as api from '../store/api'

export default {
  components: {
    list,
    XHeader,
  },
  data() {
    return {
      year: new Date().getFullYear(),
      timestamp: 0,
      ztIntro: '',
      topicList: [],
      headerData: {
        title: '数据生成标题',
        left: [
          {
            text: '返回',
            link: '/',
          },
        ],
      },
    }
  },
  created() {
    this.fetchData()
  },
  computed: { },

  beforeRouteLeave (to, from, next) {
    // if (device.isHsq) {
    //   console.log('拦截跳转，only jump app')
    //   return next(false)
    // }
    next()
  },

  filters: {
    // getLink(url) {
    //   // 这里设置 to，以/开头了，这是有问题的
    //   return !device.isInHsq ? 'hsq://detail?params' : url
    // },
    truncate: function (v) {
      var newline = v.indexOf('\n')
      return newline > 0 ? v.slice(0, newline) : v
    },
    formatDate: function (v) {
      return v.replace(/T|Z/g, ' ')
    },
  },

  methods: {
    handleClick(e) {
      console.log(e)
      e.preventDefault()
      debugger
      // 这里设置 to，以/开头了，这是有问题的
      return device.isHsq ? this.jumpApp('hsq://detail?sid=xxx') : this.$router.push(e.currentTarget.getAttribute('href'))
    },
    jumpApp(url) {
      console.log('jump app: ', url)
    },
    fetchData() {
      this.fetchTopicInfo()
      this.fetchTopicList()
    },
    async fetchTopicInfo() {
      const res = await api.getTopicInfo({
        topicCode: '5728f6513b61fccef8e5742c2ec3b65f',
        channel: 'h5',
      })
      console.log(res)
      if (res.errno === 0) {
        const data = res.data

        // this.timestamp = res.timestamp
        // this.topicList = data.skuList
        this.ztIntro = decodeURIComponent(data.detail) || ''
        this.headerData.title = data.title
      } else {
        console.log(res.message)
      }
    },
    async fetchTopicList() {
      const res = await api.getTopicList({
        topicCode: '5728f6513b61fccef8e5742c2ec3b65f',
        channel: 'h5',
        needPagination: 1,
        pageNum: 1,
        pageLimit: 20,
      })
      console.log(res)
      if (res.errno === 0) {
        const data = res.data

        this.timestamp = res.timestamp
        this.topicList = data.list
      } else {
        console.log(res.message)
      }
    },
  },
}
</script>

<style lang="stylus">
// @import "../styles/index.styl";

</style>
