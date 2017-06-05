<template>
  <div class="bookmark-content">
    <h1>开发者收藏 <small>Bookmarks</small></h1>
    <!--<p>懒人专用收藏夹——切记：社会进步是由懒人推进的。<router-link class="btn" :to="`/bookmark/add`">新增收藏</router-link></p>-->
    <div class="hint-tips keywords">
      <strong>快捷入口：</strong><router-link class="keyword" v-for="tag in tags" :to="`/tag/${tag.name}`" :key="tag.id">{{tag.name}}</router-link>
    </div>
    <div class="stream-list">
      <template v-for="item in bookmarks">
        <stream-item :item="item" :key="item.id"></stream-item>
      </template>
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
