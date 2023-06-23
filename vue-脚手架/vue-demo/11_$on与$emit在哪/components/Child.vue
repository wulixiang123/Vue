<template>
  <button @click="click1">触发App组件绑定的qwer并修改msg</button>
</template>

<script>
export default {
    name:'Child',
    methods:{
        click1(){
            this.$emit('qwer','燕子')
        }
    }
}
</script>

<style>

</style>