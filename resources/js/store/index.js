import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import state from './state'
import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters' 

import payment from '../components/ControlPanel/Payments/PaymentStore'
import station from '../components/ControlPanel/Stations/StationStore'


export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules : {
        payment,
        station
    }
});