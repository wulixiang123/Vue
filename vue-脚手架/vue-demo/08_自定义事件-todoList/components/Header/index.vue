<template>
  <div class="todo-header">
    <input type="text" v-model="keyword" @keyup.enter="addTodoHandler" placeholder="请输入你的任务名称，按回车键确认" />
  </div>
</template>

<script>
export default {
  name: "Header",
  props: ["todos"],
  data() {
    return {
      keyword: ''
    }
  },
  methods: {
    addTodoHandler() {

      let text = this.keyword.trim() // 去除字符串首尾两端空格
      // 非空校验
      if (!text) {
        alert("输入的内容不能为空")
        return
      }
      // 重复校验
      let isRepeat = this.todos.some(item => item.content == text)
      if (isRepeat) {
        alert("输入的内容重复")
        this.keyword = ""
        return
      }

      // 创建todo
      let todo = {
        id: Date.now(),
        content: text,
        isSel: false
      }

      // 调用父组件传过来的方法修改父组件中的数据
      this.$emit('addTodo', todo)

      this.keyword = "" // 清空

    }
  }
};
</script>

<style scoped>
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>