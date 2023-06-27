<template>
  <div class="container">
    <!--
      第四版:  如果适配的平台过多,会造成引入的组件过多,很麻烦,而且每次都需要改当前组件
              可以使用全自动引入,动态组件渲染解决这个问题,以后再也不用修改当前组件了
    -->
    <UserInfo
    v-for="user in userlist"
    :key="user.id"
    :user="user"
    #default="{row}"
    >
    <component :is="compObj[row.flag]" :row="row"></component>
    </UserInfo>
  </div>
</template>

<script>
import UserInfo from "@/components/UserInfo";

const ctx = require.context('./components/UserInfo/support',false,/\.vue$/)
export default {
  name: "App",
  components: { UserInfo },
  computed:{
    compObj(){
      console.log(ctx.keys());//['./UQQ.vue', './USina.vue', './UWechat.vue']
      let obj = {}
      ctx.keys().forEach(path=>{
        let comp = ctx(path).default
        let compName = path.replace('./','').replace('.vue','')
        obj[compName] = comp
      })
      return obj
    }
  },
  data() {
    return {
      userlist: [
        {
          id: 1001,
          username: "admin",
          intro: "这个是管理员账号,请勿修改",
          accountJoin: {
            wechat: "admin-wechat",
            flag: "UWechat",
          },
          createDate: 1645184446523,
        },
        {
          id: 1002,
          username: "zhangsan",
          intro: "一个乐观的开发者",
          accountJoin: {
            qq: "465258674",
            flag: "UQQ",
          },
          createDate: 1645182446523,
        },
        {
          id: 1003,
          username: "lisi",
          intro: "这一个沮丧的开发者",
          accountJoin: {
            sina: "会飞的猪",
            email: "huifeidezhu@163.com",
            flag: "USina",
          },
          createDate: 1645144446523,
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  width: 800px;
  margin: 0 auto;
}
</style>