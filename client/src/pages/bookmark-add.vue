<template>
  <div class="content bookmark-update">
    <form class="bookmark-form" ref="form">
      <h2>添加到收藏夹</h2>
      <label class="block">
        <span class="title">标题</span>
        <input v-model.trim="bookmark.title" type="text" class="input-text" placeholder="标题" required min="2" max="50">
      </label>
      <label class="block">
        <span class="title">链接</span>
        <input v-model.trim="bookmark.url" type="text" class="input-text" placeholder="链接" required pattern="https?://.+">
      </label>
      <label class="block">
        <span class="title">摘要</span>
        <textarea v-model.trim="bookmark.description" type="text" class="input-text input-area" placeholder="补充描述信息，精准定位此收藏，便于以后检索使用" required></textarea>
      </label>
      <label class="block">
        <span class="title">标签</span>
        <input
          ref="input"
          v-bind:value="bookmark.tags"
          v-on:input="updateTags($event.target.value)"
          type="text"
          class="input-text"
          placeholder="多个用英文逗号隔开"
          required>
      </label>
      <label class="block">
        <span class="title"></span>
        <button class="btn" @click="addBookmark">提交</button>
        <!--<button @click="logout">注销</button>-->
      </label>
    </form>
    <div class="bookmark-been">
      <span class="text-error">{{warning.tip}}</span>
      <h4>{{warning.title}}</h4>
      <p>{{warning.url}}</p>
      <p>{{warning.description}}</p>
      <p>{{warning.tags}}</p>
    </div>
  </div>
</template>

<script>
// var logged
export default {
  data() {
    return {
      bookmark: {},
      warning: {},
    }
  },
  created() {
    // 处理 url 参数
    console.log(this.$route)
    this.bookmark = this.$route.query
  },

  filters: {
    // format(value) {
    //   return value.split(/[,|，]/).join(',')
    // },
  },

  methods: {
    updateTags(value) {
      const formattedValue = value.trim().split(/[,|，]+/).join(',')
      if (formattedValue !== value) {
        this.$refs.input.value = formattedValue
        // 通过 input 事件发出数值
      }
      this.$emit('input', formattedValue)
    },
    async addBookmark(e) {
      if (this.$refs.form.checkValidity()) {
        // e.preventDefault()
        // e.stopPropagation()
        const res = await this.$ajax.addBookmark(this.bookmark)
        const data = res.data || {}
        if (res.errno === 0) {
          /*global alert */
          alert('添加成功')
          console.log(data)
          window.close()
        } else {
          // 已经存在
          this.warning = {
            tip: res.errmsg,
            title: data.title,
            url: data.url,
            description: data.description,
            tags: data.tags,
          }
          console.log(res.errmsg)
        }
      }
    },
    async logout(e) {
      e.preventDefault()
      const res = await this.$ajax.logout()
      console.log(res)
      if (res.errno === 0) {
        console.log(res)
        console.log('注销成功')
      } else {
        console.log(res.errmsg)
      }
    },
  },
}
</script>

<style lang="stylus">

.bookmark-update
  width 500px
  margin 20px auto

.bookmark-form
  // + .text-tip
    //   position: absolute;
    //   right: 8px;
    //   top: 6px;
    //   &:after
    //     content: '*';
  // input:focus:invalid
  //   + .text-tip
  //     &:after
  //       content: 'error'
    //     color: red;

  label.block
    position relative
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
