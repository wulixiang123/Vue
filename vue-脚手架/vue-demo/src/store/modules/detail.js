
// 命名空间是基于模块化的
// 模块化相当于只对state进行了升级
// 命名空间相当于对剩下的 mutations、actions、getters也进行了升级
// 解决了什么问题?
// 解决了在  mutations、actions、getters 中命名冲突的问题(在只开启模块化的时候是有这个问题的)

const state = {
    count: 21
}

const mutations = {
    ADD(state) {
        state.count++
    }
}

const actions = {
    increment({ commit }) {
        commit('ADD')
    }
}

const getters = {
    tenflod(state) {
        return state.count * 10
    }
}

export default {
    namespaced: true, // 开启命名空间
    state,
    mutations,
    actions,
    getters,
}