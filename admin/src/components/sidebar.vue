<template>
  <div class="sidebar">
    <main-menu class="main-menu"></main-menu>
    <div class="list">
      <div class="main-sponsor">
        <span>打赏</span><br>
        <router-link to="/support" class="text-center">
          <img src="../assets/img/alipay-code.png">
          <p class="no-margin">支付宝❤️打赏</p>
        </router-link>
      </div>
      <router-link class="become-backer" to="/support">榜上有名</router-link>
      <!--<h2>
        <select class="version-select">
          <option value="SELF" selected>2.0</option>
          <option value="v1">1.0</option>
        </select>
      </h2>-->
      <ul class="menu-root">
        <li><h3>基础</h3></li>
        <li>
          <router-link to="/test" class="sidebar-link">test link</router-link>
          <router-link to="/test" class="sidebar-link current">test link</router-link>
        </li>
        <li><h3>进阶</h3></li>
        <li><h3>迁移</h3></li>
        <li><h3>更多</h3></li>
      </ul>
    </div>
  </div>
</template>

<script>
import mainMenu from './main-menu'

export default {
  components: {
    mainMenu,
  },
}
</script>
