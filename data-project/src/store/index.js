import Vue from 'vue'
import Vuex from 'vuex'

import chartsObj from './modules/downloadAmount_chart'
import picObj from './modules/week_chart'
import dayTime from './modules/day'

Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        chartsObj,
        picObj,
        dayTime
    }
})
