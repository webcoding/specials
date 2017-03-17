<template>
  <div class="page-zt-type">
    <x-header :header="headerData"></x-header>
    <div class="zt-type-banner">
      <img class="full" src="http://img.haoshiqi.net/merchantadmin/image20170215/mad9f9b506e4ef0411a893c64a4f45d098_388X620" width="100%" alt="">
    </div>
    <div class="zt-type-list">
      <div class="zt-typeitem">
        <div class="img"><span>img</span></div>
        <div class="text">
          <p><span class="price">24.5</span><del class="price">45.5</del></p>
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
      const res = await api.getTopicList({ 'topic_code': '6330f4fa6c1d0b5b7c4158765dedbc6f' })
      console.log(res)
      if (res.errno === 0) {
        this.topicList = res.data.skuList
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

  .text {
    border: 1px solid red;
    border-width: 1px 2px 3px 4px;
  }
}

// .zt-type-banner {}

// .zt-type-list {

// }
// .zt-type-item {

// }
</style>
