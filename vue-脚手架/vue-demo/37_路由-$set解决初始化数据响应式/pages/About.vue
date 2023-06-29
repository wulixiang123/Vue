<template>
  <div role="tabpanel" class="tab-panel" id="About">
    <div class="panel panel-default">
      <div class="panel-body">Basic panel example</div>
    </div>
    <input type="text">
    <hr>
    <div>姓名: {{ userinfo.username }}</div>
    <div>年龄: {{ userinfo.age }}</div>
    <div>介绍: {{ userinfo.intro }}</div>
    <button @click="addIntro">添加介绍</button>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      userinfo: {
        username: '贾玲',
        age: 18,
      }
    }
  },
  methods: {
    addIntro() {
      // 直接给data中的数据添加属性,不会具有响应式
      // 只有在data中初始写的数据才具有响应式
      // this.userinfo.intro = "喜剧演员"

      // 如何给没有初始化的数据添加响应式?
      // $set给没有初始化的数据添加响应式
      // 参数一: 目标对象
      // 参数二: 属性名
      // 参数三: 属性值
      this.$set(this.userinfo, 'intro', '喜剧演员')

      console.log(this.userinfo)
    }
  }
};
</script>

<style scoped>
</style>