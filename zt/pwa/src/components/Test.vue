<template>
  <div class="test">
    <h1>{{ msg }}</h1>
    <h2><router-link to="/hello">go hello</router-link></h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'test',
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
@import "../styles/_setting"
.test{
  padding: 5px;
}
</style>
