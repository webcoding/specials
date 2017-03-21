<template>
  <div class="page-zt-type">
    <x-header :header="headerData"></x-header>
    <div class="zt-type-intro" v-html="ztIntro"></div>
    <div class="zt-type-list clearfix">
      <router-link class="zt-type-item" v-for="item in topicList" :key="item.sku_id" :to="`/#detail?sid=${item.sku_id}`">
        <div class="img"><img class="full" :src="item.sku_pic" alt=""></div>
        <div class="text">
          <h4>{{item.sku_name}}</h4>
          <p><dfn class="price">{{item | dealPrice(timestamp) | rmb}}</dfn><del class="price">{{item.market_price | rmb}}</del></p>
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
    this.fetchTopicInfo()
    this.fetchTopicList()
  },
  computed: { },

  watch: {
    // topicCode: 'fetchData',
  },

  filters: {
    decodeURIComponent(v) {
      debugger
      return decodeURIComponent(v)
    },
    truncate: function (v) {
      var newline = v.indexOf('\n')
      return newline > 0 ? v.slice(0, newline) : v
    },
    formatDate: function (v) {
      return v.replace(/T|Z/g, ' ')
    },
  },

  methods: {
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

<style lang="scss">
@import '../styles/var.scss';

img.full {
  width: 100%;
}

.page-zt-type {
  font-size: 12px;
  background: $bg-body;
}

.zt-type-intro {
  img {
    width: 100%;
  }
}

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
  .img {
    width: 174px;
    height: 174px;
    overflow: hidden;
  }
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
