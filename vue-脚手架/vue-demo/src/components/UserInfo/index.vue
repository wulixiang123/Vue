<template>
    <div class="box">
        <div>用户名:{{ user.username }}</div>
        <div>个人介绍:{{ user.intro }}</div>
        <div v-if="user.accountJoin.wechat">
            <div>
                <span>关联平台</span>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-weixin"></use>
                </svg>
            </div>
            <div>账号:{{ user.accountJoin.wechat }}</div>
        </div>

        <div v-if="user.accountJoin.qq">
            <div>
                <span>关联平台</span>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-QQ"></use>
                </svg>
            </div>
            <div>账号:{{ user.accountJoin.qq }}</div>
        </div>

        <div v-if="user.accountJoin.sina">
            <div>
                <span>关联平台</span>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-xinlang"></use>
                </svg>
            </div>
        <div>账号:{{ user.accountJoin.sina }}</div>
        <div>邮箱:{{ user.accountJoin.email }}</div>
        </div>
        
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