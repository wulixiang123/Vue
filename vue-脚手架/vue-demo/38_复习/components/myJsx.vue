<!-- <template>
  
</template> -->

<script>
export default {
name:'myJsx',
data(){
    return{
        username:'嘉玲'
    }
},
methods:{
    changeUsername(name,e){
        // this.username = '高圆圆'
        console.log(name,e);
        this.username = name
    }
},
render(){
    return <div>
        <div>我爱你,{this.username}</div>
        <button onClick={this.changeUsername}>修改名字</button>
        <button onClick={e => {this.changeUsername('杨幂',e)}}>传参</button>
        </div>
}
}
</script>

<style>

</style>