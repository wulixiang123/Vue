// 1. 安装
//  npm i vuex@3
// 2. 引入使用
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 3. 创建并暴露(实例) - 需要传入一个配置对象,配置一会说
export default new Vuex.Store({
    state:{//数据
        count:1
    },
    mutations:{//放函数,用来修改state的数据,不能存在if、for、异步
        ADD(state){
            state.count++
        },
        SUB(state){
            state.count--
        }
    },
    actions:{//也是放函数,用来调用mutaions中的函数,可以存放if、for、异步
        //并且actions中的函数还会作为vuex和vue之间的桥梁去调用
        increment(miniStore){
            miniStore.commit('ADD')
        },
        decrement({commit}){
            commit('SUB')
        },
        evenIncrement({commit,state}){
            if(state.count % 2 !== 0){
                commit('ADD')
            }
        },
        asyncIncrement({commit}){
            setTimeout(()=>{
                commit('ADD')
            },2000)
        }
    },
    getters:{//可以理解为vuex的计算属性的get方法
        tenflod(state){
            return state.count * 10
        }
    }
})
// 4. 在main.js中引入进行关联