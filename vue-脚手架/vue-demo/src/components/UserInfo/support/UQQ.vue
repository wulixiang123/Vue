<template>
  <div >
        <div>
          <span>关联平台</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-QQ"></use>
          </svg>
        </div>
        <div>账号:{{ row.qq }}</div>
      </div>
</template>

<script>
export default {
    name:'UQQ',
    props:['row']
}
</script>

<style>

</style>