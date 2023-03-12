import Vue from 'vue'
import Vuex from 'vuex'
import tab from './tab'
import header from './header'
Vue.use(Vuex)



export default new Vuex.Store({
    modules: {
        tab,
        header
    }
})