<template>
  <div class="page layout2">
    <x-header></x-header>
    <router-view class="content"></router-view>
  </div>
</template>

<script>
import xHeader from '../components/header'

export default {
  components: {
    xHeader,
  },
}
</script>

<style lang="stylus">
.layout{
  padding: 10px;
}
</style>
