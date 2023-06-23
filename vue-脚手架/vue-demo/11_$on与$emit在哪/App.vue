<template>
  <div>
    <div>msg:{{ msg }}</div>
    <Child @qwer="qwerHandler"></Child>
    <Child @qwer="msg=$event"></Child>
  </div>
  
</template>

<script>
import Child from '@/components/Child'
export default {
  name:"App",
  components:{ Child },
  data(){
    return {
      msg:"我爱你"
    }
  },
  mounted(){
    console.log('App组件this:',this);
    console.log('App组件.__proto__:',this.__proto__);
    console.log('App组件.__proto__.__proto__',this.__proto__.__proto__);
  },
  methods:{
    qwerHandler(str){ 
      this.msg = str
      console.log('11');
    }
  }
}
</script>

<style>

</style>