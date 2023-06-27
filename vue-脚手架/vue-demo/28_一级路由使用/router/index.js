// 1. 安装
//     npm i vue-router@3
// 2. 引入使用
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import About from '@/pages/About.vue'
import Home from '@/pages/Home.vue'

// 3. 创建并暴露(实例)
export default new VueRouter({
    routes:[
        {
            path:'/home',
            component:Home
        },
        {
            path:'/about',
            component:About
        },
        {
            path:'/',
            redirect:'/home'
        }
    ]
})
// 4. 在创建vm的时候进行关联