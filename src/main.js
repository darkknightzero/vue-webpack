//入口文件
import Vue from 'vue'
import app from './App.vue'//导入App

import VueRouter from 'vue-router'//导入路由
Vue.use(VueRouter)

import VueResource from 'vue-resource'
Vue.use(VueResource)

import 'mint-ui/lib/style.css'//导入mint-ui组件
import './lib/mui/css/mui.min.css'

import { Header,Swipe,SwipeItem } from 'mint-ui'
Vue.component(Header.name,Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import router from './router.js'
var vm= new Vue({
  el: '#app',
  render: c=> c(app),
  router
})