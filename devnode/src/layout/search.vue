<template>
  <div class="page page-search">
    <x-header></x-header>
    <div id="main" class="">
      <div class="result-count" v-if="totalCount">{{`${totalCount} results`}}<span v-if="keyword">{{` for ${keyword}`}}</span></div>
      <transition>
        <router-view class="content"></router-view>
      </transition>
    </div>
    <!--<x-footer></x-footer>-->
  </div>
</template>

<script>
import xHeader from '../components/header'
import xSidebar from '../components/sidebar'
import xFooter from '../components/footer'
// import playBall from '../components/playball'

export default {
  components: {
    xHeader,
    xSidebar,
    xFooter,
    // playBall,
  },

  data() {
    return {
      keyword: '',
      totalCount: 0,
    }
  },
}
</script>

<style lang="stylus">
// @import "../styles/page.styl";
.result-count
  height 30px
  background-color #ededeb
  color #939292
  font-size 14px
  font-weight 500
  font-style italic
  line-height 30px
</style>
s
