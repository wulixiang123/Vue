<template>
  <div class="container">
    <!--
      第三版: 目前我们在组件标签之间把模板通过slot传给子组件
             问题来了: 如果传的模板过长怎么办?
             封装成组件
      这个版本是必须掌握的
    -->
    <UserInfo
    v-for="user in userlist"
    :key="user.id"
    :user="user"
    #default="{row}"
    >
    <UWechat v-if="row.wechat" :row="row"></UWechat>
    <UQQ v-if="row.qq" :row="row"></UQQ>
    <USina v-if="row.sina" :row="row"></USina>
    </UserInfo>
  </div>
</template>

<script>
import UserInfo from "@/components/UserInfo";

import UWechat from '@/components/UserInfo/support/UWechat'
import UQQ from '@/components/UserInfo/support/UQQ';
import USina from '@/components/UserInfo/support/USina';
export default {
  name: "App",
  components: { UserInfo,UWechat,UQQ,USina },
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