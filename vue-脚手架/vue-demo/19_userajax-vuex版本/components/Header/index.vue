<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="keyword"/>
      <button @click="toSearch">Search</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      keyword: ''
    }
  },
  methods: {
    toSearch() {
      this.$store.dispatch('getList', this.keyword)
    }
  }
};
</script>

<style scoped>
</style>