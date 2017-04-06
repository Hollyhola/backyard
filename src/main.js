// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
// 引入部分组件
import { Button, Select } from 'element-ui'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Button)
Vue.use(Select)
    /* eslint-disable no-new */
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')