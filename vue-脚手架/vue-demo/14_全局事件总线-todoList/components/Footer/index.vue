<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isCheckAll"/>
    </label>
    <span> <span>已完成{{ selCount }}</span> / 全部{{ todos.length }} </span>
    <button class="btn btn-danger" @click="$emit('deleteSel')">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: ["todos"],
  computed: {
    selCount() {
      return this.todos.reduce((prev, item) => {
        return prev + item.isSel
      }, 0)
    },
    isCheckAll: {
      get() {
        return this.todos.every(item => item.isSel) && this.todos.length > 0
      },
      set(val) { // 留着,放一放,到交互的时候写
        this.$emit('checkAll',val)
      }
    }
    // isCheckAll() {
    //   return this.selCount == todos.length && todos.length > 0
    // }
  }
};
</script>

<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>