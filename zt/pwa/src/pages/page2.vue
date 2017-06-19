<template>
  <div class="page2">
    <h1>{{ page2 }}</h1>
    <h2><router-link to="/page1">go page1</router-link></h2>
  </div>
</template>

<script>
export default {
  name: 'page2',
  data() {
    return {
      msg: 'page2',
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.page2
  color gray

</style>
