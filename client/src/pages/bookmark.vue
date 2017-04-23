<template>
  <div class="bookmark-content">
    <h1>开发者收藏 <small>Bookmarks</small></h1>
    <p>开发者收藏——懒人专用。支持自定义分组、圈子共享、私密收藏等。数据数据源自本地收藏夹以及网友的提交收藏</p>
    <p>收藏支持分类、搜索、筛选等功能</p>
    <div class="stream-list">
      <template v-for="item in bookmarks">
        <stream-item :item="item" :key="item.id"></stream-item>
      </template>
    </div>
    <pager></pager>
  </div>
</template>

<script>
import { data as bookmarks } from '../store/mock/bookmarks'
import streamItem from '../components/stream-item'
import pager from '../components/pager'
console.log(bookmarks)
export default {
  data() {
    return {
      bookmarks: bookmarks.list,
    }
  },

  components: {
    streamItem,
    pager,
  },

  methods: function () {

  },
}
</script>

<style lang="stylus">

</style>
