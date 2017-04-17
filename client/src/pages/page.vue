<template>
  <div id="main" class="fix-sidebar">
    <x-sidebar></x-sidebar>
    <div class="content guide with-sidebar index-guide">
      <h1>Example</h1>
      <p>contributors</p>
      <div class="guide-links">
        <span>← <a href="prev"></a></a></span>
        <span style="float:right"><a href="next"></a></a> →</span>
      </div>
    </div>
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
