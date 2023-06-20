<template>
  <div>
    <button @click="click1">触发父组件绑定的qwer</button>
    <button>触发父组件绑定的click事件</button>
    <!-- <button @click="btnHandler">触发父组件绑定的click事件</button> -->
  </div>
</template>

<script>
export default {
    name:"Child",
    methods:{
        click1(){
            this.$emit('qwer','燕子','娜娜')
        },
        // btnHandler() {
        //     this.$emit('click')
        // }
    }
}
</script>

<style>

</style>