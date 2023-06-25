<template>
  <div class="container">
    <button @click="getUserinfo">测试跨域</button>
    <hr>
    <Header></Header>
    <Main></Main>
  </div>
</template>

<script>
// 1. 静态页面搭建
// 2. 初始化数据展示(无)
// 3. 交互
//    收集input框输入的内容,点击按钮发送请求,获取用户数据,进行展示
import axios from 'axios';
import Header from '@/components/Header'
import Main from '@/components/Main'
export default {
  name: "App",
  components: { Header, Main },
  methods: {
    getUserinfo() {
      // 解决跨域的方式:
      // 1. jsonp  -- 只支持get请求
      // 2. CORS 头设置(后端设置,允许跨域)
      // 3. 配置代理
      //    什么是代理?
      //    把发请求的过程交给别人代理
      //    
      // axios.get(`http://localhost:3000/getUserinfo`)
      axios.get(`http://localhost:8080/api/getUserinfo`)
      .then(res => {
        console.log('测试跨域的结果', res)
      }).catch(err => {})
    }
  }
};
</script>

<style scoped>
</style>