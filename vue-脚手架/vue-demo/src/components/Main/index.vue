<template>
  <div class="row">
    <h2 v-if="isFirst">欢迎光临</h2>
    <h3 v-else-if="isLoading">加载中...</h3>
    <h3 v-else-if="errorMessage">{{ errorMessage }}</h3>
    <div v-else class="card" v-for="item in list" :key="item.id">
      <a :href="item.html_url" target="_blank">
        <img
          :src="item.avatar_url"
          style="width: 100px"
        />
      </a>
      <p class="card-text">{{ item.username }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Main",
  data(){
    return {
      isFirst: true, // 默认是第一次进入页面,当发过请求之后就变为false
      isLoading: false, // 当发请求的时候变成true,请求成功后变为false,默认是false不发请求
      errorMessage: '',  // 收集错误信息在页面展示,只有在请求失败的时候里面有值
      list:[]
    }
  },
  mounted(){
    this.$bus.$on('searchList',this.getList)
  },
  methods:{
    getList(keyword){
      // console.log(keyword)
      // console.dir(keyword)
      // console.info(keyword)
      // console.warn(keyword)
      // console.error(keyword)

      this.isFirst = false
      this.isLoading = true
      axios.get(`https://api.github.com/search/users?q=${ keyword }`)
      .then(res=>{
        console.log(res);
        this.list = res.data.items.map(item=>{
          return {
            id:item.id,
            avatar_url:item.avatar_url,
            html_url:item.html_url,
            username:item.login
          }
        })
        console.log(this.list);
        this.isLoading = false
      })
      .catch(err=>{
        console.error(err);

      })
    }
  }
};
</script>

<style scoped>
</style>