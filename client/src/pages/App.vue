<template>
  <div id="app">
    <div id="mobile-bar">
      <a class="menu-button"></a>
      <a class="logo" href="/"></a>
    </div>
    <x-Header></x-Header>
    <transition>
      <router-view class="page"></router-view>
    </transition>
  </div>
</template>

<script>
// <v-dialog :is-show="dialog" :msg="tips" @cancel="dialog = false" @sure="sureDialog"></v-dialog>
// import hub from './store/hub'
// import vDialog from './components/Dialog'
import xHeader from '../components/header'

export default {
  data() {
    return {
      dialog: false,
      dialogType: '',
      tips: '',  // ,'删除后无法恢复，确认删除吗？'
    }
  },
  components: {
    // Dialog,
    xHeader,
  },
  created() {
    // var self = this
    // hub.$on('alertinfo', function (msg) {
    //   self.alertData(msg)
    // })
  },
  methods: {
    // alertData(msg = '您还没有选择答案哦！') {
    //   this.dialog = true
    //   this.dialogType = 'alert'
    //   this.tips = msg
    // },
    // clearData() {
    //   this.dialog = true
    //   this.dialogType = 'clear'
    //   this.tips = '清空后无法恢复，确认清空吗？'
    // },
    // delData(index, id) {
    //   this.dialog = true
    //   this.dialogType = 'del'
    //   this.tips = '删除后无法恢复，确认删除吗？'
    //   this.delInfo = {
    //     index: index,
    //     id: id,
    //   }
    // },
    // sureDialog() {
    //   const self = this
    //   switch (this.dialogType) {
    //     case 'alert':
    //       break
    //     case 'clear':
    //       // self.$store.dispatch('clearevent')
    //       this.EVENT_DO_CLEAR()
    //       break
    //     case 'del':
    //       this.EVENT_DO_DEL(self.delInfo)
    //       // self.$store.dispatch('delevent', self.delInfo)
    //       break
    //   }
    //   this.dialog = false
    // },
  },
}
</script>


<style lang="stylus">
@import "../styles/page.styl";

#app .no-margin
  margin 0

.tag-list
  margin 20px 0

.tag-item
  box-sizing border-box
  display inline-block
  padding 0 8px
  width 25%
  min-width 180px
  vertical-align top

  dt
    border-bottom 1px solid #eee
    line-height 2
    font-weight 400

  dd
    margin 0
    padding 16px 0 0

a.tag
  display inline-block
  margin 0 4px 4px 0
  padding 2px 8px
  border-radius 2px
  white-space nowrap
  font-size 13px
  line-height 1.2
  background-color rgba(66, 185, 131, 0.1)

  &:hover
    background-color rgba(66, 185, 131, 0.2)



.x-vote
  position relative
  z-index 10
  display inline-block
  width 40px
  height 54px
  line-height 54px
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
    background-size auto 60px

  .like
    top 0
    height 36px
    &:hover
      background-position -40px 0

  .hate
    bottom 0
    height 18px
    background-position 0 bottom
    &:hover
      background-position -40px bottom



.list-stream
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



.contributors
  margin 16px 0
  padding-left 16px

.contributor
  display inline-block
  margin 10px 16px
  text-align center

.contributor__img
  width 64px
  height 64px
  border-radius 8px

</style>

