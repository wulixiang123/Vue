<template>
  <div>
    <h3>App组件</h3>
    <div>store中的count:{{ $store.state.count }}</div>
    <div>getters的tenflod:{{ $store.getters.tenflod }}</div>

    <button @click="addHandler">自增*10</button>
    <button @click="$store.dispatch('decrement')">自减</button>
    <button @click="addEventHandler">如果是奇数自增</button>
    <button @click="addAsyncHandler">2秒后自增</button>

    <div>{{ $store.state.msg }}</div>
    <button @click="changeHandler">修改msg</button>
    <hr>
    <div>count:{{ count }}</div>
    <div>tenflod:{{ tenflod }}</div>
    <button @click="increment">自增</button>
    <button @click="decrement">自减</button>
    <button @click="evenIncrement">奇数自增</button>
    <button @click="asyncIncrement">2秒后自增</button>

    <div>msg:{{ msg }} </div>
    <!-- 辅助函数调用一样,只能传一个参数 -->
    <button @click="changeMsg('参数一','参数二')">修改msg</button>
  </div>
</template>

<script>
// 辅助函数 - 辅助开发者
// mapState 可以把state中的数据映射到当前组件的computed中,以后使用数据直接在组件中使用计算属性即可
// console.log( mapState(['count', 'msg']) )
// mapGetters 可以把getters中的属性映射到当前组件的computed中
// console.log( mapGetters(['tenflod']) )
// mapActions 可以把actions中的方法映射到当前组件的methods中,直接在组件中 this.xxx 调用即可
// console.log( mapActions(['increment', 'decrement', 'evenIncrement', 'asyncIncrement']) )
// mapMutations 可以把mutations中的方法直接映射到当前组件的methods中,只是我们一般不这么做
import { mapState,mapGetters,mapActions,mapMutations } from 'vuex';
export default {
    name:'App',
    computed:{
        ...mapState(['count','msg']),
        ...mapGetters(['tenflod'])
    },
    mounted(){
        console.log(this.$store);
    },
    methods:{
        ...mapActions(['increment','decrement', 'evenIncrement', 'asyncIncrement', 'changeMsg']),
        addHandler(){
            this.$store.dispatch('increment')
        },
        addEventHandler(){
            this.$store.dispatch('evenIncrement')
        },
        addAsyncHandler(){
            this.$store.dispatch('asyncIncrement')
        },
        changeHandler(){
            this.$store.dispatch('changeMsg','娜娜','丽丽')
        }
    }
}
</script>

<style scoped>

</style>