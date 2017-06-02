<template>
  <div></div>
</template>

<script>
export default {
  // 这里可以改为服务端中转
  created() {
    this.jumpUrl()
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'jumpUrl',
  },
  methods: {
    jumpUrl: function () {
      window.location.replace(this.$route.query.url)
    },
  },
}
</script>
