<template>
  <div id="header">
    <div id="header-top">
      <!--<div id="menu">
        <x-svg type="menu"></x-svg>
      </div>-->
      <a class="logo" href="/" title="开发者收藏">
        <x-svg class="logo-light" type="devnode_logo"></x-svg>
        <span class="text">DevNode</span>
      </a>
      <form id="search-form" action="/search">
        <input type="text" id="search-query-nav" class="search-query" v-model.trim="keyword">
        <button class="btn btn-search">搜索</button>
        <div class="search-auto-suggest">
          <ul class="listbox" v-if="keywords.length">
            <template v-for="keyword in keywords">
              <li class="item">{{keyword}}</li>
            </template>
          </ul>
        </div>
      </form>
    </div>
    <main-menu id="nav"></main-menu>
  </div>
</template>

<script>
import xSvg from './svg'
import mainMenu from './main-menu'

export default {
  components: {
    xSvg,
    mainMenu,
  },

  data() {
    return {
      keyword: '',
      keywords: [],
    }
  },

}
</script>

<style lang="stylus">

</style>
