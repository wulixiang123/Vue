import Vue from "vue";
import Vuex from 'vuex'
Vue.use(Vuex)//给vue使用vuex
export default new Vuex.Store({//暴露仓库
    state:{//数据
        count:1
    },
    mutations:{//修改上一个(state)的数据
        ADD(state){//接收上一个对象地址
            state.count++
        },
        SUB(state){
            state.count--
        }
    },
    actions:{//可以有if、for、异步,自带commit属性,解构使用
        add({commit}){
            commit('ADD')//使用commit接收上一个方法,this.$store.dispatch('')调用
        },
        ad({commit}){
            commit('SUB')
        }
    },
    getters:{//可以理解为计算属性的get方法
        get(state){
            return state.count * 10
        }
    }
})