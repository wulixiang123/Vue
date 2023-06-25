<template>
  <div>
    <h3>App组件</h3>
  </div>
</template>

<script>
export default {
    name:'App',
    mounted(){
        console.log(this.$store);
    }
}
</script>

<style scoped>

</style>