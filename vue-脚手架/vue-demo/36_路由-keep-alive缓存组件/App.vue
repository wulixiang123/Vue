<template>
  <div>
    <div class="container">
        <div class="page-header">
            <h1>路由组件的练习</h1>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <!-- Nav tabs -->
            <ul class="nav nav-stacked col-md-6" role="tablist">
                <li role="presentation" class="active">
                  <!-- <router-link to="/url"> 跳转至/home-->
                  <router-link to="/home" aria-controls="home" role="tab" data-toggle="tab">Home</router-link>

                </li>
                <li role="presentation">
                  <router-link to="/about" aria-controls="About" role="tab" data-toggle="tab">About</router-link>
                </li>
            </ul>
            <!-- Tab panes -->
            <div class="tab-content col-md-6">
              <!--
            keep-alive 用来缓存组件用的,让组件不被销毁
            :max="2"   缓存组件的最大数量
            include 要缓存的组件,支持字符串、数组、正则
                include="Home"   字符串写法, 这个Home要和谁一样?
                                  这个Home和组件配置项中的name属性保持一致
                :include="['Home', 'About']"  数组写法
                :include="/Home|About/"  正则写法
            exclude 不被缓存的组件,和include的写法一样,也是三种
                

            组件中name属性的用途?
            1. 在keep-alive的include中使用
            2. 可以用作 dev-tools 中的组件搜索(浏览器)
            3. 全局注册使用
              Vue.component('组件名', 组件配置项)
              Vue.component(组件配置项.name, 组件配置项)
          -->
              <!-- <keep-alive :include="['Home', 'About']" exclude="" :max="10"> -->
              <keep-alive exclude="Home" :max="10">
                <!-- <router-view> 展示的位置 -->
                <router-view></router-view>
              </keep-alive>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
// 1. 静态页面搭建
//    之前写组件的步骤
//      1. 定义 - 定义一个.vue文件
//      2. 注册 - 在components配置想中注册(局部注册)   Vue.component('组件名', 组件配置项) 全局注册
//      3. 使用 - 在模板中使用标签名
//    路由写组件的步骤
//      1. 定义 - 定义.vue文件(路由组件的存放一般放在 pages 或 views文件夹下)
//      2. 注册 - 在new Router实例的时候,传入配置项,配置项中的routes用来注册路由组件
//      3. 使用 -
//              点击的位置
//                  点击的位置使用router-link
//              渲染的位置
//                  渲染的位置使用router-view
//      问: 我们现在写的路由跳转有router-link和router-view,他俩的作用是干嘛的?
//          router-link 是为了改变url的(改变路径的)
//          router-view 是为了渲染组件的
//      问: 没有router-link能不能渲染路由组件, 能手动输入url就可以展示
//          点击router-link仅仅是改变了url
//          注意: 每一次的url改变都会去路由表中进行匹配,匹配对应的路由(路由的routes配置项),匹配到之后在 router-view 的位置进行组件的渲染
//                而url的改变可以通过手动改
// 2. 初始化数据展示(无)
// 3. 交互
export default {
  name:'App',
  
  // mounted(){
  //   console.log(this.$router);
  // }
}
</script>

<style scoped>
  
</style>