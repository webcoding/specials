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
      <form id="search-form" @submit.prevent="search()">
        <input
          type="text"
          id="search-query-nav"
          class="search-query"
          v-model.trim="keyword"
          @focus="focusInput($event)"
          @keyup="searchTips($event)"
          @keydown.down="selectDown()"
          @keydown.up="selectUp()"
          @keydown.enter="search()"
          autocomplete="off"
        >
        <button class="btn btn-search">搜索</button>
        <div class="search-auto-suggest" @click="blurInput" v-show="focus && keyword">
          <transition-group class="listbox"
            tag="ul"
            v-show="searchTipList"
            name="itemfade"
            mode="out-in" v-cloak>
            <li class="item"
            v-for="(item, index) in keywords"
            :class="{active:index == now}"
            @click.prevent="selectClick(index)"
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
import debounce from 'lodash/debounce'

export default {
  components: {
    xSvg,
    mainMenu,
  },

  data() {
    return {
      focus: false,
      keyword: '',
      test: '',
      keywords: [],
      now: -1,
      searchIndex: 0,
    }
  },

  computed: {
    searchTipList() {
      return (this.focus && this.keyword && this.keywords.length)
    },
  },

  created() {
    this.watchQuery()
    // document.addEventListener('scroll', debounce(this.fetchSupport, 300, {
    //   maxWait: 1000,
    // }), false)
  },

  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'watchQuery',
  },

  methods: {
    watchQuery() {
      this.keyword = this.$route.query.q || this.$route.params.tag || ''
      this.keyword = this.keyword.trim()
    },
    focusInput(e) {
      this.focus = true
    },
    blurInput() {
      this.focus = false
    },
    // 键盘下事件
    selectDown() {
      // this.focus = true
      this.now++
      if (this.now === this.keywords.length) {
        this.now = 0
      }
      // 更新input里面的文字
      this.keyword = this.keywords[this.now].name
    },
    // 键盘上事件
    selectUp() {
      // this.focus = true
      this.now--
      if (this.now < 0) {
        this.now = 0
      }
      this.keyword = this.keywords[this.now].name
    },
    searchTips(e) {
      // ajax请求
      // 如果按的是上键或者下键，就不进行ajax请求
      if (e && (e.keyCode === 38 || e.keyCode === 40)) {
        return
      }
      this.fetchSupport()
    },
    fetchSupport: debounce(function () {
      // this.fetchSupport(e)
      // 请求推荐的字段
      // this.keyword = this.keyword.trim()
      this.$ajax.getSupport({
        params: {
          keyword: this.keyword.trim(),
        },
      }).then((res) => {
        this.keywords = res.data.list
      })
    }, 300, {
      maxWait: 1000,
    }),
    search() {
      // // 去搜索
      // this.$router.push({ path: '/search', query: { q: this.keyword.trim() }})
      // // this.keywords = []
      // this.focus = false
      // this.$refs.inputSearch.blur()
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
// input.search-query[type="text" i]::-webkit-search-cancel-button {
//   -webkit-appearance: searchfield-cancel-button;
//   display: block;
//   -webkit-margin-start: 1px;
//   opacity: 0;
//   pointer-events: none;
//   -webkit-user-modify: read-only;
//   flex: 0 0 auto;
// }
/* transition-group有关的特效样式 */
.search-auto-suggest
  transition all 0.5s
  &::before
    content ''
    position absolute
    z-index 1
    width 1000rem
    height 1000rem
    transform translate(-50%, -50%)
    opacity 0
  .listbox
    position relative
    z-index 2

.itemfade-enter
.itemfade-leave-active
  opacity 0

.itemfade-leave-active
  position absolute

</style>
