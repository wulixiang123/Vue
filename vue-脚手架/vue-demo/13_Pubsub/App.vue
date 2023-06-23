<template>
  <div>
    <Child></Child>
    <Child2></Child2>
  </div>
</template>

<script>
import Child from '@/components/Child'
import Child2 from '@/components/Child2'
export default {
  name:"App",
  components:{Child,Child2}
}
</script>

<style>

</style>