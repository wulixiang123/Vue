<template>
  <div >
        <div>
          <span>关联平台</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-QQ"></use>
          </svg>
        </div>
        <div class="num">账号:{{ row.qq }}</div>
      </div>
</template>

<script>
export default {
    name:'UQQ',
    props:['row']
}
</script>

<style>
.icon {
  margin-left: 5px;
}
.num {
  margin-left: 20px;
}
</style>