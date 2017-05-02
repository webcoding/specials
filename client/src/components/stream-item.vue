<template>
  <section class="stream-item">
    <div class="summary">
      <!--<viewCount :count="item.views"></viewCount>-->
      <vote :count="item.like"></vote>
      <div class="cover-wrap">
        <a class="addToFavorite"></a>
        <div class="cover-over"></div>
        <template v-if="item.domain">
          <span class="cover cover-placeholder"></span>
          <img class="cover" :src="`https://logo.clearbit.com/${item.domain}?size=100`" alt="item.domain" @error="errorImg">
        </template>
      </div>
      <div class="about">
        <a class="title" :href="item.url" target="_blank">{{item.title}}</a>
        <p class="taglist-inline">
          <!--<span>标签：</span>-->
          <router-link class="tag" v-for="tag in item.tags" :to="`/t/${tag}`" :key="tag">{{tag}}</router-link>
        </p>
        <p class="desc">{{item.description}}</p>
      </div>
      <!--<div v-if="item.logo" class="bm-logo"><img :src="item.logo" alt=""></div>-->
      <a :href="item.url" tabindex="200" class="permalink superlink" target="_blank"></a>
    </div>
  </section>
</template>

<script>
import vote from './vote'
import action from './action'
import viewCount from './view-count'
// var errDefaultUrl
// const coverPlaceholder = `<span class="cover cover-placeholder"></span>`
export default {
  props: ['item'],

  components: {
    vote,
    action,
    viewCount,
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

.stream-list
  margin 20px 0

.stream-item
  position relative
  margin 0
  padding 10px 0

  &::after
    content ''
    position absolute
    bottom 0
    left 80px
    right 0
    height 1px
    background #eee

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
    width 64px
    height 64px

  .cover-wrap
    flex-shrink 0
    position relative
    margin-right 16px

  .cover
    position absolute
    display inline-block
    border-radius 1px
    background-color #fff

  .cover-over
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    border-radius: 1px;
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

  .title
    display inline
    margin 0 8px 0 0
    font-size 16px
    color $medium
    font-weight 600

    &:hover
      // text-decoration underline
      color $green

    &:active
      top 1px

  .desc
    margin 0
    padding 0

  .taglist,
  .taglist-inline
  .taglist-block
    list-style none
    margin 0
    padding 0

  .title,
  .tag
    position relative
    z-index 2

  .taglist-inline
    display inline-block

</style>
