<template>
  <div class="page-zt-type">
    <x-header :header="headerData"></x-header>
    <div class="zt-type-banner">
      <img class="full" src="http://img.haoshiqi.net/merchantadmin/image20170215/mad9f9b506e4ef0411a893c64a4f45d098_388X620" width="100%" alt="">
    </div>
    <div class="zt-type-list">
      <div class="zt-type-item">
        <div class="img"><img class="full" src="http://img.haoshiqi.net/merchantadmin/image20170105/ma81d817fbf6538c96df4d5c5143445bb9" alt=""></div>
        <div class="text">
          <h4>【包邮】台客鱼家 鱼豆腐干小包装零食休闲食品特色小吃散装1000g 好吃大满足</h4>
          <p><dfn class="price">24.5</dfn><del class="price">45.5</del></p>
        </div>
      </div>
      <div class="zt-type-item">
        <div class="img"><img class="full" src="http://img.haoshiqi.net/merchantadmin/image20170105/ma81d817fbf6538c96df4d5c5143445bb9" alt=""></div>
        <div class="text">
          <h4>【包邮】台客鱼家 鱼豆腐干小包装零食休闲食品特色小吃散装1000g 好吃大满足</h4>
          <p><dfn class="price">24.5</dfn><del class="price">45.5</del></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import XHeader from '@common/components/x-header'
import list from '../components/list'
import * as api from '../store/api'

export default {
  components: {
    list,
    XHeader,
  },
  data() {
    return {
      topicCode: '',
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

  watch: {
    // topicCode: 'fetchData',
  },

  filters: {
    truncate: function (v) {
      var newline = v.indexOf('\n')
      return newline > 0 ? v.slice(0, newline) : v
    },
    formatDate: function (v) {
      return v.replace(/T|Z/g, ' ')
    },
  },

  methods: {
    async fetchData() {
      const res = await api.getTopicList({
        topicCode: '6330f4fa6c1d0b5b7c4158765dedbc6f',
      })
      console.log(res)
      if (res.errno === 0) {
        const data = res.data
        this.topicList = data.skuList
        this.headerData.title = data.title
      } else {
        console.log(res.message)
      }
      // api.getTopicList({
      //   'topic_code': '6330f4fa6c1d0b5b7c4158765dedbc6f',
      // }).then(res => {
      //   debugger
      //   console.log(res)
      //   if (res.success === true) {
      //     // this.topicList = res.data.articles;
      //     // this.totalPage = Math.ceil(res.data.total/limit);
      //   }
      // }).catch(err => {
      //   console.log(err)
      //   /* global alert */
      //   alert('网络错误,请刷新重试')
      // })
    },
  },
}
</script>

<style lang="scss">
@import '../styles/var.scss';

img.full {
  max-width: 100%;
}

.page-zt-type {
  font-size: 12px;
  background: $gray-4;
}

// .zt-type-banner {}

.zt-type-list {
  padding-top: 4px;
  border-right: 4px solid transparent;
}
.zt-type-item {
  float: left;
  // display: inline-block;
  margin-bottom: 4px;
  border-left: 4px solid transparent;
  padding: 4px;
  width: 50%;
  background: #fff;
  .text {
    padding: 8px 8px 4px;
  }
  h4 {
    margin-bottom: 10px;
    height: 54px;
    overflow: hidden;
    text-align: justify;
    font-weight: 400;
    font-size: 12px;
  }
  dfn {
    font-size: 14px;
  }
}
</style>
