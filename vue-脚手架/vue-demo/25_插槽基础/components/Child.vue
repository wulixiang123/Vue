<template>
  <div>
    <h3>Child组件</h3>
    <slot>我是默认插槽</slot>
    <hr>
    <slot name="qwer">我是具名插槽</slot>
    <hr>
    <slot name="abc" :userinfo="userinfo" :intro="intro" msg="作用域插槽">作用域插槽</slot>
  </div>
</template>

<script>
export default {
    name:'Child',
    data(){
        return{
            userinfo:{
                username:'悟空',
                age:18
            },
            intro:'美猴王'
        }
    }
}
</script>

<style>

</style>