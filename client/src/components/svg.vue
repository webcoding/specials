<template>
  <svg :style="wrapStyles" :title="type">
    <use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="`#${type}`" :style="styles"></use>
  </svg>
</template>

<script>
export default {
  props: [
    'type',
    'width',
    'height',
    'fill',
  ],

  computed: {
    // 目前单位暂时用的 px
    wrapStyles() {
      return [
        this.width ? { width: this.width } : { width: 20 },
        this.height ? { height: this.height } : { height: 20 },
      ]
    },
    styles () {
      return [
        this.fill ? { fill: this.fill } : { fill: 'currentColor' },
      ]
    },
  },
}
</script>
