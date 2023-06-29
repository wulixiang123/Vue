<!-- <template>
  
</template> -->

<script>
import myChild from './myChild.vue';
export default {
name:'myParent',
data(){
    return{
        msg:'我爱你'
    }
},
    // components: { myChild },
    // <div>
    //     <div>{{ msg }}</div>
    //     <MyChild :msg="msg" @changeMsg="msg += $event"></MyChild>
    // </div>
render(createElement){
    return createElement('div',{},[
        createElement('div',{},this.msg),
        createElement(myChild,{// render渲染组件
            props:{// 给组件传递props参数(props传参)
                msg:this.msg
            },
            on:{// 给组件绑定自定义事件(自定义事件传参)
                changeMsg:(val)=>{
                    this.msg += val
                }
            }
        })
    ])
}
}
</script>

<style>

</style>