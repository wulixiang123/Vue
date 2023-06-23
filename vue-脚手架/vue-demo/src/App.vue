<template>
  <div class="container">
    <Header></Header>
    <Main></Main>
  </div>
</template>

<script>
// 1. 静态页面搭建
// 2. 初始化数据展示(无)
// 3. 交互
//    收集input框输入的内容,点击按钮发送请求,获取用户数据,进行展示
import Header from '@/components/Header'
import Main from '@/components/Main'
export default {
  name: "App",
  components: { Header, Main },
};
</script>

<style scoped>
</style>