<template>
  <div class="page">
    <x-header></x-header>
    <div id="main" class="fix-sidebar">
      <x-sidebar></x-sidebar>
      <transition>
        <router-view class="content with-sidebar"></router-view>
      </transition>
    </div>
    <!--<x-footer></x-footer>-->
  </div>
</template>

<script>
import xHeader from '../components/header'
import xSidebar from '../components/sidebar'
import xFooter from '../components/footer'

export default {
  components: {
    xHeader,
    xSidebar,
    xFooter,
  },
}
</script>

<style lang="stylus">
// @import "../styles/page.styl";

</style>

