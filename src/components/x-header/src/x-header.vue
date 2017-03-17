<template>
  <header
    class="x-header"
    :class="classes">
    <div class="x-header-left">
      <slot name="left">
        <template v-if="header.left" v-for="item in header.left">
          <x-header-item :text="item.text" :link="item.link" :status="item.status" :icon="item.icon" :tag="item.tag" :callback="item.callback"></x-header-item>
        </template>
      </slot>
    </div>
    <div class="x-header-center">
      <slot>
        <div class="x-header-title" v-text="title || header.title"></div>
        <div class="x-header-subtitle" v-if="subTitle || header.subTitle" v-text="subTitle || header.subTitle"></div>
      </slot>
    </div>
    <div class="x-header-right">
      <slot name="right">
        <template v-if="header.right" v-for="item in header.right">
          <x-header-item :info="header.right" :link="item.link" :status="item.status" :icon="item.icon" :tag="item.tag" :callback="item.callback"></x-header-item>
        </template>
      </slot>
    </div>
  </header>
</template>

<script>

import XHeaderItem from './x-header-item.vue'

/**
 * x-header
 * @module packages/x-header
 * @desc 顶部导航条，标准的 xx xxxxxx xx 弹性布局
 * @param {boolean} [fixed=false] - 固定顶部
 * @param {string} [title] - 默认显示在中间区域，标题
 * @param {slot} [left] - 显示在左侧区域
 * @param {slot} [right] - 显示在右侧区域
 *
 * @example
 * <x-header fixed>
 *   <div solt="left"></div>
 *   <div solt="center"></div>
 *   <div solt="right"></div>
 * </x-header>
 */
export default {
  name: 'x-header',

  components: {
    XHeaderItem,
  },

  props: {
    header: {
      type: Object,
      default: function () {
        return { }
      },
    },
    fixed: Boolean,
    title: String,
    subTitle: String,
  },

  computed: {
    getTitle() {
      var { header, title } = this
      if (title && header && header.title) {
        title = header.title
      }
      return title
    },
    // styles() {
    //   return [
    //     this.color ? {color: this.color} : {},
    //     this.bg ? {backgroundColor: this.bg} : {},
    //   ]
    // },
    classes() {
      return [
        { 'is-fixed': this.fixed },
      ]
    },
  },
}
</script>

<style lang="scss">
@import "../../../styles/var.scss";
/* @modifier 角色  @descendent 下级元素  @when 状态 */
/* 如果使用扩展，就要支持并写 @modifier left,@modifier right{} */
.x-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 44px;
  background: $header-background;
  color: $header-color;

  a{
    color: inherit;
  }

  &.is-fixed {
    position: fixed 0 0 * 0;
    z-index: 10;
  }
  &-center {
    margin: 0 10px;
    align-items: center;
    overflow: hidden;
    text-align: center;
  }
  &-left,
  &-right {
    width: 88px;
    overflow: hidden;
    flex-shrink: 0;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    &::before {
      content: '';
      width: 4px;
    }
  }
  &-right {
    justify-content: flex-end;
    // flex-direction: row-reverse;
  }
  &-item {
    width: 42px;
    text-align: center;
    line-height: 4;
  }
  &-title,
  &-subtitle {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: inherit;
    font-weight: normal;
  }
  &-title {
    font-size: 18px;
  }
  &-subtitle {
    margin-top: -2px;
    font-size: 12px;
  }
  &-text {
    font-size: 14px;
  }
}
</style>
