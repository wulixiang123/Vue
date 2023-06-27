<template>
  <ul class="list-group">
          <li class="list-group-item">新闻id:{{ $route.params.newsId }}</li>
          <li class="list-group-item">新闻内容:{{ $route.query.title }}</li>
          <li class="list-group-item">新闻类型: {{ type }}</li>
        </ul>
</template>

<script>
const typeList = [
  {
    id: 1,
    type: 'shenteng'
  },
  {
    id: 2,
    type: 'mali'
  }
]
export default {
    name:'NewsDetail',
    data(){
      return {
        type:''
      }
    },
    watch:{
      $route:{
        handler(newVal){
          let newsId = newVal.params.newsId
          this.type = typeList.find(item => item.id == newsId)?.type
        },
        immediate:true
      }
    }
}
</script>

<style scoped>

</style>