<template>
  <div>
    <h3>Child组件</h3>
    <button @click="click1">按钮</button>
    <div>msg:{{ msg }}</div>
  </div>
</template>

<script>
export default {
    name:"Child",
    data(){
        return{
            msg:"我爱你"
        }
    },
    methods:{
        click1(){
            this.$bus.$emit('qwer',this.msg)
        }
    }
}
</script>

<style>

</style>