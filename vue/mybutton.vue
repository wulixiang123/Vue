<template>
    <div>
        <div class="box" @click="click1">困</div>
        <div>困了{{ count }}次</div>
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
        }
    }
}
</script>

<style>
.box{
    color: #bfa;
}
</style>