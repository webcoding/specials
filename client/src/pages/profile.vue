
<template>
  <div class="content">
    <h1>个人中心</h1>
    <button @click="logout">注销</button>
  </div>
</template>

<script>
// var logged
export default {
  data() {
    return {
    }
  },
  created() {

  },

  methods: {
    async logout(e) {
      e.preventDefault()
      const res = await this.$ajax.logout()
      console.log(res)
      if (res.errno === 0) {
        console.log(res)
        console.log('注销成功')

        // 刷新当前页面
        this.$router.go(0)
      } else {
        console.log(res.errmsg)
      }
    },
  },
}
</script>
