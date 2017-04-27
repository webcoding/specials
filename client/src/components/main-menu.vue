<template>
  <ul>
    <li><router-link to="/explore" class="nav-link">探索</router-link></li>
    <li><router-link to="/bookmarks" class="nav-link">收藏</router-link></li>
    <!--<li><router-link to="/read" class="nav-link">阅读</router-link></li>-->
    <!--<li><router-link to="/docs" class="nav-link">文档镜像</router-link></li>-->
    <li><router-link to="/tags" class="nav-link">标签</router-link></li>
    <!--<li><router-link to="/features" class="nav-link">特性</router-link></li>-->
    <li class="nav-dropdown-container">
      <span class="nav-link">关于</span><span class="arrow"></span>
      <ul class="nav-dropdown">
        <li><router-link to="changelog" class="nav-link">Changelog</router-link></li>
        <li><router-link to="help" class="nav-link">帮助中心</router-link></li>
        <li><router-link to="about" class="nav-link">工作</router-link></li>
        <li><a :href="addBookmark" class="nav-link">快捷收藏</a></li>
        <li><a :href="addNote" class="nav-link">云笔记</a></li>
      </ul>
    </li>
    <!--<li class="nav-dropdown-container ecosystem">
      <a class="nav-link">生态系统</a><span class="arrow"></span>
      <ul class="nav-dropdown">
        <li><h4>帮助</h4></li>
        <li><ul>
          <li><a href="http://forum.vuejs.org" class="nav-link" target="_blank">论坛</a></li>
          <li><a href="https://gitter.im/vuejs/vue" class="nav-link" target="_blank">聊天室</a></li>
          <li><a href="https://github.com/vuejs-templates" class="nav-link" target="_blank">模板</a></li>
        </ul></li>
        <li><h4>信息</h4></li>
        <li><ul>
          <li><a href="https://twitter.com/vuejs" class="nav-link" target="_blank">Twitter</a></li>
          <li><a href="https://medium.com/the-vue-point" class="nav-link" target="_blank">博客</a></li>
          <li><a href="https://vuejobs.com/?ref=vuejs" class="nav-link" target="_blank">工作</a></li>
        </ul></li>
        <li><h4>核心插件</h4></li>
        <li><ul>
          <li><a href="https://router.vuejs.org" class="nav-link" target="_blank">Vue Router</a></li>
          <li><a href="https://vuex.vuejs.org" class="nav-link" target="_blank">Vuex</a></li>
        </ul></li>
        <li><h4>资源列表</h4></li>
        <li><ul>
          <li><a href="https://github.com/vuejs" class="nav-link" target="_blank">官方仓库</a></li>
          <li><a href="https://github.com/vuejs/awesome-vue" class="nav-link" target="_blank">Vue 资源</a></li>
        </ul></li>
      </ul>
    </li>
    <li class="nav-dropdown-container language">
      <a class="nav-link">多语言</a><span class="arrow"></span>
      <ul class="nav-dropdown">
        <li><a href="https://cn.vuejs.org" class="nav-link" target="_blank">中文</a></li>
        <li><a href="https://vuejs.org" class="nav-link" target="_blank">English</a></li>
        <li><a href="https://jp.vuejs.org" class="nav-link" target="_blank">日本語</a></li>
        <li><a href="https://ru.vuejs.org" class="nav-link" target="_blank">Русский</a></li>
        <li><a href="https://kr.vuejs.org" class="nav-link" target="_blank">한국어</a></li>
      </ul>
    </li>-->
  </ul>
</template>

<script>
import quicks from '../config/quick'

export default {
  data() {
    return {
      addBookmark: quicks.bookmarks,
      addNote: quicks.notemarks,
    }
  },
  components: {
  },
}
</script>
