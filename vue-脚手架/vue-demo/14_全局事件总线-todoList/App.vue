<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header
        :todos="todos"
        @addTodo="addTodo"
      ></Header>
      <Main
        :todos="todos"
        
      ></Main>
      <Footer
        :todos="todos"
        @checkAll="checkAll"
        @deleteSel="deleteSel"
      ></Footer>
    </div>
  </div>
</template>

<script>
// 如何改vscode的文件缩进
// 在设置中搜索 "indent" 划到最下方的两个input,都改成2就是  2个空格缩进
// 写页面步骤:
// 1. 静态搭建
//    拆分组件:
//      1. 定义
//      2. 注册
//      3. 使用
// 2. 初始化数据展示
//    2.1 直接展示
//        将数据传到Main组件中循环Item组件进行展示即可
//    2.2 计算展示
//       是否全部选中
//       选中个数
//       总个数
// 3. 交互
//    3.1 Header组件输入内容,点击回车,给列表添加一条数据
//        3.1.1 收集input输入框的数据,使用 v-model 收集 keyword
//        3.1.2 绑定 keyup 事件,拿到keyword,创建todo
//              在这个过程可以进行非空校验和重复校验
//        3.1.3 调用父组件传过来的方法,给todos添加todo
//    3.2 Item的选中状态改变
//        Item组件选中状态要修改App组件中的数据,使用props一层一层传函数
//        App传函数给Main,Main拿到函数之后直接传给Item,在Item调用传过来的函数,App组件就可以接收数据了
//    3.3 Item中的删除
//        3.3.1 删除按钮 移入显示 移出隐藏
//        3.3.2 点击删除按钮,删除当前todo
//              当前todo在App.vue组件中,相当于修改app组件的数据
//              如何修改? 传函数
//              App把函数传给Main组件,Main组件拿着函数再传给Item
//    3.4 Footer中的全选交互
//    3.5 Footer中的清除已完成
// 4. 数据持久化
//    localStorage 和 sessionStorage 只能存储字符串(想存数据存json字符串),只能放5M大小
//    localStorage 永久存储
//    sessionStorage 会话存储(关闭浏览器就没了)
// 需求: 刷新页面数据不丢失
//    什么时候存?
//        当数据发生变化的时候,存储数据(watch监听数据的变化)
//    什么时候取?
//        刷新页面的时候取值
import Header from '@/components/Header'
import Main from '@/components/Main'
import Footer from '@/components/Footer'
export default {
  name: "App", // name作用: 按下不表
  components: {
    Header,
    Main,
    Footer
  },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("TODOS")) || [
        { id: 10010, content: '抽烟', isSel: false },
        { id: 10020, content: '喝酒', isSel: true },
        { id: 10030, content: '烫头', isSel: false },
      ]
    }
  },
  watch: {
    todos: {
      handler(nval) {
        localStorage.setItem("TODOS", JSON.stringify(nval))
      },
      deep: true // 深度监听,监听每个todo中的isSel变化
    }
  },
  mounted(){
    this.$bus.$on('qwer',this.checkTodo)
    this.$bus.$on('abc',this.deleteTodo)
  },
  methods: {
    // 添加todo
    addTodo(todo) {
      this.todos.push(todo)
    },
    // 修改Item(下标写法 - 下标从main当中和来,只有在循环的时候有下标)
    checkTodo(index) {
      this.todos[index].isSel = !this.todos[index].isSel
    },
    // 修改Item(id写法)
    // checkTodo(id) {
    //   let currentTodo = this.todos.find(item => item.id == id)
    //   currentTodo.isSel = !currentTodo.isSel
    // },
    deleteTodo(index) {
      this.todos.splice(index, 1) // 删除
    },
    // 全选/全不选
    checkAll(isSel) {
      this.todos.forEach(item => {
        item.isSel = isSel
      })
    },
    // 删除选中的item
    deleteSel() {
      this.todos = this.todos.filter(item => !item.isSel)
    }
  }
};
</script>

<style scoped>
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