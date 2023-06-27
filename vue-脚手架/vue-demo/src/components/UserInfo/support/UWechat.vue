<template>
  <div >
        <div>
          <span>关联平台</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-weixin"></use>
          </svg>
        </div>
        <div>账号:{{ row.wechat }}</div>
      </div>
</template>

<script>
export default {
    name:'UWechat',
    props:['row']
}
</script>

<style scoped>
.icon {
  margin-left: 5px;
}
.num {
  margin-left: 20px;
}
</style>