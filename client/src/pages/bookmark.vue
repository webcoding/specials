<template>
  <div class="bookmark-content">
    <h1>开发者收藏 <small>Bookmarks</small></h1>
    <p>开发者收藏——懒人专用。</p>
    <p>支持自定义分组、圈子共享、私密收藏等。</p>
    <p>数据数据源自本地收藏夹以及网友的提交收藏</p>
    <div class="stream-list">
      <template v-for="item in bookmarks">
        <stream-item :item="item" :key="item.id"></stream-item>
      </template>
    </div>
    <pager></pager>
  </div>
</template>

<script>
import streamItem from '../components/stream-item'
import pager from '../components/pager'
export default {
  data() {
    return {
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

  methods: {
    fetchData() {
      this.fetchBookmarks()
    },
    async fetchBookmarks() {
      const res = await this.$ajax.getBookmarks({})
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

</style>
