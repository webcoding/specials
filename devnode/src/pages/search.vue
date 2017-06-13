<template>
  <div class="search-content">
    <div class="hint-tips" v-if="tags.length">
      <span class="nowrap">历史：</span>
      <div class="keywords">
        <router-link class="keyword" v-for="tag in tags" :to="`/tag/${tag.name}`" :key="tag.id">{{tag.name}}</router-link>
      </div>
    </div>
    <div class="stream-list" v-if="bookmarks.length > 0">
      <template v-for="item in bookmarks">
      <stream-item :item="item" :key="item.id"></stream-item>
      </template>
      <p class="get-more flex-center" @click="getMore" v-show="!botLoading && hasMore">点击加载更多</p>
      <p class="loading flex-center" v-show="botLoading">加载中...</p>
    </div>
    <div v-else>
      好伤心，没找到 <span class="keyword">{{keyword}}</span> 相关的结果。我来<router-link :to="`/bookmark/add`">提交一个</router-link>
    </div>
    <!--<pager></pager>-->
  </div>
</template>

<script>
const tags = [
  {
    id: 1,
    name: '微信公众号',
  },
  {
    id: 4,
    name: '小程序',
  },
  {
    id: 2,
    name: '支付宝接入',
  },
  {
    id: 3,
    name: '七牛SDK',
  },
]
import streamItem from '../components/stream-item'
import pager from '../components/pager'

// https://lodash.com/docs/#debounce
// import debounce from 'lodash/debounce'

export default {
  data() {
    return {
      scroll: true,
      tags: tags,
      bookmarks: [],
      keyword: '',
      botLoading: false,
      hasMore: true,
      pager: {
        oldKey: '',
        current: 1,
        total: 0,
        pageSize: 10,
      },
    }
  },

  components: {
    streamItem,
    pager,
  },

  created() {
    this.fetchData()
  },

  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'fetchData',
  },

  mounted() {
    // 滚动加载
    // $(window).on('scroll', debounce(this.getScrollData, 300, { maxWait: 1000 }))
  },

  methods: {
    fetchData() {
      this.fetchBookmarks()
    },
    async fetchBookmarks() {
      this.keyword = this.$route.query.q
      var { keyword, pager } = this
      if (pager.oldKey && (pager.oldKey !== keyword)) {
        this.hasMore = true
        pager.current = 1
        this.bookmarks = []
      }
      // const res = await this.$ajax.getBookmarksWithTag({
      const res = await this.$ajax.getBookmarks({
        params: {
          page: this.pager.current,
          key: this.keyword,
          // tag: this.keyword,
        },
      })
      if (res.errno === 0) {
        const data = res.data
        if (this.pager.current === 1) {
          this.bookmarks = data.list
        } else {
          this.bookmarks = this.bookmarks.concat(data.list)
        }
        this.hasMore = this.bookmarks.length < data.totalCount
      } else {
        this.pager.current--
        console.log(res.errmsg)
      }
      this.botLoading = false
      pager.oldKeyword = this.keyword
    },
    getMore() {
      if (!this.botLoading && this.hasMore) {
        this.botLoading = true
        this.pager.current++
        this.fetchData()
      }
    },
  },
}
</script>

<style lang="stylus">
.keyword
  color red
</style>
