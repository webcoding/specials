<template>
  <div class="actions">
    <a href="###" tabindex="-1" target="_blank" class="btn btn-samll" title="在浏览器中打开">
      <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#open"></use></svg>
    </a>
    <button class="btn btn-small">编辑</button>
    <button class="btn btn-small" title="右键点击书签或集合文件夹以获得更多功能">
      <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#more_horizontal"></use></svg>
    </button>
    <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#default_collection"></use></svg>
  </div>
</template>

<script>
// 编辑等操作
export default {

}
</script>

<style lang="stylus">
.actions
  display none
  display flex
  margin-top 8px
  font-size 14px

  .action-btn
    margin-right 16px
    padding 0
    height auto
    border none
    line-height inherit
    background-color transparent
    cursor pointer
</style>
