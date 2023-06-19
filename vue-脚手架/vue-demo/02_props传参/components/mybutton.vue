<template>
    <div class="container">
        <div class="box" @click="click1">困</div>
        <div>困了{{ count }}次</div>

        <input type="text" v-model="qwer">
        <div>接收到的父组件的qwer:{{ qwer }}</div>
        <input type="text" v-model="num">
        <div>接收到的父组件的num:{{ num }}</div>

        <div>接收到了父组件的userInfo:{{ userInfo.username }}</div>
        <div>接收到了父组件的userInfo:{{ userInfo.age }}</div>

        <div>接收自己的默认值:{{ abc }}</div>

        <button @click="changeUserInfo">修改userInfo</button>
    </div>
</template>

<script>
export default {
props:{
    qwer:{
        type:String,
        required:true
    },
    abc:{
        type:String,
        default:'杨幂'
    },
    num:{
        type:Number
    },
    userInfo:{
        type:Object
    },
    xyz:{
        type:Function
    }
},
data(){
    return {
        count:1
    }
},
methods:{
    click1(){
        this.count++
    },
    changeUserInfo(){
        // ---------------------------
            // this.userInfo = {
            //     username: '王翠花',
            //     age: 22
            // }

            // 这样可以改,但是违反单向数据流
            // this.userInfo.username = '旺财'
            // this.userInfo.age = 3

        this.xyz()
    }
},
    // mounted() {
    //     console.log(this) // this是当前组件
    // }
}
</script>

<style>
.box{
    color: #bfa;
}
.container{
border: 1px solid red;
}
</style>