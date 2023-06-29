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
render(createElement){
    return createElement('input',{
        attrs:{
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