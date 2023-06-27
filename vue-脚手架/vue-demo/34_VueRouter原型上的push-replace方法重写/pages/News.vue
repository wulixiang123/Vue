<template>
    <div role="tabpanel" class="tab-panel" id="News">
      <ul class="list-group">
        <li class="list-group-item"
        v-for="item in list"
        :key="item.id"
        >
          {{ item.title }}
          <button
            type="button"
            class="btn btn-primary"
            data-toggle="button"
            aria-pressed="false"
            autocomplete="off"
            @click="toDetail(item)"
          >{{ item.id }}</button>
        </li>
      </ul>
      <div class="alert alert-success" role="alert">
        <router-view></router-view>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "News",
    data(){
      return{
        list:[
          {
            id:1,
            title:"沈腾"
          },
          {
            id:2,
            title:"玛丽"
          }
        ]
      }
    },
    methods:{
      toDetail(item){
        this.$router.push('/home/news/newsDetail/' + item.id + '?title=' + item.title)
      }
    }
  };
  </script>
  
  <style scoped>
  </style>