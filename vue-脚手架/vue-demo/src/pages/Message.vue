<template>
  <div class="tab-content">
  <div role="tabpanel" class="tab-pane active" id="Message">
    <ul class="list-group">
      <li class="list-group-item" v-for="item in list" :key="item.id">

         <!-- 第一种写法: 字符串拼接 -->
        <!-- <router-link
          :to="'/home/message/msgdetail/' + item.id + '?name=' + item.name"
          >{{ item.name }}</router-link> -->

          <!-- 第二种写法: 模板字符串 -->
        <!-- <router-link :to=" `/home/message/msgdetail/${ item.id }?name=${ item.name }` ">{{ item.name }}</router-link> -->
        
          <!--
          第三种写法: 对象写法
          存在的问题:
            丢失了params参数,此时匹配不到路径,所以页面没有展示
            这里丢失参数的原因是因为 path 和 params  一块使用导致params参数丢失
          如何解决:
            1. 让页面匹配到路由（知道）
                path: 'msgdetail/:msgId?'
                占位的参数后面加问号,代表参数可传可不传,意思是即便参数不传的时候,也能匹配路由,渲染出组价来
                但是还是存在问题,还是params参数丢失着
            2. 不使用params参数
                path: `/home/message/msgdetail/${ item.id }`,
               直接在url中拼接上参数
            3. 使用 name 和 params 配合使用
              跳转的时候
                name: 'MsgDetail',
                params: {
                  msgId: item.id
                },
              这里的name的值必须和路由注册的routes当中的路由的name一样
        -->

          <!-- <router-link
          :to="{
            path:'/home/message/msgdetail',
            params:{
              msgId:item.id
            },
            query:{
              name:item.name
            }
          }"
          >{{ item.name }}</router-link> -->

          <!-- <router-link
          :to="{
            path:`/home/message/msgdetail/${ item.id }`,
            query:{
              name:item.name
            }
          }"
          >{{ item.name }}</router-link> -->

          <router-link
          :to="{
            name:'MsgDetail',
            params:{
              msgId:item.id
            },
            query:{
              name:item.name
            }
          }"
          >{{ item.name }}</router-link>

      </li>
    </ul>
    <div class="alert alert-success" role="alert">
      <router-view></router-view>
    </div>
  </div>
  </div>
</template>

<script>
// 路由传参
// http://localhost:8080/#/home/message/msgdetail/2?name=噢噢噢噢噢噢噢噢噢噢噢噢噢噢噢噢
// 问号之间的,在路径中的参数叫 params 传参
// 问号之后的参数叫 query 参数
// 步骤:
// 1. 传
//    把参数写到url中(不管是params还是query参数)
// 2. 占位
//    如果url中带有params参数,params参数需要在路由中进行占位
//      {
//        path: 'msgdetail/:msgId',
//        component: MsgDetail
//      }
//    这里的 :msgId 就是params参数的占位,有了这个占位之后,我们的路由就能够匹配到url了
// 3. 接
//    $route.params.msgId
//    $route.query.name
//    $route 是当前页面的路由,params就是我们params参数,后面的msgId是占位的字符串
//          query参数直接拿参数即可
export default {
  name: "Message",
  data() {
    return {
      list: [
        { id: 1, name: "哇哇哇哇哇哇哇哇哇哇哇哇哇" },
        { id: 2, name: "噢噢噢噢噢噢噢噢噢噢噢噢" },
        { id: 3, name: "哦哦哦哦哦哦哦哦哦哦哦哦哦" },
      ],
    };
  },
};
</script>

<style>
</style>