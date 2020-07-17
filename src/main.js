// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import store from './store'
import axios from 'axios'
import echarts from 'echarts'
import qs from 'qs';

Vue.use(ElementUI);
import  './axios'
Vue.prototype.$http = axios
Vue.prototype.$qs = qs
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

/* import './assets/style/resrt.css' */
import './assets/style/less/index.less'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
