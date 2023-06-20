<template>
  <div>
    <button @click="click1">触发父组件绑定的qwer</button>
    <button @click="$emit('abc')">触发abc事件</button>
  </div>
</template>

<script>
export default {
    name:"Child",
    methods:{
        click1(){
            this.$emit('qwer')
        }
    }
}
</script>

<style>

</style>