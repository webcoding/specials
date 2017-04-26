<template>
  <div id="header">
    <a id="logo" href="/">
      <img src="../assets/img/devnode.svg" alt="开发者乐园" title="开发者乐园">
      <span></span>
    </a>
    <main-menu id="nav"></main-menu>
  </div>
</template>

<script>
import mainMenu from './main-menu'

export default {
  components: {
    mainMenu,
  },
}
</script>
