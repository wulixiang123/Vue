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
      this.$router.push(
        "/home/news/newsdetail/" + item.id + "?title=" + item.title
      );
    },
  },
};
</script>

<style>
</style>