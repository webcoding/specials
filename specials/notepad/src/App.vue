<template>
  <div id="app">
    <n-header @tools="changePages"></n-header>
    <section class="container" :class="{'hide': table}">
      <n-add></n-add>
      <n-list></n-list>
      <n-sidebar :is-show="tools" @cleardialog="clearData" @opentable="table = true; tools = false"></n-sidebar>
    </section >
    <n-table @deldialog="delData" :is-show="table" @close="table = false"></n-table>
    <n-dialog :is-show="dialog" :msg="tips" @cancel="dialog = false" @sure="sureDialog"></n-dialog>
  </div>
</template>

<script>
import nHeader from './components/vHeader'
import nAdd from './components/EventAdd'
import nList from './components/EventList'
import nTable from './components/EventTable'
import nSidebar from './components/SideBar'
import nDialog from './components/Dialog'

export default {
  name: 'app',
  data() {
    return {
      tools: false,
      dialog: false,
      table: false,
      dialogType: '',
      tips: '',  // ,'删除后无法恢复，确认删除吗？'
      delInfo: {
        index: 0,
        id: 0,
      },
    }
  },
  components: {
    nHeader,
    nAdd,
    nSidebar,
    nDialog,
    nTable,
    nList,
  },
  methods: {
    clearData() {
      this.dialog = true
      this.dialogType = 'clear'
      this.tips = '清空后无法恢复，确认清空吗？'
    },
    delData(index, id) {
      this.dialog = true
      this.dialogType = 'del'
      this.tips = '删除后无法恢复，确认删除吗？'
      this.delInfo = {
        index: index,
        id: id,
      }
    },
    sureDialog() {
      const self = this
      switch (self.dialogType) {
        case 'clear':
          self.$store.dispatch('clearevent')
          break
        case 'del':
          self.$store.dispatch('delevent', self.delInfo)
          break
      }
      this.dialog = false
    },
    changePages() {
      console.log(this)
      if (this.table) {
        this.table = !this.table
      } else {
        this.tools = !this.tools
      }
    },
  },
}
</script>

<style lang="scss">
html,
body,
ul,
li,
input{
  margin:0;
  padding:0;
}
body{
  font-size: 16px;
  font-family: "Helvetica Neue", Helvetica, "microsoft yahei", arial, STHeiTi, sans-serif;
}
input,
button{
  -webkit-tap-highlight-color: transparent;
}
input[type=text]{
  -webkit-appearance: none;
}
button{
  padding:7px 0;
  outline: none;
  text-align: center;
  border-radius: 4px;
  box-sizing: border-box;
  font:{
    size: inherit;
    family: inherit;
  }
  cursor: pointer;
}
body,
#app{
  width:100%;
  overflow-x: hidden;
}
ul{
  list-style: none;
}
.container{
  width:100%;
  padding: 0 10px;
  max-width:800px;
  margin:auto;
  box-sizing: border-box;
  &.hide{
    display: none;
  }
}
</style>
