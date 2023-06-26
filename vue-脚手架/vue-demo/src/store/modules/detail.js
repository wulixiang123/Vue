const state = {
    count:3
}
const mutations = {
    ADD(state){
        state.count++
    }
}
const actions = {
    increment({commit}){
        commit('ADD')
    }
}
const getters = {
    tenflod(state){
        return state.count * 10
    }
}

export default {
    namespaced:true,//开启命名空间
    state,
    mutations,
    actions,
    getters
}