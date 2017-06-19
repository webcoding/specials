<template>
  <div class="page1">
    <h1>{{ page1 }}</h1>
    <h2><router-link to="/page2">go page2</router-link></h2>
  </div>
</template>

<script>
export default {
  name: 'page1',
  data() {
    return {
      msg: 'page1',
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.page1
  color yellow

</style>
