import Vue from 'vue'
import Index from '../app.vue'
import Item from './item.vue'

Vue.config.devtools = true;
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const router = new VueRouter({
    mode: "history",
    linkActiveClass: "current_ele",
    base: __dirname,
    routes: [
        {path: '*', component: Index},
        {path: '/index', component: Index},
        {path: '/item', component: Item}
    ]
})
export default router
// new Vue({
//     router,
//     template: Nav
// })