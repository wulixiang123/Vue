<template>
  <div class="wrapper">
    <h4>Detail组件 - 命名空间</h4>
    <!-- $store.state.模块名.count -->
    <div>count: {{ $store.state.detail.count }}</div>
    <div>count: {{ $store.getters['detail/tenflod'] }}</div>
    <button @click="addHandler">自增</button>
    <hr>
    <div>count: {{ count }}</div>
    <!-- <div>tenflod: {{ this['detail/tenflod'] }}</div> -->
    <div>tenflod: {{ tenflod }}</div>
    <!-- <button @click="this['detail/increment']">自增</button> -->
    <button @click="increment">自增</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

// console.log( mapGetters(['detail/tenflod']) ) // 这个不用(写的太费劲)
// 参数一: 命名空间的名称
// 参数二: 数组,数组中放该命名空间下的getters属性
// console.log( mapGetters('detail', ['tenflod']) )


export default {
  name: "Detail",
  computed: {
    // ...mapState({
    //   count: state => state.detail.count
    // }),
    ...mapState('detail', ['count']), // mapState 这种函数传数组的写法只支持命名空间,不支持模块化


    // ...mapGetters(['detail/tenflod'])
    ...mapGetters('detail', ['tenflod'])
  },
  mounted() {
    console.log(this.$store)
  },
  methods: {
    addHandler() {
      // 'detail/increment'  -->  '模块名/该模块下的actions方法'
      this.$store.dispatch('detail/increment')
    },
    // ...mapActions(['detail/increment'])
    // 参数一: 命名空间的名称
    // 参数二: 数组,数组中放该命名空间下的actions属性
    ...mapActions('detail', ['increment'])
  }
};
</script>

<style scoped>
.wrapper {
  border: 1px solid #333;
  padding: 20px;
}
</style>