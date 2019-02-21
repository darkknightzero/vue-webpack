import VueRouter from 'vue-router'

import HomeContainer from './components/tabbar/HomeContainer.vue'
import CollectionContainer from './components/tabbar/CollectionContainer.vue'
import MessageContainer from './components/tabbar/MessageContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'

var router = new VueRouter({
    routes: [
        {path:'/',redirect:'/home'},
        {path: '/home',component: HomeContainer},
        {path: '/collection',component: CollectionContainer},
        {path: '/message',component: MessageContainer},
        {path: '/search',component: SearchContainer},
    ],
    linkActiveClass: 'mui-active'
})


export default router