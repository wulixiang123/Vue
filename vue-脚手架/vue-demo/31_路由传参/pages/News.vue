<template>
    <div role="tabpanel" class="tab-panel" id="News">
      <ul class="list-group">
        <li class="list-group-item">
          news1
          <button
            type="button"
            class="btn btn-primary"
            data-toggle="button"
            aria-pressed="false"
            autocomplete="off"
          ></button>
        </li>
        <li class="list-group-item">
          news2
          <button
            type="button"
            class="btn btn-primary"
            data-toggle="button"
            aria-pressed="false"
            autocomplete="off"
          ></button>
        </li>
        <li class="list-group-item">
          news3
          <button
            type="button"
            class="btn btn-primary"
            data-toggle="button"
            aria-pressed="false"
            autocomplete="off"
          ></button>
        </li>
      </ul>
      <div class="alert alert-success" role="alert">
        <ul class="list-group">
          <li class="list-group-item">news1</li>
          <li class="list-group-item">news2</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "News",
  };
  </script>
  
  <style scoped>
  </style>