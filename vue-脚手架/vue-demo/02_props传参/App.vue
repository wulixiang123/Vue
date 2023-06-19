<template>
  <div>
    <div>msg:{{ msg }}</div>
    <div>username:{{ userInfo.username }}</div>
    <div>age:{{ userInfo.age }}</div>
      <mybutton :qwer="msg" :num="num" :userInfo="userInfo" :xyz="change"></mybutton>
      <!-- <mybutton :abc="abc" :qwer="msg" :num="num" :userInfo="userInfo" :xyz="change"></mybutton> -->
  </div>
</template>

<script>
// props传参 - 父子组件之间的通信
// 1. 给子组件标签使用 v-bind 绑定属性
// 2. 在子组件标签中接收父组件传过来的参数
//    使用 props 配置项来接
// ------------------
// props用于父组件给子组件传参
// 传给子组件一个字符串,子组件不能修改
// 这个规则叫单向数据流,单向下行的数据流向叫单向数据流
// 传对象给子组件,对象的地址不能改,对象的属性可以改(但是不推荐)
// ------------------
// 如果非要改父组件传过来的数据
// 传一个函数到子组件,子组件调用这个函数,
// 在函数中父组件改自己的数据就没有问题
// ------------------
// 总结:
// props传参:
// 一、 函数数据类型
//      目的是为了让子组件调用这个函数,父组件修改数据
// 二、 非函数数据类型
//      1. 基本数据类型 - 子组件不能修改
//      2. 引用数据类型 - 子组件不能修改地址,能修改属性(但是违反单向数据流规则)
import mybutton from './components/mybutton.vue'
export default{
  components:{
      mybutton
  },
  data(){
    return {
      msg:'哦吼',
      num:1,
      abc:'幂幂',
      userInfo:{
        username:'沈腾',
        age:38
      }
    }
  },
  methods:{
    change(){
      console.log(111);
      this.userInfo={
        username:'常威',
        age:22
      }
    }
  }
}
</script>
<style>

</style>