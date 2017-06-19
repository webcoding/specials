<template>
  <div class="world">
    <h1>{{ msg }} <test></test></h1>
    <h2><router-link to="/hello">go hello</router-link></h2>
  </div>
</template>

<script>
import Test from './Test'

export default {
  name: 'world',
  data() {
    return {
      msg: 'world',
    }
  },
  components: {
    Test,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.world{
  color: blue;
}
</style>
