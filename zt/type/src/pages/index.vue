<template>
  <div class="zt-type">
    <div class="zt-list">
      <div class="item">
        <div class="img"><span>img</span></div>
        <div class="text">
          <p><span class="price">24.5</span><del class="price">45.5</del></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import list from '../components/list'

export default {
  components: {
    list,
  },
  created() {
    // console.log(this.$store.state)
  },
}
</script>

<style lang="scss">
.zt-type {
  font-size: 12px;
}
.text {
  border: 1px solid red;
  border-width: 1px 2px 3px 4px;
}
</style>
