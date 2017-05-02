<template>
  <div class="content guide index-guide">
    <h1>分类 <small>Tags</small></h1>
    <p>本质是分类聚合，其意义包含 category、classify、tag、tpoic、group、keyword，缩写暂用 t。合理的使用分类聚合能有效归档杂乱的信息，使结构更清晰合理，检索时也更加便捷。</p>
    <h2>分类
      <!--<small><router-link to="tags/all">全部</router-link></small>-->
    </h2>
    <div class="tags-list">
      <dl class="tag-item" v-for="item in tags" :key="item.name">
        <dt>{{item.name}}</dt>
        <dd>
          <router-link class="tag" v-for="tag in item.list" :to="`/t/${tag}`" :key="tag">{{tag}}</router-link>
        </dd>
      </dl>
    </div>
    <h2>分类聚合探究</h2>
    <p>实际用途中，分类是个不定的元素，所以不能够仅通过一种形式的划分就达到优良分类的目的，分类存在重叠或包含的情况</p>
    <p>比如开发语言分类、算法分类，这种分类不能覆盖所有的类目，也需要按使用者期望获取的知识点形式进行分类，不同分类方式各有优势，而且有时存在隶属关系需要子类，所以要先进行分类，之后还要再聚合处理（分类的集合）</p>
    <p>这样就能以聚合形式再次整理分类，处理分类重叠和包含的情况。推荐某种形式的聚合来展示分类，随时可以优化展示，而新增内容只是提交到分类里，而不是聚合里</p>
    <p>所以，这里使用tag 标签对内容进行标记作为分类分组，这里注意，聚合不会作为分类标识的推荐，这是一个整理过程。分类和聚合可以相互转化</p>
    <p>聚合类可以参考 https://www.gede123.com/ http://www.36zhen.com/setTag https://www.betterso.com/ https://my.betterso.com/document.html</p>
    <p>比较好的收藏类网站 https://getpocket.com https://www.instapaper.com https://raindrop.io</p>
  </div>
</template>

<script>
// import { data as tags } from '../store/mock/tags'
// console.log(tags)
export default {
  data() {
    return {
      tags: [],
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.fetchTags()
    },
    async fetchTags() {
      const res = await this.$ajax.getTags({})
      console.log(res)
      if (res.errno === 0) {
        const data = res.data

        // this.timestamp = res.timestamp
        console.log(data)
        this.tags = data.list
      } else {
        console.log(res.message)
      }
    },
  },
}
</script>

<style lang="stylus">

</style>
