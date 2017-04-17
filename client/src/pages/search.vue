<template>
  <div class="page-search">
    <header class="search">
      <div class="s-wrap">
        <div class="s-brand">
          <img src="../assets/img/logo.png" width="100" height="100" alt="">
        </div>
        <a href="/" class="result-logo"><img src="../assets/img/logo.png" alt=""></a>
        <form class="s-form" action="/s">
          <span class="s-kw-wrap">
            <input type="search" class="s-kw">
          </span><span class="s-btn-wrap">
            <input type="submit" value="搜索" class="s-btn">
          </span>
        </form>
      </div>
    </header>
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

// <style lang="scss">
// @import '../styles/var.scss';

// .page-search {
//   .search {
//     padding: 8px;
//   }

// }

// .s-wrap {
//   box-sizing: content-box;
//   position: relative;
//   text-align: left;
//   z-index: 100;
//   .s-brand {
//     display: none;
//     position: absolute;
//     bottom: 40px;
//     width: 100%;
//     height: 180px;
//     text-align: center;
//     z-index: 0;

//     img {
//       position: static;
//       margin: 50px auto 0 auto;
//     }
//   }
//   .result-logo {
//     float: left;
//     width: 80px;
//     height: 40px;
//     text-align: center;
//     img {
//       max-height: 100%;
//     }
//   }
// }

// .s-kw-wrap {
//   position: relative;
//   display: inline-block;

//   .s-kw {
//     box-sizing: content-box;
//     width: 180px;
//     height: 20px;
//     padding: 9px 7px;
//     font: 16px arial;
//     border: 1px solid #b8b8b8;
//     border-bottom: 1px solid #ccc;
//     border-right: 0;
//     vertical-align: top;
//     outline: none;
//     box-shadow: none;
//   }
// }

// .s-btn-wrap {
//   display: inline-block;
//   zoom: 1;
//   vertical-align: top;
//   width: 58px;
//   height: 38px;
//   border: 1px solid #38f;
//   border-bottom: 1px solid #2e7ae5;
//   background-color: #38f;

//   &:hover {
//     border-bottom: 1px solid #2771d9;
//   }
//   .s-btn {
//     cursor: pointer;
//     width: 58px;
//     height: 38px;
//     line-height: 38px;
//     padding: 0;
//     border: 0;
//     background: none;
//     background-color: #38f;
//     font-size: 16px;
//     color: white;
//     box-shadow: none;
//     font-weight: normal;

//     &:hover {
//       height: 38px;
//       background-color: #317ef3;
//       border-bottom: 1px solid #2868c8;
//       box-shadow: 1px 1px 1px #ccc;
//     }
//   }
// }

// .search-full {
//   .s-wrap {
//     width: 300px;
//     // height: 100%;
//     min-height: 293px;
//     // padding-bottom: 370px;
//     margin: 0 auto;
//   }
//   .s-kw {
//     width: 220px;
//   }
//   .s-brand {
//     display: block;
//   }
//   .result-logo {
//     display: none;
//   }
//   .s-form {
//     position: absolute;
//     bottom: 0;
//   }
// }

// </style>
