<template>
  <div class="content">
    <div class="update-bookmark">
      <form class="bookmark-form">
        <h2>添加到收藏夹</h2>
        <label class="block">
          <span class="title">标题</span>
          <input v-model.trim="bookmark.title" type="text" class="input-text" placeholder="标题">
        </label>
        <label class="block">
          <span class="title">链接</span>
          <input v-model.trim="bookmark.url" type="text" class="input-text" placeholder="链接">
        </label>
        <label class="block">
          <span class="title">摘要</span>
          <textarea v-model.trim="bookmark.description" type="text" class="input-text input-area" placeholder="用于补充描述收藏的标题或链接，越精准的描述对以后的检索查找越有利"></textarea>
        </label>
        <label class="block">
          <span class="title">标签</span>
          <input v-model.trim="bookmark.tags" type="text" class="input-text" placeholder="多个用英文逗号隔开">
        </label>
        <label class="block">
          <span class="title"></span>
          <button class="btn" @click="addBookmark">提交</button>
        </label>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookmark: {},
    }
  },
  created() {
    // 处理 url 参数
    console.log(this.$route)
    this.bookmark = this.$route.query
  },

  filters: {
    // join(value, separator) {
    //   if (!value) {
    //     value = []
    //   }
    //   return value.join(separator)
    // },
  },

  methods: {
    async addBookmark(e) {
      e.preventDefault()
      // e.stopPropagation()
      const res = await this.$ajax.addBookmark(this.bookmark)
      console.log(res)
      if (res.errno === 0) {
        const data = res.data

        // this.timestamp = res.timestamp
        alert('添加成功')
        console.log(data)
        window.close()
      } else {
        console.log(res.errmsg)
        /*global alert */
        alert(res.errmsg)
      }
    },
  },
}
</script>

<style lang="stylus">
.bookmark-form
  width 500px
  margin 20px auto
label.block
  display flex
  align-items flex-start
  justify-content flex-start
  margin-bottom 16px
  line-height 24px
  .title
    min-width 40px
    flex-shrink 0
    padding 4px 8px
    text-align right
    font-size 14px
    font-weight 600
  .input-text
    padding 4px 8px
    width 100%
    border 1px solid #dadada
  .input-area
    min-height 80px
    resize none
    overflow-y auto
    overflow-x hidden
</style>
