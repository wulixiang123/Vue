<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :add="add" :todos="todos"></Header>
      <Main :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"></Main>
      <Footer :todos="todos"></Footer>
    </div>
  </div>
</template>

<script>
import Header from'@/components/Header'
import Main from '@/components/Main'
import Footer from'@/components/Footer'
import { nanoid } from 'nanoid'
export default {
name:'App',
components:{Header,Main,Footer},
data(){
  return {
    todos:[
      {
        id:nanoid(),
        title:'吃饭',
        isDone:true
      },
      {
        id:nanoid(),
        title:'睡觉',
        isDone:true
      },
      {
        id:nanoid(),
        title:'敲代码',
        isDone:false
      },
    ]
  }
},
methods:{
  add(title){
    this.todos.unshift({
      id:nanoid(),
      title,
      isDone:false
    })
  },
  // 修改Item(id写法)
  // checkTodo(key){
  //   let currentTodo = this.todos.find(item => item.id == key)
  //   currentTodo.isDone = !currentTodo.isDone
  // }

  checkTodo(index){
    this.todos[index].isDone = !this.todos[index].isDone
  },
  deleteTodo(index){
    this.todos.splice(index,1)
  }
},
}
</script>

<style>
/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>