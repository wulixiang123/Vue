import Vue from 'vue'
import App from './App.vue'
import "./assets/index.css" // 引入base样式

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
})
.$mount('#app')

