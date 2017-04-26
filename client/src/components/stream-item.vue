<template>
  <section class="stream-item">
    <div class="summary">
      <!--<viewCount :count="item.views"></viewCount>-->
      <div class="cover-wrap">
        <div class="cover-over"></div>
        <template v-if="item.domain">
          <img :src="`https://logo.clearbit.com/${item.domain}?size=100`" alt="item.domain">
        </template>
        <template v-else>
          <span class="cover cover-placeholder"></span>
        </template>
      </div>
      <div class="about">
        <a class="title" :href="item.link" target="_blank">{{item.title}}</a>
        <p class="taglist-inline">
          <!--<span>标签：</span>-->
          <router-link class="tag" v-for="tag in item.tags" :to="`/t/${tag}`" :key="tag">{{tag}}</router-link>
        </p>
        <p class="desc">{{item.desc}}</p>
      </div>
      <!--<div v-if="item.logo" class="bm-logo"><img :src="item.logo" alt=""></div>-->
      <a :href="item.link" tabindex="200" class="permalink superlink" target="_blank"></a>
    </div>
    <!--<action></action>-->
  </section>
</template>

<script>
// import action from './action'
import viewCount from './view-count'
export default {
  props: ['item'],

  components: {
    // action,
    viewCount,
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

  .cover-wrap
    flex-shrink 0
    position relative
    margin-right 16px
    width 64px
    height 64px

  .cover-placeholder
    display inline-block
    width 64px
    height 64px
    background-color rgba(66,185,131,0.1)

  .bm-logo
    margin-left 40px
    // width 80px
    height 32px
    display inline-block

    img
      width auto
      height 100%

  .x-vote
    display none
    position absolute
    left -56px

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
