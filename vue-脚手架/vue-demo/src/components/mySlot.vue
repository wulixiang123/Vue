<!-- <template>
  
</template> -->

<script>
import mySlotChild from './mySlotChild.vue'
export default {
name:'mySlot',
components:{mySlotChild},
// <mySlotChild>
//     <div>高圆圆</div>
//     <div v-slot:abc>我们不合适</div>
//     <div v-slot:qwer="xyz">我叫{{ xyz.userinfo.username }}</div>
// </mySlotChild>

render(createElement){
    return createElement(mySlotChild,{
        // 作用域插槽
        scopedSlots:{
            qwer:props => createElement('div',{},`我叫${props.userinfo.username}`)
        }
    },[// 普通插槽 > <div>高圆圆</div>
        createElement('div',{},'高圆圆'),
        createElement('div',{// 具名插槽 -> <div v-slot:abc>我们不合适</div>
            slot:'abc'
        },'我们不合适'),
        // 作用域插槽
        // 按道理来说,应该在这里创建一个div,但是人家的语法不是这样的
        // 作用域插槽的写法和 之前默认插槽,具名插槽的写法完全不一样
        // 在当前组件的配置项(参数二中去写)
    ])
}
}
</script>

<style>

</style>