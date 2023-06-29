<!-- <template>
  
</template> -->

<script>
export default {
name:'myFor',
data(){
    return{
        list:[
            {id:1,name:'悟空'},
            {id:2,name:'八戒'},
            {id:3,name:'沙僧'}
        ]
    }
},
render:function(createElement){
    return createElement('ul',{},[
        // createElement('li',{},this.list[0].name),
        // createElement('li',{},this.list[1].name),
        // createElement('li',{},this.list[2].name)

        ...this.list.map(li =>createElement('li',{},li.name))
    ])
}
}
</script>

<style>

</style>