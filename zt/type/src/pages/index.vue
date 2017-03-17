<template>
  <div class="page-zt-type">
    <x-header :header="headerData"></x-header>
    <div class="zt-type-banner">
      <img src="http://img.haoshiqi.net/merchantadmin/image20170215/mad9f9b506e4ef0411a893c64a4f45d098_388X620" width="100%" alt="">
    </div>
    <div class="zt-type-list">
      <div class="zt-typeitem">
        <div class="img"><span>img</span></div>
        <div class="text">
          <p><span class="price">24.5</span><del class="price">45.5</del></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import XHeader from '@common/components/x-header'
import list from '../components/list'

export default {
  components: {
    list,
    XHeader,
  },
  computed: {
    headerData: function header() {
      return {
        title: '数据生成标题',
        left: [
          {
            text: '返回',
            link: '/',
          },
        ],
      }
    },
  },
  created() {
    // console.log(this.$store.state)
  },
}
</script>

<style lang="scss">
.zt-type {
  font-size: 12px;
  .text {
    border: 1px solid red;
    border-width: 1px 2px 3px 4px;
  }
}
.zt-type-list {

}
.zt-type-item {

}
</style>
