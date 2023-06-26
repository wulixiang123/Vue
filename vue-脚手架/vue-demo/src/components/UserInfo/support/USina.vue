<template>
  <div >
        <div>
          <span>关联平台</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xinlang"></use>
          </svg>
        </div>
        <div>账号:{{ row.sina }}</div>
        <div>邮箱:{{ row.email }}</div>
      </div>
</template>

<script>
export default {
    name:'USina',
    props:['row']
}
</script>

<style>

</style>