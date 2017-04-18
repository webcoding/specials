<template>
  <section class="stream-item">
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
</template>

<script>
  export default {
    props: ['item'],
  }
</script>

<style lang="stylus">
.stream-list
  margin 20px 0

.stream-item
  position relative
  margin 0
  border-bottom 1px solid #eee
  padding 10px 0

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
    overflow auto
    overflow-x hidden

  .title
    position relative
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

.taglist-inline
.taglist-block
  list-style none
  padding 0
  font-size 0

  &.ib
    margin 0
    display inline-block

</style>
