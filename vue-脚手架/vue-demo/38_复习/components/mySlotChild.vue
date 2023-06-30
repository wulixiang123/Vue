<!-- <template>
  
</template> -->

<script>
export default {
name:'mySlotChild',
data(){
    return{
        userinfo:{
            username:'嘉玲',
            age:18
        }
    }
},
// <div>
//     <div>我爱你</div>
//     <slot></slot>
//     <div>你是个好人</div>
//     <slot name="abc"></slot>
//     <div>有请下一位</div>
//     <slot name="qwer" :userinfo="userinfo"></slot>
// </div>
render(createElement){
    console.log(this.$slots);
    console.log(this.$scopedSlots);

    // return createElement('div', {}, [
    //     createElement('div', {}, '我爱你'),
    //     this.$slots.default,
    //     createElement('div', {}, '你是个好人'),
    //     this.$slots.abc
    // ])

    // 作用域插槽的使用 $scopedSlots
    return createElement('div',{},[
        createElement('div',{},'我爱你'),
        this.$scopedSlots.default(),
        createElement('div',{},'你是个好人'),
        this.$scopedSlots.abc(),
        createElement('div',{},'有请下一位'),
        this.$scopedSlots.qwer({
            userinfo:this.userinfo
        })
    ])
}
}
</script>

<style>

</style>