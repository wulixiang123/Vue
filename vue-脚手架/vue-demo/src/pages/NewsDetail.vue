<template>
  <ul class="list-group">
          <li class="list-group-item">新闻id:{{ $route.params.newId }}</li>
          <li class="list-group-item">新闻内容:{{ $route.query.title }}</li>
        </ul>
</template>

<script>
export default {
    name:'NewsDetail'
}
</script>

<style scoped>

</style>