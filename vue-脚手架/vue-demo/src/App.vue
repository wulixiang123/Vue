<template>
  <div>
    <div>{{ msg }}</div>
    <Child @qwer="qwerHandler"></Child>

    <Child @qwer="qwerHandler('丽丽',$event)"></Child>

    <!-- <Child @click="clickHandler"></Child> -->
    <!--
       .native事件修饰符,会把click变成一个原生事件并绑定到子组件的根标签上
       只有使用像click事件的原生事件名定义的事件才能变回原生的,自定义的不行
     -->
    <Child @click.native="clickHandler"></Child>
  </div>
</template>

<script>
// 自定义事件中的$event
// 结论:
// $event在原生事件中代表事件对象
//       在自定义事件中代表参数
// 为啥?
// 只要回调加小括号,底层就包裹了一层
// fns = function ($event) {  return qwerHandler('丽丽', $event) } 
import Child from './components/Child.vue'
export default {
  name: "App",
  components: { Child },
  data(){
    return {
      msg:'我爱你'
    }
  },
  methods:{
    qwerHandler(str1,str2){
      this.msg = str1 + str2
    },
    clickHandler(e){
      console.log('从自定义事件变为原生事件啦',e);
    }
  }
}
</script>

<style>

</style>