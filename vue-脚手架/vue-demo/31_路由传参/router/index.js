// 1. 安装
//     npm i vue-router@3
// 2. 引入使用
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import About from '@/pages/About.vue'
import Home from '@/pages/Home.vue'
import Message from '@/pages/Message.vue'
import News from '@/pages/News.vue'
import MsgDetail from '@/pages/MsgDetail.vue'

// 3. 创建并暴露(实例)
export default new VueRouter({
    routes:[
        {
            path:'/home',
            component:Home,
            children:[
                {
                    // path:'/home/message',
                    path:'message',
                    component:Message,
                    children:[
                        {
                            path:'msgdetail/:msgId',
                            component:MsgDetail
                        }
                    ]
                },
                {
                    // path:'/home/news',
                    path:'news',
                    component:News
                },
                {
                    path:'',
                    redirect:'message'
                }
            ]
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