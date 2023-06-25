
// 模块化: 只把state进行了模块化处理
// mutations、actions、getters和之前一样,放在一起
const state = {
    count: 7
}

const mutations = {
    // 这里参数state是当前模块的state
    ADD_COUNT(state) {
        state.count++
    }
}

const actions = {
    addCount({ commit }) {
        commit('ADD_COUNT')
    }
}

const getters = {
    hundredfold(state) {
        return state.count * 100
    }
}

export default {
    state,
    mutations,
    actions,
    getters,
}