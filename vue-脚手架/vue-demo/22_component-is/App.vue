<template>
  <div>
    <h3>App组件</h3>
    <button @click="isShow = !isShow">切换显示隐藏</button>
    <mybutton v-if="isShow"></mybutton>
    <mycomp v-else></mycomp>
    <hr>

    <button @click="changeShowComp">切换显示隐藏</button>
    <component :is="comp"></component>
  </div>
</template>

<script>
import mybutton from '@/components/mybutton.vue';
import mycomp from '@/components/mycomp.vue';
export default {
name:'App',
components:{
  mybutton,mycomp
},
data(){
  return{
    isShow:true,
    comp:null
  }
},
methods:{
  changeShowComp(){
    if(this.comp == 'mycomp'){
      this.comp = 'mybutton'
    }else{
      this.comp = 'mycomp'
    }
  }
}
}
</script>

<style>

</style>