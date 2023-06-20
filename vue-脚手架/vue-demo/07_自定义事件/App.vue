<template>
  <div>
    <button @click="click1">原生按钮</button>
    <!--
       自定义组件 
       注意:自定义组件的事件没有事件对象
      -->
    <mybutton @zidingyi="click2"></mybutton>
  </div>
</template>

<script>
import mybutton from '@/components/mybutton.vue'
export default {
  components: { mybutton },
name:'App',
methods:{
  click1(){
    console.log('点击了按钮');
  },
  click2(a,b){
    console.log('点击了组件',a,b);
  }
}
}
</script>

<style>

</style>