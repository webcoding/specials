<template>
  <div class="feedback-actions">
    <span class="action-item">
      <button type="button" class="like action-btn" aria-label="喜欢推荐">推荐一下<span class="count"></span></button>
      <button type="button" class="hate action-btn" aria-label="讨厌无聊">没有价值<span class="count"></span></button>
    </span>
    <button class="action-item action-btn">快照</button>
    <button class="action-item action-btn">分享</button>
    <button class="action-item action-btn">收藏</button>
    <!--<button class="action-item">打赏</button>-->
  </div>
</template>

<script>
// 用于价值分析及排名
</script>

<style lang="stylus">
.feedback-actions
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
