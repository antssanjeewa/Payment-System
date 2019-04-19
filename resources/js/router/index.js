
import Vue from 'vue'
import Router from 'vue-router' 

import Admin from '../components/ControlPanel/DashBoard'
import Payment from '../components/ControlPanel/Payments'
import Station from '../components/ControlPanel/Stations'

import User from '../components/User'


Vue.use(Router)

const routes = [
    { path: '/', component: Admin},
    { path: '/users', component: User},
    { path: '/stations', component: Station},
    { path: '/payments', component: Payment}
    
]

export default new Router({
    // mode: 'history',
    routes
})