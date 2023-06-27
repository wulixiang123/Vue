<template>
  <div >
        <div>
          <span>关联平台</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xinlang"></use>
          </svg>
        </div>
        <div class="num">账号:{{ row.sina }}</div>
        <div class="num">邮箱:{{ row.email }}</div>
      </div>
</template>

<script>
export default {
    name:'USina',
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