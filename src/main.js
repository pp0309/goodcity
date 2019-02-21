// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './common/reset.css'
import './common/flexble'
import axios from "axios";
Vue.config.productionTip = false

axios.interceptors.request.use((config)=>{
  if(config.method == "get"){
    config.params = config.data;
  }
 console.log(config)
  
   return config
 })
 
 axios.interceptors.response.use((res)=>{
  if(res.status == 200){
    return res.data;
  }
   return res;
 })
 
 
 Vue.prototype.$axios = axios;
 
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
