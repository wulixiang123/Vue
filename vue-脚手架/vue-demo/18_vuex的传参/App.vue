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
  </div>
</template>

<script>
export default {
    name:'App',
    mounted(){
        console.log(this.$store);
    },
    methods:{
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