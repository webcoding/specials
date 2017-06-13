<template>
  <div class="bookmark-content">
    <h1>开发者收藏 <small>Bookmarks</small></h1>
    <!-- 懒人专用收藏夹——切记：社会进步是由懒人推进的。-->
    <div class="hint-tips" v-if="tags.length">
      <strong class="nowrap">快捷入口：</strong>
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
      好伤心，没找到的结果。我来<router-link :to="`/bookmark/add`">提交一个</router-link>
    </div>
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
export default {
  data() {
    return {
      tags: tags,
      bookmarks: [],
      botLoading: false,
      hasMore: true,
      pager: {
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

  methods: {
    fetchData() {
      this.fetchBookmarks()
    },
    async fetchBookmarks() {
      const res = await this.$ajax.getBookmarks({
        params: {
          page: this.pager.current,
        },
      })
      // console.log(res)
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

</style>
