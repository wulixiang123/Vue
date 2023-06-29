// 1. 安装
//     npm i vue-router@3
// 2. 引入使用
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import About from '@/pages/About.vue'//引入组件
import Home from '@/pages/Home.vue'//引入组件
import Message from '@/pages/Message.vue'
import News from '@/pages/News.vue'
import MsgDetail from '@/pages/MsgDetail.vue'
import NewsDetail from '@/pages/NewsDetail.vue'

//给VueRouter的原型对象上添加方法
const originPush = VueRouter.prototype.push
VueRouter.prototype.push = function(location){
    originPush.call(this,location).catch(err=>{})
}

// 3. 创建并暴露(实例)
export default new VueRouter({
    routes:[
        {
            path:'/home',//url路径
            component:Home,//需要显示的组件
            children:[//children子路由
                {
                    path:'message',//注意路径可以简写,自动匹配/home
                    component:Message,
                    children:[
                        {
                            name:'MsgDetail',
                            path:'msgdetail/:msgId?',//三级路由同样可以简写
                            component:MsgDetail,
                            // 将路由参数映射到组件的props属性上
                            // 1. 布尔值
                            // 缺陷:布尔值的形式只能把params参数映射到组件中
                            // props: true
                            // 2. 对象形式
                            // 缺陷: 只能够添加额外的参数,不能映射params和query
                            // props: {
                            //     text: '我爱你'
                            // }
                            // 3. 函数写法
                            // 函数写法即可以传额外的参数,也可以将params和query 映射到组件的props
                            props(route) {
                                return {
                                    msgId: route.params.msgId,
                                    name: route.query.name,
                                    text: '贾玲'
                                }
                            }
                        }
                    ]
                },
                {
                    path:'news',
                    component:News,
                    children:[
                        {
                            path:'newsdetail/:newId',
                            component:NewsDetail
                        }
                    ]
                },
                {
                    path:'/',
                    redirect:'message'
                }
            ]
        },
        {
            path:'/about',//url路径
            component:About,//需要显示的组件
        },
        {
            path:'/',
            redirect:'home'//如果没有填写具体url路径将重定向
        }
    ]
})
// 4. 在创建vm的时候进行关联