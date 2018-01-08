import Vue from 'vue'

const state = {
    dataTime:0
}

const getters = {
    getDataTime:function(state){
        return state.dataTime;
    }
}

const actions = {
    getPostTime({commit,state}){
        setInterval(function () {
            commit('changeOrderList',parseInt(Math.random() * 55) + 30)
        },2000)
    }
}

const mutations = {
    changeOrderList(state,payload){
        state.dataTime = payload;
        // console.log(payload)
    }
}

export default{
    state,
    getters,
    actions,
    mutations
}         
