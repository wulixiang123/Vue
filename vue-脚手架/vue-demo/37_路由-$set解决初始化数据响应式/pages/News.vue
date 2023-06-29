<template>
  <div role="tabpanel" class="tab-panel" id="News">
    <ul class="list-group">
      <li class="list-group-item" v-for="item in list" :key="item.id">
        {{ item.title }}
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="button"
          aria-pressed="false"
          @click="click1(item)"
          autocomplete="off"
        >
          {{ item.id }}
        </button>
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
  data() {
    return {
      list: [
        {
          id: 1,
          title: "11111111111111",
        },
        {
          id: 2,
          title: "22222222222222",
        },
      ],
    };
  },
  methods: {
    click1(item) {
      // 两种跳转页面的方式
      // 1. 声明式导航
      //    使用router-link标签进行跳转
      // 2. 编程式导航
      //    使用 this.$router.push() 进行跳转

      // 什么时候用哪个导航?
      // 当跳转之前需要做一些代码逻辑操作的时候用编程式导航(有回调,能写自己的代码)


      // 传
      // this.$router.push('/home/news/newsdetail/' + item.id + '?name=' + item.name )


      // replace跳转不会产生历史记录
      // this.$router.replace('/home/news/newsdetail/' + item.id + '?title=' + item.title )
      // .catch(err => {}) // 解决重复跳转的报错问题

      // 三种写法
      // 第一种: 字符串拼接
      // this.$router.push('/home/news/newsdetail/' + item.id + '?title=' + item.title )
      // 第二种: 模板字符串
      // this.$router.push(`/home/news/newsdetail/${item.id}?title=${item.title}`)
      // 第三种: 对象写法
      this.$router.push({
        path:'NewsDetail',
        params:{
          nesId:item.id
        },
        query:{
          title:item.title
        }
      });
    },
  },
};
</script>

<style>
</style>