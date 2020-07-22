import axios from 'axios'
import Vue from 'vue'
import qs from 'qs'
import { Message, Loading } from 'element-ui'
import router from '../router'

let loadingInstance

axios.defaults.timeout = 60000

//请求拦截
axios.interceptors.request.use(config =>{
  if(config.headers.default === true) {
    delete config.headers.default
    return config
  }

  let token = ''
  try {
    token = config.token || JSON.parse(localStorage.getItem('loginInfo')).token
    config.headers['token'] = token
    if(config.method.toLowerCase() == 'post') { 
      if(config.data) {
        config.data.token = token
      }else {
        config.data = { token }
      }
    }
    if(config.method.toLowerCase() == 'get') {
      if(config.params) {
        config.params.token = token
      }else {
        config.params = { token }
      }
    }
  }catch (err) {
    console.log(err)
    /* router.push('/login') */
  }

  if(config.method == 'post' && config.mheaders !== true) {
    config.data = qs.stringify(config.data);
  }
  config.url = (config.apiPrefix ? `/${config.apiPrefix}` : '/manager') + config.url
  
  loadingInstance = Loading.service({
    lock: true,
    text: '正在加载',
    spinner: 'el-icon-loading',
    background: 'rgba(255, 255, 255, 0.7)'
  });

  return config
}, (error) => {
  return Promise.reject(error)
})

//响应拦截
axios.interceptors.response.use(res =>{

  setTimeout(_ => {
    if(loadingInstance){
      loadingInstance.close();
    }
  },500)

  if(res.data.code == '8888') {
    Message({
      type: 'error',
      message: res.data.description,   
      showClose: true
    });
    /* router.push('/login') */
    localStorage.removeItem('loginInfo')
    res.data.description = '用户登录超时'
    return Promise.reject(res)
  }
  if(res.data.code != '0000') {
    Message({
      type: 'error',
      message: res.data.description,
      showClose: true
    })
    return Promise.reject(res)
  }
  return res.data;
}, (error) => {
  if(error.response.config.noMessage) {
    return
  }
  if(error.response) {
    switch (error.response.status) {
      case 400:
       Message({
         type: 'error',
         message: '用户发出的请求有错误',
         duration: 5000
       })
       break
       case 404: 
       Message({
         type: 'error',
         message: '请求不存在',
         duration: 5000
       })
       break
       case 500:
        Message({
        type: 'error',
        message: '服务器发生错误',
        duration: 5000
      })
      break
      default:
      Message({
        type: 'error',
        message: '网络出错，请稍后再次尝试',
        duration: 5000
      })
      break
    }
  }
  return Promise.reject(error)
});

export default axios