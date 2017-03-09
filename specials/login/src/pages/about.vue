<template>
<div class="page">
  <img src="../assets/img/logo.png">
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>about me</p>
  </div>
</div>
</template>

<script>
let message = 'Welcome to Your Vue.js App'
export default {
  name: 'hello',
  data () {
    return {
      msg: message
    }
  }
}
</script>
