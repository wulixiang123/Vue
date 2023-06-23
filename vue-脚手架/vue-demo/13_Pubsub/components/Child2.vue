<template>
  <div>
    <h3>Child2组件</h3>
    <div>text:{{ text }}</div>
  </div>
</template>

<script>
import Pubsub from 'pubsub-js'
export default {
  name:"Child2",
  data(){
    return {
      text:''
    }
  },
  mounted(){
    // this.$bus  -> vm实例
    // this.$bus.$on('qwer', this.qwerHandler)
    Pubsub.subscribe('qwer',this.qwerHandler)
  },
  methods:{
    qwerHandler(messageType,str){
      console.log('执行了qwer事件',messageType,str);
      this.text = str
    }
  }
}
</script>

<style>

</style>