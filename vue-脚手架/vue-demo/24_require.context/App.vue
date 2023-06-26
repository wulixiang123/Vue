<template>
  <div>
    <h3>App组件</h3>
    <button
      v-for="(comp, compName) in compObj"
      :key="compName"
      @click="mycomp = comp"
    >{{ compName }}</button>
    <component :is="mycomp"></component>
  </div>
</template>

<script>
const ctx = require.context('./components', false, /\.vue$/)
let obj = {}
ctx.keys().forEach(path => {
  let comp = ctx(path).default
  let compName = path.replace('./', '').replace('.vue', '')
  obj[compName] = comp
})
export default {
name:"App",
data(){
  return {
    mycomp:null
  }
},
computed: {
    compObj() {
      let obj = {}

      ctx.keys().forEach(path => { // 第一次循环得到的是 './Detail.vue' 第二次循环得到的 ./Home.vue

        // 组件配置项
        let comp = ctx(path).default // 拿到组件的配置项
        
        // 组件名
        let compName = path.replace('./', '').replace('.vue', '')

        obj[compName] = comp

      })

      return obj
    }
  }
}
</script>

<style scoped>

</style>