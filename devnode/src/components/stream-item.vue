<template>
  <section class="stream-item">
    <div class="summary">
      <template v-if="item.domain">
      <vote :count="item.like"></vote>
      <div class="cover-wrap">
        <a class="addToFavorite"></a>
        <div class="cover-over"></div>
          <span class="cover cover-placeholder"></span>
          <img class="cover" :src="`https://logo.clearbit.com/${item.domain}?size=100`" alt="item.domain" @error="errorImg">
      </div>
      </template>
      <div class="about">
        <router-link class="title ellipsis" :to="item.url | linkEncode">{{item.title}}</router-link>
        <!--<div class="link-score">32</div>-->
        <div class="desc max-line-2">{{item.description}}</div>
        <div class="keywords ellipsis">
          <x-svg type="tag"></x-svg>
          <router-link class="keyword" v-for="tag in item.tags" :to="`/tag/${tag}`" :key="tag">{{tag}}</router-link>
        </div>
        <div class="update-info">
          <span>更新于</span>
          <time class="date" :datetime="item.updateTime | formatTime">{{ item.updateTime | timeAgo }}</time>
          <span>By</span>
          <router-link :to="`/user/${item.userId}`" target="_blank" class="publisher-name">晓寒</router-link>
          <span class="publisher-avatar"></span>
        </div>
        <!--<div class="links">
          <a class="analysis">分析</a>
          <a class="source">源站</a>
          <a class="snapshot">快照</a>
        </div>-->
      </div>
      <linkScore :count="item.views"></linkScore>
      <!--<viewCount :count="item.views"></viewCount>-->
      <!--<div v-if="item.logo" class="bm-logo"><img :src="item.logo" alt=""></div>-->
      <!--<router-link :to="`/link?url=${item.url}`" tabindex="200" class="permalink superlink"></router-link>-->
    </div>
  </section>
</template>

<script>
import { encode } from '../utils/filters'
import xSvg from '../components/svg'
import vote from './vote'
// import Base64 from 'Base64'
import action from './action'
import linkScore from './link-score'
// var errDefaultUrl
// const coverPlaceholder = `<span class="cover cover-placeholder"></span>`
export default {
  props: ['item'],

  components: {
    xSvg,
    vote,
    action,
    linkScore,
  },

  filters: {
    linkEncode(value) {
      return '/link?url=' + encode(value)
    },
  },

  mounted () {
    // this.$refs.img.onerror = () => {
    //   console.log(this)
    //   console.log(coverPlaceholder)
    // }
  },

  methods: {
    errorImg(e) {
      e.target.remove()
    },
  },
}
</script>

<style lang="stylus">
@import '../styles/_settings'

$iconSize = 48px

.stream-list
  margin 20px 0

.stream-item
  position relative
  margin 0
  margin 10px 0 30px

  a:hover
    text-decoration underline

  // &::after
  //   content ''
  //   position absolute
  //   bottom 0
  //   left $iconSize + 16px
  //   right 0
  //   height 1px
  //   background #eee

  .permalink
    outline none
    position absolute
    left 0
    right 0
    bottom 0
    top 0

  .cover-wrap,
  .cover-over,
  .cover-placeholder
    width $iconSize
    height $iconSize

  .cover-wrap
    flex-shrink 0
    position relative
    margin-right 16px

  .cover
    position absolute
    display inline-block
    max-width 100%
    border-radius 2px
    background-color #fff

  .cover-over
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    border-radius: 2px;
    // box-shadow: inset 0 0 0 1px rgba(0,0,0,.07);

  .cover-placeholder
    border-radius 2px
    background-color rgba(66, 185, 131, 0.2)
    box-shadow inset 0 0 0 1px rgba(0, 0, 0, .1),
               inset 0 -10px 20px hsla(0,0%,100%,.1)

  .x-vote
    // display none
    position absolute
    opacity 0

    &:hover
      opacity 1
    // left -56px

  &:hover .x-vote
    // display inline-block

  .summary
    display flex
    align-items center
    justify-content space-between
    // overflow auto
    // overflow-x hidden

    .about
      width 100%
      overflow hidden

  .title
    // display inline
    margin 0 0 8px 0
    font-size 20px
    color $medium
    font-weight 600
    // text-decoration underline

    // &:hover
    //   color $green

    &:active
      top 1px

  .desc
    margin 4px 0
    padding 0
    font-size 14px
    line-height 1.3

  // .taglist,
  // .taglist-inline
  // .taglist-block
  //   list-style none
  //   margin 0
  //   padding 0

  .title,
  .keywords
    position relative
    z-index 2

  .update-info
    font-size 12px

  // .taglist-inline
  //   display inline-block

</style>
