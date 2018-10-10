import Vue from 'vue'

const state = {
    chartsObj:{
        category: ["2017-11-2", "2017-11-3", "2017-11-4", "2017-11-5", "2017-11-6", "2017-11-7", "2017-11-8", "2017-11-9", "2017-11-10", "2017-11-11", "2017-11-12", "2017-11-13", "2017-11-14", "2017-11-15", "2017-11-16", "2017-11-17", "2017-11-18", "2017-11-19", "2017-11-20", "2017-11-21"],
        dottedBase: 1511231340206,
        lineData: [235.59034200383263, 345.7848878311589, 301.86529490920351, 217.08871028925958, 178.32669852860411, 233.87594412671245, 230.10389735106668, 376.1255737168191, 380.9695579197111, 392.39143847431197, 396.0215788220616, 345.36442109387298, 363.19945770489153, 357.78295661317236, 344.39300526522604, 335.35929609098412, 316.45766883752384, 390.1558884558292, 387.02664076633303, 391.71497549438516],
        barData: [101.83012734537962, 201.53825252526971, 204.47073769074697, 110.51162506162747, 120.745269917398439, 350.00061626732007, 109.73324080435174, 289.6188222841112, 376.44650618279712, 366.62167672724283, 319.57450447772864, 316.696338853527237, 388.9558282479843, 288.75865937825296, 393.39638243885884, 319.10586780328858, 225.29240430332918, 339.7349983550872, 385.9016724254795, 383.21668134054892],
        color: ['#a6c84c', '#ffa022', '#46bee9'],
        series: [],
    }
}

const getters = {
    getChartsObj:function (state) {
        return state.chartsObj;
    }
}

const actions = {//异步获取值

}

const mutations = {//同步更新值
    
}
export default{
    state,
    getters,
    actions,
    mutations
}