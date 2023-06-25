import Vue from "vue";
import Vuex from 'vuex'
Vue.use(Vuex)//给vue使用vuex
import home from "./modules/home";//引入模块/js文件
export default new Vuex.Store({//暴露仓库
    modules:{//模块化
        home
    },
    state:{//数据
        count:1,
        msg:'我爱你'
    },
    mutations:{//修改上一个(state)的数据
        ADD(state){//接收上一个对象地址
            state.count++
        },
        SUB(state){
            state.count--
        },
        changeMsg(state,str1){
            // state.msg += '燕子'
            state.msg += str1
        }
    },
    actions:{//可以有if、for、异步,自带commit属性,解构使用
        addd(miniStore){
            console.log({miniStore});
        },
        add({commit}){
            commit('ADD')//使用commit接收上一个方法,this.$store.dispatch('')调用
        },
        ad({commit}){
            commit('SUB')
        },
        evenIncrement({commit,state}){//可以直接解构获取state中的数据
            if(state.count % 2 === 0){
                commit('ADD')
            }
        },
        asyncIncrement({commit}){
            setTimeout(()=>{
                commit('ADD')
            },2000)
        },
        changeMsg({commit},str1){
            console.log(str1);
            commit('changeMsg','静静')
        }
    },
    getters:{//可以理解为计算属性的get方法
        get(state){
            return state.count * 10
        }
    }
})