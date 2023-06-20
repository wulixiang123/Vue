<template>
  <div>
    <!--自定义@只能绑定一个事件-->
    <!-- <Child @qwer="qwerHandler" @qwer="qwerHandler"></Child> -->
    <Child ref="childRef"></Child>
    <button @click="offEventHandler">解绑qwerHandler事件</button>
  </div>
</template>

<script>
import Child from './components/Child.vue'
export default {
  name: "App",
  components: { Child },
  mounted(){//挂载后
    // 使用$on可以绑定多个相同事件
    this.$refs.childRef.$on('qwer',this.qwerHandler)
    this.$refs.childRef.$on('qwer',this.asdfHandler)
    this.$refs.childRef.$on('abc',this.abcHandler)

    // this.$refs.childRef.$once('abc', this.abcHandler)//执行一次后解绑
  },
  methods:{
    qwerHandler(){
      console.log('qwerHandler执行啦');
    },
    abcHandler(){
      console.log('abcHandler执行啦');
    },
    asdfHandler(){
      console.log('asdfHandler执行啦');
    },
    offEventHandler(){
      // $off给自定义事件进行解绑
      // this.$refs.childRef.$off()//解绑所有
      // this.$refs.childRef.$off('qwer')//解绑一个固定的事件
      this.$refs.childRef.$off('qwer',this.qwerHandler)// 解绑某一个事件的某一个回调
    }
  }
}
</script>

<style>

</style>