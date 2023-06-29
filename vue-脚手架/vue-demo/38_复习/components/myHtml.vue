<!-- <template>
  
</template> -->

<script>
export default {
    data(){
        return{
            msg:'我爱你',
            message:'<b>我爱你</b>'
        }
    },
render:function(createElement){
    // return createElement('div',{},'我是div')

    // return createElement('div',{},[
    //     createElement('div',{},'我是div~'),
    //     createElement('div',{},'我是div~~')
    // ])


    return createElement('div',{
        domProps:{
            // innerText:this.msg,
            innerHTML:this.message
        }
    })
}
}
</script>

<style>

</style>