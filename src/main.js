//入口文件
import Vue from 'vue'
import app from './App.vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { Header } from 'mint-ui'
import './lib/mui/css/mui.min.css'
Vue.component(Header.name,Header)

var vm= new Vue({
  el: '#app',
  render: c=> c(app)
})