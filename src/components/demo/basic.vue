<template>
  <page class="page-xheader">
    <div class="page-header">
      <h3>示例页面 <small>demo</small></h3>
    </div>
    <x-header title="标题" />
    <x-header title="主标题" subTitle="副标题" />

    <x-header title="标题超长的话就会隐藏，也可以开启滚动标题">
      <router-link class="x-header-item" to="/" slot="left">返回</router-link>
      <router-link class="x-header-item" to="/" slot="right">首页</router-link>
    </x-header>

    <x-header title="标题超长的话就会隐藏，也可以开启滚动标题">
      <router-link class="x-header-item" to="/" slot="left">返回</router-link>
      <router-link class="x-header-item" to="/" slot="right">电话</router-link>
      <router-link class="x-header-item" to="/" slot="right">首页</router-link>
    </x-header>

    <x-header :header="header" title="通过数据自动生成 header"></x-header>

    <p>TODO:还需要支持 header 位置限制下拉选择、tab 切换、搜索框等功能</p>
  </page>
</template>

<script>
export default {
  data: function () {
    return {
      title: '标题',
      header: {
        title: '数据标题',
        left: [
          {
            text: '返回',
            link: '/',
          },
        ],
        right: [
          {
            text: '设置',
            link: '/',
          },
          {
            text: '首页',
            link: '/',
          },
        ],
      },
    }
  },
  components: {},
  computed: {},
  ready: function () {
    console.log(111);
  },
  attached: function () {},
  methods: {
    // header: function(){
    //   return this.header1;
    // },
  },
}
</script>

<style lang="css">
.page-xheader .x-header{
  margin-bottom: 1rem;
}
</style>
