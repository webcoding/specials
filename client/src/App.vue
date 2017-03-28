<template>
  <div id="app">
    <transition>
      <router-view class="page"></router-view>
    </transition>
  </div>
</template>

<script>
// <v-dialog :is-show="dialog" :msg="tips" @cancel="dialog = false" @sure="sureDialog"></v-dialog>
// import hub from './store/hub'
// import vDialog from './components/Dialog'

export default {
  data() {
    return {
      dialog: false,
      dialogType: '',
      tips: '',  // ,'删除后无法恢复，确认删除吗？'
    }
  },
  components: {
    // Dialog,
  },
  created() {
    // var self = this
    // hub.$on('alertinfo', function (msg) {
    //   self.alertData(msg)
    // })
  },
  methods: {
    // alertData(msg = '您还没有选择答案哦！') {
    //   this.dialog = true
    //   this.dialogType = 'alert'
    //   this.tips = msg
    // },
    // clearData() {
    //   this.dialog = true
    //   this.dialogType = 'clear'
    //   this.tips = '清空后无法恢复，确认清空吗？'
    // },
    // delData(index, id) {
    //   this.dialog = true
    //   this.dialogType = 'del'
    //   this.tips = '删除后无法恢复，确认删除吗？'
    //   this.delInfo = {
    //     index: index,
    //     id: id,
    //   }
    // },
    // sureDialog() {
    //   const self = this
    //   switch (this.dialogType) {
    //     case 'alert':
    //       break
    //     case 'clear':
    //       // self.$store.dispatch('clearevent')
    //       this.EVENT_DO_CLEAR()
    //       break
    //     case 'del':
    //       this.EVENT_DO_DEL(self.delInfo)
    //       // self.$store.dispatch('delevent', self.delInfo)
    //       break
    //   }
    //   this.dialog = false
    // },
  },
}
</script>

<style lang="scss">
// 改动的项目基础样式
@import './styles/base.scss';

.coming {
  position: relative;
  top: 40%;
  // left: 50%;
  font-size: 30px;
  text-align: center;

  // transform: translate(-50%, -50%);
}

</style>
