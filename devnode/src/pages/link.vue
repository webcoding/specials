<template>
  <div></div>
</template>

<script>
import { decode } from '../utils/filters'
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
      var url = decode(this.$route.query.url)
      window.location.replace(url)
    },
  },
}
</script>
