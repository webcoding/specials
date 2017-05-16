<template>
  <div class="x-vote">
    <button type="button" class="like" aria-label="喜欢推荐"></button>
    <span class="count">{{count}}</span>
    <button type="button" class="hate" aria-label="讨厌无聊"></button>
  </div>
</template>

<script>
export default {
  props: [
    'count',
  ],
}
</script>

<style lang="stylus">

$iconSize = 48px;

.x-vote
  position relative
  z-index 2
  display inline-block
  // width 40px
  // height 54px
  // line-height 54px
  width $iconSize
  height $iconSize
  line-height $iconSize
  font-size 18px
  background #f3f3f3
  color #666
  text-align center
  border-radius 2px
  box-shadow 0 1px 1px rgba(0,0,0,0.3)
  transition-duration 0.2s

  &:hover
    background-color #fff7e2

  .like
  .hate
    position absolute
    left 0
    padding 0
    border none
    outline none
    width 100%
    background url(../assets/img/vote-bg.svg) 0 0 no-repeat
    background-size auto 72px
    // background-position 8px top
    background-position 0 top

  .like
    top 0
    height 36px
    &:hover
      // background-position -40px 0
      background-position -48px 0

  .hate
    bottom 0
    height 18px
    // background-position 0 bottom
    background-position 0 bottom
    &:hover
      background-position -48px bottom
</style>
