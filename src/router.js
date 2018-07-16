import Vue from 'vue';
import VueRouter from 'vue-router';
import Nav from './todo/nav.vue'
import App from './app.vue'

const Home = {template: "<div>Home</div>"}
Vue.use(VueRouter)
const routers = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {path: '/Nav', component: Nav},
        {path: '/app', component: App},
    ]
})
export default routers
