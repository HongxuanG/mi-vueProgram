import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// 基础样式
import "./assets/css/base.css";
import "swiper/css/swiper.min.css";
import "./assets/font/iconfont.css";
import "./assets/font/iconfont";
import axios from "axios";
import moment from "moment";
Vue.prototype.$axios = axios;
// 统一配置
// 172.18.185.123 私网
// 120.79.21.182 公网
axios.defaults.baseURL = "http://120.79.21.182:3000";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.filter("dateFormat",function(value,format){
  return moment(value).format(format || "YYYY-MM-DD HH:mm:ss");
})
