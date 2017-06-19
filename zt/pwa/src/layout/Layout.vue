<template>
  <div class="page layout2">
    <x-header>layout 1</x-header>
    <hello></hello>
    <router-view class="content"></router-view>
  </div>
</template>

<script>
import xHeader from '../components/Header'
import Hello from '../components/Hello'

export default {
  components: {
    xHeader,
    Hello,
  },
}
</script>

<style lang="stylus">
.layout{
  padding: 10px;
}
</style>
