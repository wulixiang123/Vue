<template>
  <div>
    <div>获取store中的count:{{ $store.state.count }}</div>
    <div>{{ $store.state.msg }}</div>
    <button @click="$store.dispatch('addd')">获取miniStore</button>
    <button @click="addHandler">自增</button>
    <div>获取store中的count*10:{{ $store.getters.get }}</div>

    <button @click="$store.dispatch('ad')">自减</button>

    <button @click="$store.dispatch('evenIncrement')">偶数自增</button>

    <button @click="$store.dispatch('asyncIncrement')">异步自增</button>

    <button @click="$store.dispatch('changeMsg','娜娜')">修改msg</button>
    <hr>
    <div>使用辅助函数的count:{{ count }}</div>
    <div>使用辅助函数的msg:{{ msg }}</div>

    <hr>
    <button @click="add">自增</button>
    <button @click="ad">自减</button>
    <button @click="evenIncrement">偶数自增</button>
    <button @click="asyncIncrement">2秒后自增</button>

    <hr>
    <Home></Home>
    <Detail></Detail>
  </div>

</template>

<script>
//1.引入辅助函数
import {mapState,mapMutations,mapActions,mapGetters} from 'vuex'
import Home from '@/components/Home'
import Detail from '@/components/Detail'
export default {
    name:'App',
    components:{Home,Detail},//外部组件的使用
    // 2.在计算属性中展开
    computed:{
      ...mapState(['count','msg'])
    },
    methods:{//在methods中展开方法
        addHandler(){
            this.$store.dispatch('add')
        },
        ...mapActions(['addd','add','ad','evenIncrement','asyncIncrement','changeMsg'])
    }
}
</script>

<style>

</style>