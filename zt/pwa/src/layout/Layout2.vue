<template>
  <div class="page layout2">
    <x-header>Layout 2</x-header>
    <router-view class="content"></router-view>
  </div>
</template>

<script>
import xHeader from '../components/Header'
export default {
  components: {
    xHeader,
  },
}
</script>

<style lang="stylus">
.layout2{
  padding: 10px;
}
</style>
