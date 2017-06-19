<template>
  <div class="hello">
    <h1>{{ msg }} <world></world></h1>
    <h2><router-link to="/world">go world</router-link></h2>
  </div>
</template>

<script>
import World from './World'

export default {
  name: 'hello',
  data() {
    return {
      msg: 'Hello',
    }
  },
  components: {
    World,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">

.hello
  color red

</style>
