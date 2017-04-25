<template>
  <div id="header">
    <a id="logo" href="/" title="开发者收藏">
      <x-svg type="devnode_logo" fill="#46483E" width="166" height="40"></x-svg>
      <span></span>
    </a>
    <main-menu id="nav"></main-menu>
  </div>
</template>

<script>
import xSvg from './svg'
import mainMenu from './main-menu'

export default {
  components: {
    xSvg,
    mainMenu,
  },
}
</script>
