<!-- <template>
  
</template> -->

<script>
export default {
name:'Qwer',
data(){
    return{
        count:5
    }
},
filters:{
    addTen(arg){
        return arg + 10
    }
},
render(createElement){
    return createElement('div',{},this.$options.filters.addTen(this.count))
}
}
</script>

<style>

</style>