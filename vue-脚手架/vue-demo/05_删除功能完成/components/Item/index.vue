<template>
            <li @mouseenter="isShow=true" @mouseleave="isShow=false">
            <label>
              <input type="checkbox" v-model="todo.isDone"/>
              <span>{{todo.title}}</span>
            </label>
            <button class="btn btn-danger" v-show="isShow" @click="deleteTodo(index)">删除</button>
          </li>
</template>

<script>
export default {
name:'Item',
props:['todo','checkTodo','index','deleteTodo'],
data(){
  return {
    isShow:false
  }
},
methods:{
  changeCheckedHandler(e) {
      // e.target.checked 选中状态(不是.value)
      // console.log(e.target.checked)

      // (id写法)
      // this.checkTodo(this.todo.id)
      // 下标写法
      this.checkTodo(this.index)
    }
}
}
</script>

<style>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

</style>