<template>
  <page>
    <group title="404" padded>
      <p>页面没找到</p>
      <button @click="goBack">点击返回</button>
    </group>
  </page>
</template>

<script>
export default {
  name: 'error404',
  methods: {
    // goBack() {
    //   window.history.go(-1)
    // },
  },
}
</script>
