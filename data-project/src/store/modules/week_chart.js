import Vue from 'vue'

const state = {
    picObj:{
        legendTitle: ['知乎', '百度', '谷歌', '必应', '其他'],
        dataIn: [
            { value: 335, name: '知乎', selected: true },
            { value: 679, name: '微博' },
            { value: 1548, name: '豆瓣' }
        ],
        dataOut: [
            { value: 335, name: '知乎' },
            { value: 135, name: '微博' },
            { value: 251, name: '百度' },
            { value: 1048, name: '谷歌' },
            { value: 547, name: '必应' },
            { value: 102, name: '其他' }
        ]
    }
}

const getters = {
    getPicObj:function(state){
        return state.picObj;
    }
}

const actions = {

}

const mutations = {
    
}

export default{
    state,
    getters,
    actions,
    mutations
}