<template>
  <div class="todo-footer">
          <label>
            <input type="checkbox" v-model="isCheckAll"/>
          </label>
          <span>
            <span>已完成{{ selCount }}</span> / 全部{{ todos.length }}
          </span>
          <button class="btn btn-danger" @click="deleteDone">清除已完成任务</button>
        </div>
</template>

<script>
export default {
name:'Footer',
props:['todos','checkAll','deleteDone'],
computed:{
  selCount(){
    return this.todos.reduce((pre,cur)=>{
      return pre + cur.isDone
    },0)
  },
  isCheckAll:{
    get(){
      return this.todos.every(item =>item.isDone) && this.todos.length > 0
    },
    set(val){
      // console.log(val);
      this.checkAll(val)
    }
  }

  // isCheckAll(){//简单实用
  //   return this.selCount === this.todos.length && this.todos.length>0
  // }
}
}
</script>

<style>
/*footer*/
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