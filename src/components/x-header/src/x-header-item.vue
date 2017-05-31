<template>
  <router-link
    class="x-header-item"
    :to="link"
    @click.prevent="handleClick"
    :tag="tag">
    <i v-if="icon" :class="['iconfont', `icon-${icon}`]"></i>
    <span class="x-header-text" v-if="text" v-text="text"></span>
  </router-link>
</template>

<script>

const noop = function () {}

/**
 * x-header-item
 * @module packages/x-header-item
 * @desc 顶部导航条左右按钮项
 * @param {boolean} [fixed=false] - 固定顶部
 * @param {string} [title] - 默认显示在中间区域，标题
 * @param {slot} [left] - 显示在左侧区域
 * @param {slot} [right] - 显示在右侧区域
 *
 * @example
 * <x-header-item>
 * </x-header-item>
 */
export default {
  name: 'x-header-item',

  props: {
    link: String,
    tag: String,
    icon: String,
    status: String,
    text: String,
    callback: Function,
  },

  computed: {
    // styles() {
    //   return [
    //     this.color ? {color: this.color} : {},
    //     this.bg ? {backgroundColor: this.bg} : {},
    //   ]
    // },
    // classes() {
    //   return [
    //     { 'is-fixed': this.fixed },
    //   ]
    // },
  },

  methods: {
    handleClick() {
      return this.callback ? this.callback : noop
    },
  },
}
</script>

<style lang="stylus">

</style>
