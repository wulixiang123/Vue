<template>
  <div>
    <input type="text">
  </div>
</template>

<script>
export default {
name:'App',
mounted(){
  var myInput = document.querySelector('input')
  myInput.onkeyup = fangdou(function(e){
    console.log(this.value);
    console.log(e.target.value);
  },1000)
  function fangdou(fn,time){
    var timer = null
    return function(){
      if(timer){
      clearTimeout(timer)
    }
    timer = setTimeout(()=>{
      fn.apply(this,arguments)
    },time)
    }
  }
}
}

</script>

<style>

</style>