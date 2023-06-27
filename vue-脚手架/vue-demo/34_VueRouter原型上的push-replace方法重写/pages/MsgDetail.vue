<template>
    <ul class="list-group">
        <li class="list-group-item">消息的id:{{ $route.params.msgId }}</li>
        <li class="list-group-item">消息的内容:{{ $route.query.name }}</li>
    </ul>
</template>

<script>
export default {
    name: 'MsgDetail'
}
</script>

<style></style>