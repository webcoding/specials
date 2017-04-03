<template>
  <div id="app">
    <transition>
      <router-view class="page"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      dialogType: '',
      tips: '',  // ,'删除后无法恢复，确认删除吗？'
    }
  },
  components: {
    // vDialog,
  },
  created() {
  },
  methods: {
  },
}
</script>

<style lang="scss">
// 改动的项目基础样式
// @import './styles/base.scss';
html {
  font-size: 10px;
}
html {
  height: 100%;
}
body, #app {
  height: 100%;
}
</style>
