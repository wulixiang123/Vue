<!-- <template>
  
</template> -->

<script>
export default {
name:'myEvent',
data(){
    return{
        isShow:false
    }
},
render:function(createElement){
    return createElement('div',{},[
        createElement('button',{
            on:{
                click:()=>{
                    this.isShow = !this.isShow
                }
            }
        },'切换显示'),
        this.isShow ? createElement('div',{},'我爱你'):''
    ])
}
// render:function(createElement){
//     if(this.isShow){
//         return createElement('div',{},[
//             createElement('button',{
//                 on:{
//                     click:()=>{
//                         this.isShow = !this.isShow
//                     }
//                 }
//             },'切换显示'),
//             createElement('div',{},'我爱你')
//         ])
//     }else{
//         return createElement('div',{},[
//             createElement('button',{
//                 on:{
//                     click:()=>{
//                         this.isShow = !this.isShow
//                     }
//                 }
//             },'切换显示')
//         ])
//     }
// }

// render:function(createElement){
//     return createElement('button',{
//         on:{
//             click:(e)=>{
//                 console.log(e,this);
//             }
//         }
//     },'按钮')
// }
}
</script>

<style>

</style>