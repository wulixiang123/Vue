<template>
        <div class="todo-header">
          <input type="text" @keyup.enter="addTodo" placeholder="请输入你的任务名称，按回车键确认" />
        </div>
</template>

<script>
export default {
    name:'Header',
    props:['add','todos'],
    methods:{
      addTodo(e){
        let text = e.target.value.trim()
        if(!text){
          alert('输入内容不能为空!!!')
          return
        }
        let isRepeat = this.todos.some(item=>item.title==text)
        if(isRepeat){
          alert('输入的内容重复啦!!!')
          e.target.value=''
          return
        }

        this.add(text)
        e.target.value=''
      }
    }
}
</script>

<style>
/*header*/
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