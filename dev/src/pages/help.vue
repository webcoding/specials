<template>
  <div class="content help-content">
    <h1>帮助中心 <small></small></h1>
    <p>开发者收藏——基于云智能为开发者服务</p>
    <h3>常见问题</h3>
    <ol>
      <li v-for="item in helpList">
        <h4>{{item.question}}</h4>
        <p>{{item.answer}}</p>
      </li>
    </ol>
    <!--<ul>
      <li><a href="###">与浏览器的“收藏夹”有什么区别？</a></li>
      <li><a href="###">如何共享收藏资源？</a></li>
      <li><a href="###">为什么添加收藏没有成功？</a></li>
      <li><a href="###">为什么导入收藏没有成功？</a></li>
      <li><a href="###">收藏的哪些内容无法获取快照？</a></li>
      <li><a href="###">如何共享搜藏资源？</a></li>
    </ul>
    <h3>用法集锦</h3>
    <ul>
      <li><a href="###">如何添加收藏？</a></li>
      <li><a href="###">如何管理收藏？</a></li>
      <li><a href="###">如何导入收藏？</a></li>
      <li><a href="###">如何使用收藏？</a></li>
      <li><a href="###">如何导出收藏？</a></li>
      <li><a href="###">使用收藏有哪些限制？</a></li>
    </ul>
    <h3>快捷添加收藏方式</h3>
    <ul>
      <li><a href="###">通过浏览器扩展进行收藏</a></li>
      <li><a href="###">通过鼠标右键菜单快速收藏</a></li>
      <li><a href="###">通过浏览器快捷链接进行收藏</a></li>
      <li><a href="###">通过网页嵌入链接快速收藏</a></li>
    </ul>-->
    <!--<pager></pager>-->
  </div>
</template>

<script>
// import { data as helpList } from '../store/mock/help'
import pager from '../components/pager'
export default {
  data() {
    return {
      helpList: [],
    }
  },
  components: {
    pager,
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      // debugger
      this.fetchHelps()
    },
    async fetchHelps() {
      const res = await this.$ajax.getHelps({})
      // console.log(res)
      if (res.errno === 0) {
        const data = res.data

        // this.timestamp = res.timestamp
        this.helpList = data.list
      } else {
        console.log(res.errmsg)
      }
    },
  },
}
</script>

<style lang="stylus">
.help-content
  li:hover
    background-color rgba(66, 185, 131, 0.2)
    box-shadow -10px 0 20px 20px rgba(66, 185, 131, 0.2)
</style>
