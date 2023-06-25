<template>
  <div class="row">
    <h3 v-if="$store.state.isFirst">欢迎光临</h3>
    <h3 v-else-if="$store.state.isLoading">加载中</h3>
    <h3 v-else-if="$store.state.errorMessage">{{ $store.state.errorMessage }}</h3>
    <div
      v-else
      class="card"
      v-for="item in $store.state.list"
      :key="item.id"
    >
      <a :href="item.html_url" target="_blank">
        <img
          :src="item.avatar_url"
          style="width: 100px"
        />
      </a>
      <p class="card-text">{{ item.username }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
};
</script>

<style scoped>
</style>