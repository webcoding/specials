<template>
  <div class="bookmark-content">
    <h1>{{tag}} <small></small></h1>
    <div class="hint-tips" v-if="tags.length">
      <span>相关推荐：</span><router-link class="key" v-for="tag in tags" :to="`/tag/${tag.name}`" :key="tag.id">{{tag.name}}</router-link>
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
      tags: [],
      tag: '',
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
      this.fetchTagBookmarks()
    },
    async fetchTagBookmarks() {
      this.tag = this.$route.params.tag
      const res = await this.$ajax.getBookmarksWithTag({
        params: {
          tag: this.tag,
        },
      })
      console.log(res)
      if (res.errno === 0) {
        const data = res.data
        // const len = this.bookmarks.length
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
