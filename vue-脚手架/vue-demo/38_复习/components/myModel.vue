<!-- <template>
  
</template> -->

<script>
export default {
name:'myModel',
data(){
    return{
        keyword:'我爱你'
    }
},
// <input v-model="keyword"/>
// <input :value="keyword" @input="keyword = $event.target.value"/>
// 期望: 期望的是双向数据绑定
//      数据发生改变,页面发生变化;  页面发生变化,数据也发生变化
render(createElement){
    return createElement('input',{
            // attrs
            // 我们发现,当页面发生变化的时候,走了input事件,此时改变可keyword的内容
            // 当我们在开发者工具中修改 keyword 的时候,发生input框上的value属性中的内容变化了
            //    先改的input框内容,devtools再改数据,input不更新
            //    发现使用 attrs 属性设置value有问题,不要用这个
            // <input value="" />
            // attrs: {
            //     value: this.keyword
            // },
            // -------------
            // 去使用 domProps 中的 value 去设置
            // document.getElementById('input').value = 'xxx'
            domProps:{
                value:this.keyword
            },
        on:{
            input:(e)=>{
                this.keyword = e.target.value
            }
        }
    })
}
}
</script>

<style>

</style>