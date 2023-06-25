import Vue from "vue";
import Vuex from 'vuex';
Vue.use(Vuex)
import axios from "axios";

export default new Vuex.Store({
    state: {
        isFirst: true, // 默认是第一次进入页面,当发过请求之后就变为false
        isLoading: false, // 当发请求的时候变成true,请求成功后变为false,默认是false不发请求
        errorMessage: '',  // 收集错误信息在页面展示,只有在请求失败的时候里面有值
        list: []
    },
    mutations: {
        BEFOREREQUEST(state) {
            state.isFirst = false
            state.isLoading = true
        },
        SUCCESSREQUEST(state, list) {
            state.list = list
            state.isLoading = false
        },
        ERRORREQUEST(state, error) {
            state.isLoading = false
            state.errorMessage = error.message || '获取列表信息失败'
        }
    },
    actions: {
        async getList({ commit }, keyword) {
            // 请求前
            commit('BEFOREREQUEST')

            try {
                let result = await axios.get(`https://api.github.com/search/users?q=${ keyword }`)
            
                let list = result.data.items.map(item => {
                    return {
                        id: item.id,
                        avatar_url: item.avatar_url,
                        html_url: item.html_url,
                        username: item.login
                    }
                })
                
                // 请求成功后
                commit('SUCCESSREQUEST', list)
            
            } catch (error) {
                // 请求失败
                commit('ERRORREQUEST', error)
            }


        }
    },
    getters: {}
})