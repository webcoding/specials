<template>
  <div class="page-zt-type">
    <x-header :header="headerData"></x-header>
    <div class="zt-type-banner">
      <img class="full" src="http://img.haoshiqi.net/merchantadmin/image20170215/mad9f9b506e4ef0411a893c64a4f45d098_388X620" width="100%" alt="">
    </div>
    <div class="zt-type-list clearfix">
      <router-link class="zt-type-item" v-for="item in topicList" :key="item.sku_id" :to="`/#detail?sid=${item.sku_id}`">
        <div class="img"><img class="full" :src="item.productInfo.skuInfo.thumbnail" alt=""></div>
        <div class="text">
          <h4>{{item.productInfo.skuInfo.name}}</h4>
          <p><dfn class="price">{{item.productInfo.skuInfo | dealPrice(timestamp) | rmb}}</dfn><del class="price">{{item.productInfo.skuInfo.market_price | rmb}}</del></p>
        </div>
      </router-link>
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
      timestamp: 0,
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
        channelId: 'h5',
      })
      console.log(res)
      if (res.errno === 0) {
        const data = res.data

        this.timestamp = res.timestamp
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
  width: 100%;
}

.page-zt-type {
  font-size: 12px;
  background: $bg-body;
}

// .zt-type-banner {}

.zt-type-list {
  padding: 4px 4px 0 0;
  background: $bg-body;
  // border-right: 4px solid $bg-body;
}
.zt-type-item {
  float: left;
  // display: inline-block;
  border-bottom: 4px solid $bg-body;
  border-left: 4px solid $bg-body;
  padding: 4px;
  width: 50%;
  background: #fff;
  .text {
    padding: 8px 8px 4px;
  }
  h4 {
    margin-bottom: 10px;
    font-weight: 400;
    font-size: 14px;

    @include text-max-line(2);
  }
  dfn {
    font-size: 14px;
  }
}
</style>
