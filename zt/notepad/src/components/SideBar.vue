<template>
  <div class="event-tools" :class="{'show-event-tools':isShow}">
    <ul class="tools-sidebar">
      <li>
        <button class="tools-btn" @click="downloadData('notepad.txt',getDate)">下载数据</button>
      </li>
      <li>
        <button class="tools-btn" @click="openTable">编辑数据</button>
      </li>
      <li>
        <button class="tools-btn" @click="showDialog">清空数据</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return { }
  },
  props: ['isShow'],
  computed: {
    getDate() {
      const self = this
      return JSON.stringify(self.$store.state)
    },
  },
  methods: {
    showDialog() {
      this.$emit('cleardialog')
    },
    openTable() {
      this.$emit('opentable')
    },
    downloadData(fileName, content) {
      const aTag = document.createElement('a')
      const blob = new Blob([content])
      aTag.download = fileName
      aTag.href = URL.createObjectURL(blob)
      aTag.click()
      URL.revokeObjectURL(blob)
    },
  },
}
</script>

<style lang="scss">
.event-tools{
  position: fixed;
  top:70px;
  left:0;
  bottom:0;
  width:250px;
  padding:30px 20px;
  box-sizing: border-box;
  transform: translateX(-250px);
  transition: transform .3s;
  text-align: center;
  background: rgba(0,0,0,.5);
  font-size: 16px;
  &.show-event-tools{
    transform: translateX(0);
  }
  .tools-sidebar{
    & > li{
      line-height: 60px;
    }
  }
  .tools-btn{
    width:100px;
    height:40px;
    line-height: 26px;
    color: #fff;
    border:1px solid #20a0ff;
    background: #20a0ff;
    transition: background .3s ease-in;
    &:hover{
      background: #4db3ff;
    }
  }
  pre{
    white-space: pre-wrap;
    font:{
      size: 14px;
      family:  arial,"microsoft yahei";
    }
    line-height: 20px;
  }
}

</style>
