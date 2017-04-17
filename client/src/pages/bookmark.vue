<template>
  <div class="guide index-guide">
    <h1>收藏夹 <small>Bookmarks</small></h1>
    <p>网络共享收藏夹，数据源自本地收藏夹以及网友的提交收藏</p>
    <div class="list-stream">
      <section class="stream-item" v-for="item in bookmarks" :key="item.id">
        <div class="summary">
          <div class="text">
            <a class="title" :href="item.link" target="_blank">{{item.title}}</a>
            <p class="taglist-inline ib">
              <router-link class="tag" v-for="tag in item.tags" :to="`/t/${tag}`" :key="tag">{{tag}}</router-link>
            </p>
            <p class="desc">{{item.desc}}</p>
          </div>
          <div v-if="item.logo" class="bm-logo"><img :src="item.logo" alt=""></div>
        </div>
      </section>
    </div>
    <div class="guide-links">
      <span>← <a href="prev">上一页</a></a></span>
      <span style="float:right"><a href="next">下一页</a></a> →</span>
    </div>
  </div>
</template>

<script>
import { data as bookmarks } from '../store/mock/bookmarks'
console.log(bookmarks)
export default {
  data() {
    return {
      bookmarks: bookmarks.list,
    }
  },

  methods: function () {

  },
}
</script>

<style lang="stylus">

</style>
