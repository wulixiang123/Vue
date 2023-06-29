<template>
  <ul class="list-group">
    <li class="list-group-item">新闻id:{{ $route.params.newId }}</li>
    <li class="list-group-item">新闻内容:{{ $route.query.title }}</li>
    <li class="list-group-item">新闻类型:{{ type }}</li>
  </ul>
</template>

<script>
 const typeList = [
    {
      id: 1,
      type: '新闻'
    },
    {
      id: 2,
      type: '视频'
    }
 ]
export default {
    name:'NewsDetail',
    data(){
        return{
            type:''
        }
    },
    watch:{
        $route:{
        handler({params}){
            console.log(params);
            let newId = params.newId
            // 注意: item.id 是number类型  newsId 是string类型
            this.type = typeList.find(item => item.id == newId)?.type//取到typeList数组中的type,?意思是如果没有这个值,跳过,避免报错
        },
        immediate:true
    }
}
};
</script>

<style>
</style>