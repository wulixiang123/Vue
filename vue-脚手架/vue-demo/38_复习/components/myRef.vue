<!-- <template>
  
</template> -->

<script>
export default {
name:'myRef',
mounted(){
    console.log(this.$refs.boxRef);
},
render(createElement){
    return createElement('div',{
        ref:'boxRef'
    },'我爱你,xxx')
}
}
</script>

<style>

</style>