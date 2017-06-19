<template>
  <div class="page page-search">
    <x-header></x-header>
    <div id="main" class="">
      <transition>
        <router-view class="content"></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import xHeader from './header'
export default {
  components: {
    xHeader,
  },
}
</script>

<style lang="stylus">
.result-count
  color gray
</style>
