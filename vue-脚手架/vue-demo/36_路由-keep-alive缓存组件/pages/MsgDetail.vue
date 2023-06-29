<template>
  <ul class="list-group">
    <li class="list-group-item">消息的id:{{ $route.params.msgId }}</li>
    <li class="list-group-item">消息的内容:{{ $route.query.name }}</li>

    <!--
      需求: 组件中写 $route.params.msgId 太长了,能不能短点
      可以,router能够把参数映射到组件的props上使用,但是需要配置
    -->

    <li class="list-group-item">消息的id: {{ msgId }}</li>
    <li class="list-group-item">消息的内容: {{ name }}</li>
    <li class="list-group-item">额外的内容: {{ text }}</li>
  </ul>
</template>

<script>
export default {
    name:'MsgDetail',
    props:['msgId', 'name', 'text']
};
</script>

<style>
</style>