import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import state from './state'
import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters' 

import children from '../components/ControlPanel/Childrens/ChildStore'


export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules : {
        children
    }
});