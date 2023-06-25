<template>
  <div class="box">
    <h4>Home组件 - 模块化</h4>
    <div>count: {{ $store.state.home.count }}</div>
    <div>hundredfold: {{ $store.getters.hundredfold }}</div>
    <button @click="addHandler">自增</button>
    <hr>
    <div>count: {{ qwer }}</div>
    <div>count: {{ count }}</div>
    <div>hundredfold: {{ hundredfold }}</div>
    <button @click="addCount">自增</button>
  </div>
</template>

<script>
// 由于模块化只模块了state,其他的三块内容和之前一样
// 所以写法上只有state发生了变化,其他的写法和之前一样
// stete 普通写法
//   this.$store.state.模块名.xxx
// 辅助函数写法
//   ...mapState({
//       qwer: state => state.模块名.count, // 属性名是要在页面中展示的属性名
//   }),
import { mapGetters, mapState, mapActions } from 'vuex'
console.log(
  mapState({
    count: state => state.home.count
  })
)

export default {
  name: "Home",
  computed: {
    ...mapState({
      qwer: state => state.home.count, // 属性名是要在页面中展示的属性名
      count: state => state.home.count, // 属性值是函数,函数的返回值作为 该属性名的值, 函数的参数state拿到的是大的state
    }),

    ...mapGetters(['hundredfold'])
  },
  mounted() {
    console.log(this.$store)
  },
  methods: {
    addHandler() {
      this.$store.dispatch('addCount')
    },
    ...mapActions(['addCount'])
  }
};
</script>

<style scoped>
.box {
  padding: 20px;
  border: 1px solid #333;
}
</style>