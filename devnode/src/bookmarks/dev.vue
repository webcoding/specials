<template>
  <div class="">
    <h1>开发者</h1>
    <div class="tags-list">
      <strong>系统推荐：</strong><router-link class="tag" v-for="tag in tags" :to="`/tag/${tag.name}`" :key="tag.id">{{tag.name}}</router-link>
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
const tags = [
  {
    id: 1,
    name: 'iconfont',
  },
  {
    id: 4,
    name: '在线教程',
  },
  {
    id: 2,
    name: 'code编程',
  },
  {
    id: 3,
    name: '机器学习',
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
    // this.fetchData()
  },

  methods: {
    // fetchData() {
    //   this.fetchBookmarks()
    // },
    // async fetchBookmarks() {
    //   const res = await this.$ajax.getBookmarks({})
    //   // console.log(res)
    //   if (res.errno === 0) {
    //     const data = res.data

    //     this.bookmarks = data.list
    //   } else {
    //     console.log(res.errmsg)
    //   }
    // },
  },
}
</script>

<style lang="stylus">

</style>
