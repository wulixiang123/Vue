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
  </div>
</template>

<script>
export default {
    name:'App',
    methods:{
        addHandler(){
            this.$store.dispatch('add')
        }
    }
}
</script>

<style>

</style>