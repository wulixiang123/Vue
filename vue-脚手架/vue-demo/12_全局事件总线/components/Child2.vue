<template>
  <div>
    <h3>Child2组件</h3>
    <div>text:{{ text }}</div>
  </div>
</template>

<script>
export default {
  name:"Child2",
  data(){
    return {
      text:''
    }
  },
  mounted(){
    this.$bus.$on('qwer',this.qwerHandler)
  },
  methods:{
    qwerHandler(str){
      console.log('执行了qwer事件',str);
      this.text = str
    }
  }
}
</script>

<style>

</style>