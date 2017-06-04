<template>
  <div class="link-score">
    <div class="view-count">
      <div class="num">{{count | enNumber}}</div>Score
    </div>

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
.link-score
  margin-left 16px
  min-width 100px
  font-size 12px
  text-align right


  .num
    font-size 18px
</style>
