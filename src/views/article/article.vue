<template>
  <div>文章列表
<ul>
  <li>
    文章标题，日期
  </li>
</ul>
分页
<div v-for="item in articles" :key="item.id">
  
  
  <h3>{{ item.title }}</h3>
<div>{{ item.writer }}</div>
<div v-html="item.html"></div>
<div>{{ item.pubtime }}</div>
</div>
  </div>
</template>

<script>
// import { setup } from "../../locales/index";
import articles from '../testjson/article.json'
export default {
  data() {
    return {
      articles: [{
"title":"",
"writer":"",
"username":"",
"content":"",
"html":"",
"pubtime":""
}]
    }
  },
  methods: {},
  mounted(){
    this.articles=articles;
  }
};
</script>

<style lang="scss" scoped>
</style>