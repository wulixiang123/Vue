<template>
  <div>
    <h3>App组件</h3>
    <button @click="comp = mybutton">显示mybutton</button>
    <button @click="comp = mycomp">显示mycomp</button>
    <component :is="comp"></component>
  </div>
</template>

<script>
// 引入的是组件抛出的配置项
// is总共可以放两种值
// 1. 字符串,字符串必须是已经注册的组件名
// 2. 配置项,拿着组件的配置项直接渲染
import mybutton from '@/components/mybutton'
import mycomp from '@/components/mycomp'
export default {
name:"App",
data(){
  return {
    mybutton,// 存当前组件的配置对象
    mycomp,
    comp:null
  }
}
}
</script>

<style scoped>

</style>