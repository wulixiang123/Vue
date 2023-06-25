import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueResource from 'vue-resource' // 插件,提供了intasll方法
Vue.use(VueResource) // 本质上在调用插件的install方法

import "./assets/bootstrap.css"
import "./assets/index.css"

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
})
.$mount('#app')

