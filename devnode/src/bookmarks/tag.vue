<template>
  <div class="bookmark-content">
    <h1>{{tag}} <small></small></h1>
    <div class="hint-tips" v-if="tags.length">
      <strong class="nowrap">相关推荐：</strong>
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
      好伤心，没找到 <span class="tag">{{tag}}</span> 相关的结果。我来<router-link :to="`/bookmark/add`">提交一个</router-link>
    </div>
  </div>
</template>

<script>
import streamItem from '../components/stream-item'
import pager from '../components/pager'
export default {
  data() {
    return {
      tags: [],
      tag: '',
      bookmarks: [],
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

  methods: {
    fetchData() {
      this.fetchTagBookmarks()
    },
    async fetchTagBookmarks() {
      this.tag = this.$route.params.tag
      var { tag, pager } = this
      if (pager.oldKey && (pager.oldKey !== tag)) {
        this.hasMore = true
        pager.current = 1
        this.bookmarks = []
      }
      const res = await this.$ajax.getBookmarksWithTag({
        params: {
          page: this.pager.current,
          tag: this.tag,
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

</style>
