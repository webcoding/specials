<template>
  <div class="x-line-box" :style="styleBox">
    <i class="x-line" :style="styleLine"></i>
    <span class="x-line-content" :style="styleContent"><slot></slot></span>
    <i class="x-line" :style="styleLine"></i>
  </div>
</template>

<script>
export default {
  props: [
    'margin',
    'height',
    'padding',
    'color',
    'bg',
  ],

  data() {
    return {
      content: '',
    }
  },

  computed: {
    styleBox() {
      return [
        this.margin ? { margin: this.margin } : {},
        this.height ? { height: this.height } : {},
      ]
    },
    styleContent() {
      return [
        this.color ? { color: this.color } : {},
        this.padding ? { padding: this.padding } : {},
      ]
    },
    styleLine() {
      return [
        this.bg ? { backgroundColor: this.bg } : {},
      ]
    },
  },
}
</script>

<style lang="stylus">
.x-line-box
  display: flex;
  margin: 16px auto;
  align-items: center;
  justify-content: space-around;

  .x-line
    width: 100%;
    height: 1px;
    background-color: #ebf0fa;

  .x-line-content
    flex-shrink: 0;
    padding: 0 16px;
</style>
