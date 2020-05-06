import axios from 'axios'
import Vue from 'vue'
import qs from 'qs'
import { Message } from 'element-ui'
import Router from '../router'

axios.defaults.timeout = 60000

//请求拦截
axios.interceptors.request.use(config =>{

})

//相应拦截
axios.interceptors.response.use(res =>{

})

export default axios