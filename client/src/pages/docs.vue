<template>
  <div class="content">
    <h1>文档镜像 <small>Docs</small></h1>
    <p>各种文档的镜像，支持语言选择、文档查询快速浏览、导航等</p>
    <pager></pager>
  </div>
</template>

<script>
import pager from '../components/pager'
export default {
  components: {
    pager,
  },
}
</script>
