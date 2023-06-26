<template>
  <div class="container">
    <UserInfo
      v-for="user in userlist"
      :key="user.id"
      :user="user"
    ></UserInfo>
  </div>
</template>

<script>
import UserInfo from "@/components/UserInfo";
export default {
  name: "App",
  components: { UserInfo },
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