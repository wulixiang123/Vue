import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // render: (h) => { // h是一个形参
  //   let res = h(App) // h它是一个函数,  调用H可以换入一个组件,调用的返回值作为整个函数的返回值
  //   // 可以把res理解成虚拟DOM
  //   console.log(res)
  //   return res
  // }
})
.$mount('#app')
