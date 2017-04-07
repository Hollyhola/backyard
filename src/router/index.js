import Vue from 'vue'
import Router from 'vue-router'
import header from '../components/common/Header'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            // 路由懒加载
            component: resolve => require(['../components/pages/Login.vue'], resolve)

        }
    ]
})