<!-- <template>
  
</template> -->

<script>
export default {
name:'myDirective',
data(){
    return{
        msg:'I Love You'
    }
},
directives:{
    upper(el,binding){
        el.innerHTML = binding.value.toUpperCase()
    }
},
render(createElement){
    return createElement('div',{
        directives:[
            {
                name:'upper',
                value:this.msg
            }
        ]
    })
}
}
</script>

<style>

</style>