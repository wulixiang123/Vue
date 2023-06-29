<!-- <template>
  
</template> -->

<script>
export default {
name:'myChild',
props:['msg'],
render(createElement){
    return createElement('div',{},[
        createElement('b',{},this.msg),
        createElement('button',{
            on:{
                click:()=>{
                    this.$emit('changeMsg','杨幂')
                }
            }
        },'修改父组件的msg')
    ])
}
}
</script>

<style>

</style>