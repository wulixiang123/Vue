<!-- <template>
  
</template> -->

<script>
export default {
name:'myClass',
data(){
    return{
        isBox2:false
    }
},
render:function(createElement){
    return createElement('div',{
        class:{
            box1:true,
            box2:this.isBox2
        },
    },'我爱你')
}
}
</script>

<style>

</style>