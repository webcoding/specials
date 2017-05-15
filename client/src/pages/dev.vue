<template>
  <div class="">
    <h1>开发者</h1>
    <div class="types">

    </div>
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
