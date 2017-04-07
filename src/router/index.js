import Vue from 'vue'
import Router from 'vue-router'
import header from '../components/common/header'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            component: resolve => require(['../components/pages/Login.vue'], resolve)

        }
    ]
})