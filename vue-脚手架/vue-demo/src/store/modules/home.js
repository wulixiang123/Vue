const state = {
    count:2
}
const mutations = {
    ADD_COUNT(state){
        state.count++
    }
}
const actions = {
    increment({commit}){
        console.log('调用了home模块的action');
        commit('ADD_COUNT')
    }
}
const getters = {
    hundredfold(state){
        return state.count * 100
    }
}
export default {
    state,mutations,actions,getters
}