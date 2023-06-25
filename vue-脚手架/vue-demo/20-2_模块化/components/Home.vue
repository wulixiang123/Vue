<template>
  <div class="box">
    <h3>Home组件</h3>
    <div>count:{{ $store.state.home.count }}</div>
    <div>hundredfold:{{ $store.getters.hundredfold }}</div>
    <button @click="addHandler">自增</button>
    <hr>
    <div>count:{{ count }}</div>
    <div>hundredfold:{{ hundredfold }}</div>
    <button @click="increment">自增</button>
  </div>
</template>

<script>
// state被模块化了,写法不同,其余属性写法和之前一样
// state普通写法
//      this.$store.state.模块名.xxx
// state辅助函数写法
// ...mapState({
//    count:state => state.home.count//固定写法
//        }),
import {mapState,mapGetters,mapActions} from 'vuex'
export default {
    name:'Home',
    computed:{//计算属性
        ...mapState({
            count:state => state.home.count//固定写法
        }),
        ...mapGetters(['hundredfold'])
    },
    mounted(){
        this.$store
    },
    methods:{
        addHandler(){
            this.$store.dispatch('increment')
        },
        ...mapActions(['increment'])
    }
}
</script>

<style>
    .box{
        padding: 20px;
        border: 1px solid red;
    }
</style>