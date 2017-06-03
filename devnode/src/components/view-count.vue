<template>
  <div class="view-count">
    <div class="num">{{count | enNumber}}</div>Views
  </div>
</template>

<script>
const digitsRE = /(\d{3})(?=\d)/g
export default {
  props: [
    'count',
  ],

  filters: {
    enNumber(value) {
      const temp = value.toString().split('').reverse().join('')
      return temp.replace(digitsRE, '$1,').split('').reverse().join('')
    },
  },
}
</script>

<style lang="stylus">
.view-count
  margin-right 16px
  min-width 48px
  font-size 12px
  text-align right

  .num
    font-size 18px
</style>
