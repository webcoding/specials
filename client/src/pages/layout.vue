<template>
  <div id="main" class="fix-sidebar">
    <x-sidebar></x-sidebar>
    <transition>
      <router-view class="content with-sidebar"></router-view>
    </transition>
  </div>
</template>

<script>
import xSidebar from '../components/sidebar'

export default {
  components: {
    xSidebar,
  },
}
</script>

<style lang="stylus">
// @import "../styles/page.styl";

</style>
