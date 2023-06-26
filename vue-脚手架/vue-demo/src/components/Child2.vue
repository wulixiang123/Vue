<template>
  <div>
    <h3>Child2组件</h3>
    <slot :userinfo="userinfo" :intro="intro">作用域插槽</slot>
  </div>
</template>

<script>
export default {
    name:'Child2',
    data(){
        return{
            userinfo:{
                username:'八戒',
                age:16
            },
            intro:'天蓬'
        }
    }
}
</script>

<style>

</style>