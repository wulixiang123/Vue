<template>
    <div class="box">
        <div>用户名:{{ user.username }}</div>
        <div>个人介绍:{{ user.intro }}</div>
        <slot :row="user.accountJoin"></slot>
    </div>
</template>

<script>
export default {
    name:'UserInfo',
    props:['user']
}
</script>

<style scoped>
.box{
  border: 1px solid #333;
  padding: 20px;
  border-radius: 10px;
  margin: 10px 0;
}
.icon{
    margin-left: 10px;
}
</style>