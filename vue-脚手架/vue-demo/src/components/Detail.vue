<template>
  <div>
    <h3>Detail组件 - 命名空间</h3>
    <div>count:{{ $store.state.detail.count }}</div>
    <div>count:{{ $store.getters['detail/tenflod'] }}</div>
    <!-- <button @click="addHandler">自增</button> -->
    <button @click="$store.dispatch('detail/increment')">自增</button>
    <hr>
    <div>count:{{ count }}</div>
    <div>getters中的tenflod1:{{ this['detail/tenflod'] }}</div>
    <div>getters中的tenflod2:{{ tenflod }}</div>

    <button @click="this['detail/increment']">自增</button>
    <button @click="increment">自增</button>
  </div>
</template>

<script>
import { mapState,mapGetters,mapActions } from 'vuex'
export default {
    name:'Detail',
    computed:{
        ...mapState({
            count:state => state.detail.count
        }),
        ...mapGetters(['detail/tenflod']),
        // 第二种写法
        ...mapGetters('detail',['tenflod'])
    },
    methods:{
        // addHandler(){
        //     this.$store.dispatch('detail/increment')
        // }
        ...mapActions(['detail/increment']),
        // 第二种写法
        ...mapActions('detail',['increment'])
    }
}

</script>

<style>

</style>