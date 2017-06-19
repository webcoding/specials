<template>
  <div id="app">
    <svg-icons></svg-icons>
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import svgIcons from './components/svg-icons'

export default {
  name: 'app',

  components: {
    svgIcons,
  },
}
</script>

<style lang="stylus">
@import "./styles/page.styl";

#test
  color orange

// other css

</style>
