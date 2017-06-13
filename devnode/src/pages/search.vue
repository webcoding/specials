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
      <p class="loading flex-center" v-show="!hasMore">没有更多数据了</p>
      <p class="loading flex-center" v-show="botLoading">加载中...</p>
    </div>
    <div v-else-if="!loading">
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
import throttle from 'lodash/throttle'
// https://lodash.com/docs/#debounce
// import debounce from 'lodash/debounce'

export default {
  data() {
    return {
      // scroll: true,
      tags: tags,
      bookmarks: [],
      keyword: '',
      loading: true,
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

  computed: {
  },

  created() {
    this.fetchData()
    this.scrollCallback = throttle(this.getScrollData, 300, {
      // maxWait: 1000,
    })
  },

  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'fetchData',
  },

  mounted() {
    // 滚动加载
    document.addEventListener('scroll', this.scrollCallback, false)
  },

  methods: {
    fetchData() {
      this.keyword = this.$route.query.q
      if (this.pager.oldKey && (this.pager.oldKey !== this.keyword)) {
        console.log('change key')
        this.hasMore = true
        this.loading = true
        this.pager.current = 1
        // this.bookmarks = []
        window.scrollTo(0, 0)
      }
      this.fetchBookmarks()
    },
    async fetchBookmarks() {
      this.pager.oldKey = this.keyword
      // const res = await this.$ajax.getBookmarksWithTag({
      const res = await this.$ajax.getBookmarks({
        params: {
          page: this.pager.current,
          key: this.keyword,
          // tag: this.keyword,
        },
      })
      this.loading = false
      if (res.errno === 0) {
        const data = res.data
        debugger
        if (this.pager.current === 1) {
          this.bookmarks = data.list
        } else {
          this.bookmarks = this.bookmarks.concat(data.list)
        }
        this.hasMore = (this.bookmarks.length < data.totalCount)

        console.log(this.hasMore)
        console.log(this.bookmarks.length)
        console.log(data.totalCount)
      } else {
        this.pager.current--
        console.log(res.errmsg)
      }
      this.botLoading = false
    },
    getMore() {
      this.botLoading = true
      if (this.hasMore) {
        this.pager.current++
        this.fetchData()
      }
    },
    beforeRouteLeave(to, from, next) {
      document.removeEventListener('scroll', this.scrollCallback)
      next()
    },
    getScrollData() {
      if (this.hasMore === false || this.loading) {
        return
      }
      console.log('scroll')
      var body = document.body
      var height = body.clientHeight + body.scrollTop
      var scrollHeight = body.scrollHeight
      if (height > scrollHeight - 50 && !this.botLoading) {
        this.getMore()
      }
    },
  },
}
</script>

<style lang="stylus">
.keyword
  color red
</style>
