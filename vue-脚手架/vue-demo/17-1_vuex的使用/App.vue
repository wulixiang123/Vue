<template>
  <div>
    <div>获取store中的count:{{ $store.state.count }}</div>
    <button @click="addHandler">自增</button>
    <div>获取store中的count*10:{{ $store.getters.get }}</div>

    <button @click="$store.dispatch('ad')">自减</button>
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