<template>
  <div class="search-content">
    <div class="hint-tips keywords" v-if="tags.length">
      <span>历史：</span><router-link class="keyword" v-for="tag in tags" :to="`/tag/${tag.name}`" :key="tag.id">{{tag.name}}</router-link>
    </div>
    <div class="stream-list" v-if="bookmarks.length > 0">
      <template v-for="item in bookmarks">
      <stream-item :item="item" :key="item.id"></stream-item>
      </template>
    </div>
    <div v-else>
      没有搜索到 <span class="keyword">{{keyword}}</span> 相关的结果
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
export default {
  data() {
    return {
      key: '',
      tags: tags,
      bookmarks: [],
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
      this.fetchBookmarks()
    },
    async fetchBookmarks() {
      this.keyword = this.$route.query.q
      console.log(this.keyword)
      // const res = await this.$ajax.getBookmarks({
      //   params: {
      //     key: this.keyword,
      //   },
      // })
      const res = await this.$ajax.getBookmarksWithTag({
        params: {
          tag: this.keyword,
        },
      })
      // console.log(res)
      if (res.errno === 0) {
        const data = res.data
        this.bookmarks = data.list
      } else {
        console.log(res.errmsg)
      }
    },
  },
}
</script>

<style lang="stylus">
.keyword
  color red
</style>
