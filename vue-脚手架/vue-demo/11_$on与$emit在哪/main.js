import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// VueComponent.prototype = Object.create(Vue.prototype)

let vm = new Vue({
  render: h => h(App),
})
.$mount('#app')

console.log('vm.$on', vm.$on)
console.log('vm', vm)
console.log('vm.__proto__', vm.__proto__)

