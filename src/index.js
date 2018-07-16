/*
 * Created by Sun Wen on 2018/6/4.
 */
import Vue from 'vue'
import Nav from './todo/nav.vue'
import './assets/styles/style.css'
// import './assets/data/data.js'
import router from './todo/router.js'

Vue.config.devtools = true;
const root = document.createElement('div')
document.body.appendChild(root)
new Vue({
    router,   //not Router,  需要严格参照router的构造配置http://router.vuejs.org/zh-cn/api/options.html
    render: (h) => h(Nav)
}).$mount(root)





