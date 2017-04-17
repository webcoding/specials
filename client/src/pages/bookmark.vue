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
        <div class="stream-item-actions">
          <div class="action-item">
            <button type="button" class="like action-btn" aria-label="喜欢推荐">👍 <span class="count">10</span></button>
            <button type="button" class="hate action-btn" aria-label="讨厌无聊">👎 <span class="count">10</span></button>
          </div>
          <button class="action-item action-btn">分享</button>
          <button class="action-item action-btn">收藏</button>
          <!--<button class="action-item">打赏</button>-->
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
.stream-item-actions
  display flex

  .action-btn
    height auto
    padding 0
    line-height inherit
    border none
    background-color transparent
    cursor pointer


</style>
