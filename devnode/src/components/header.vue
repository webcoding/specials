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
      <form id="search-form">
        <input
          type="search"
          ref="inputSearch"
          id="search-query-nav"
          class="search-query"
          v-model.trim="keyword"
          @keyup="get($event)"
          @keydown.down="selectDown()"
          @keydown.up="selectUp()"
          @keydown.enter="search()"
          autocomplete="off"
        >
        <button class="btn btn-search" @click="search()">搜索</button>
        <div class="search-auto-suggest">
          <transition-group class="listbox"
            tag="ul"
            v-if="keywords.length"
            name="itemfade"
            mode="out-in" v-cloak>
            <li class="item"
            v-for="(item, index) in keywords"
            :class="{active:index == now}"
            @click="selectClick(index)"
            @mouseenter="selectEnter($event, index)"
            :key="item.id">{{item.name}}</li>
          </transition-group>
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
      now: -1,
      searchIndex: 0,
    }
  },

  created() {
    this.watchQuery()
  },

  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'watchQuery',
  },

  methods: {
    watchQuery() {
      this.keyword = this.$route.query.q || this.$route.params.tag
    },
    // 键盘下事件
    selectDown() {
      this.now++
      if (this.now === this.keywords.length) {
        this.now = 0
      }
      // 更新input里面的文字
      this.keyword = this.keywords[this.now].name
    },
    // 键盘上事件
    selectUp() {
      console.log(this)
      this.now--
      if (this.now < 0) {
        this.now = 0
      }
      this.keyword = this.keywords[this.now].name
    },
    // ajax请求
    get(e) {
      // 如果按的是上键或者下键，就不进行ajax请求
      if (e.keyCode === 38 || e.keyCode === 40) {
        return
      }
      // 请求推荐的字段
      this.$ajax.getSupport({
        params: {
          keyword: this.keyword,
        },
      }).then((res) => {
        this.keywords = res.data.list
      })
    },
    search() {
      // 去搜索
      this.$router.push({ path: '/search', query: { q: this.keyword }})
      this.keywords = []
      this.$refs.inputSearch.blur()
    },
    selectClick(index) {
      this.keyword = this.keywords[index].name
      this.search()
    },
    // 接受子组件的参数
    getIndex(index) {
      this.searchIndex = index
    },
    selectEnter(e, index) {
      this.now = index
      this.searchIndex = index
    },
  },
}
</script>

<style lang="stylus">
/* transition-group有关的特效样式 */
.search-auto-suggest {
  transition: all 0.5s
}
.itemfade-enter,
.itemfade-leave-active {
  opacity: 0;
}
.itemfade-leave-active {
  position: absolute;
}
</style>
