<!-- <template>
  
</template> -->

<script>
export default {
name:'myShow',
data(){
    return{
        isShow:true
    }
},
    // <div>
    //     <button @click="isShow = !isShow">切换</button>
    //     <div v-show="isShow">我爱你</div>
    // </div>
    render(createElement){
        return createElement('div',{},[
            createElement('button',{
                on:{
                    click:()=>{
                        this.isShow = !this.isShow
                    }
                }
            },'切换'),
            createElement('div',{
                // 这里的directives是当前渲染的div要用到的指令
                directives:[
                    // 放标签上写的指令 v-show="isShow"
                    {
                        name:'show',// 指令名称
                        value:this.isShow
                    }
                ]
            },'我爱你')
        ])
    }
}
</script>

<style>

</style>