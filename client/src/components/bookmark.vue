<template>
  <div class="content">
    <div class="update-bookmark">
      <form class="bookmark-form">
        <h2>添加到收藏夹</h2>
        <label class="block">
          <span class="title">标题</span>
          <input type="text" class="input-text" placeholder="标题" :value="query.title">
        </label>
        <label class="block">
          <span class="title">链接</span>
          <input type="text" class="input-text" placeholder="链接" :value="query.url">
        </label>
        <label class="block">
          <span class="title">摘要</span>
          <textarea type="text" class="input-text input-area" placeholder="摘要">{{query.summary}}</textarea>
        </label>
        <label class="block">
          <span class="title">标签</span>
          <input type="text" class="input-text" placeholder="多个用“|”隔开">
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
      query: {},
      form: {},
    }
  },
  created() {
    // 处理 url 参数
    console.log(this.$route)
    this.query = this.$route.query
  },

  methods: {
    async addBookmark() {
      const res = await this.$ajax.addBookmark(this.form)
      console.log(res)
      if (res.errno === 0) {
        const data = res.data

        // this.timestamp = res.timestamp
        console.log(data)
        this.close()
      } else {
        console.log(res.message)
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
