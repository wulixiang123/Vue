<template>
  <div class="row">
    <h3 v-if="isFirst">欢迎光临</h3>
    <h3 v-else-if="isLoading">加载中</h3>
    <h3 v-else-if="errorMessage">{{ errorMessage }}</h3>
    <div
      v-else
      class="card"
      v-for="item in list"
      :key="item.id"
    >
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
// 页面总共分为以下几种状态
// 1. 刚进入页面 - 欢迎页展示"欢迎光临"   "请输入内容进行搜索"
// 2. 发送请求的过程中 - loading
// 3. 请求成功数据之后 - 列表展示状态
// 4. 请求失败 - 页面展示失败的状态
// -------------------------------------
// 跨域:
// 违反同源策略的叫跨域
// 同源策略:
// 协议、域名、端口号一致叫同源策略
// 什么情况下会发生跨域?
// 跨域只存在于浏览器当中,浏览器发请求有很多种,例如:
//    a标签的href、form表单的action  这些都是普通请求(不会跨域)
//    只在ajax请求会发生跨域
//    问: 服务之间会发生跨域吗?
//    不会
//    什么是服务?
//    
import axios from 'axios'
export default {
  name: "Main",
  data() {
    return {
      isFirst: true, // 默认是第一次进入页面,当发过请求之后就变为false
      isLoading: false, // 当发请求的时候变成true,请求成功后变为false,默认是false不发请求
      errorMessage: '',  // 收集错误信息在页面展示,只有在请求失败的时候里面有值
      list: []
    }
  },
  mounted() {
    this.$bus.$on('searchList', this.getList)
  },
  methods: {
    async getList(keyword) {
      // console.log(keyword)
      // console.dir(keyword)
      // console.info(keyword)
      // console.warn(keyword)
      // console.error(keyword)

      this.isFirst = false
      this.isLoading = true

      // 1. 下载安装json-server
      //    npm  i  json-server -D
      // 2. 准备db.json文件(粘贴我的就行)
      // 3. 启动json-server服务
      //    json-server --watch ./db.json
      // 这样就可以使用  http://localhost:3000/getUserList 这个接口,和我们正常的接口返回的数据一样


      try {
        let res = await axios.get(`https://api.github.com/search/users?q=${ keyword }`)

        this.list = res.data.items.map(item => {
          return {
            id: item.id,
            avatar_url: item.avatar_url,
            html_url: item.html_url,
            username: item.login
          }
        })

        this.isLoading = false

      } catch (error) {
        console.error(error)
        this.isLoading = false
        this.errorMessage = error.message || '获取列表信息失败'
      }


      
      // axios.get(`https://api.github.com/search/users?q=${ keyword }`)
      // .then(res => {
      //   console.log(res)

      //   this.list = res.data.items.map(item => {
      //     return {
      //       id: item.id,
      //       avatar_url: item.avatar_url,
      //       html_url: item.html_url,
      //       username: item.login
      //     }
      //   })

      //   console.log(this.list)
      //   this.isLoading = false

      // })
      // .catch(err => {
      //   console.error(err)
      //   this.isLoading = false
      //   this.errorMessage = err.message || '获取列表信息失败'
      // })






      // ----------------------------------------------------------------------------
      // this.$http.get(`https://api.github.com/search/users?q=${ keyword }`)
      // .then(res => {
      //   this.list = res.body.items.map(item => {
      //     return {
      //       id: item.id,
      //       avatar_url: item.avatar_url,
      //       html_url: item.html_url,
      //       username: item.login
      //     }
      //   })
      //   this.isLoading = false
      // })
      // .catch(err => {
      //   console.error(err)
      //   this.isLoading = false
      //   this.errorMessage = err.message || '获取列表信息失败'
      // })



    }
  }
};
</script>

<style scoped>
</style>