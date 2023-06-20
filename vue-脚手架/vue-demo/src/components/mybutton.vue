<template>
    <div>
        <div class="box" @click="click1">困</div>
        <div>困了{{ count }}次</div>

        <button @click="click2">触发组件的click事件</button>
    </div>
</template>

<script>
export default {
    data (){
        return {
            count:1
        }
    },
    methods:{
        click1(){
            this.count++
        },
        click2(){
            this.$emit('zidingyi',111,222)
        }
    }
}
</script>

<style>
.box{
    color: #bfa;
}
</style>