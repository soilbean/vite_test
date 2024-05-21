import axios from 'axios'
import store from '../store/index'
import router from '../router'
import { getToken } from './tokenAuth'


const service = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 60000,
    // headers: {
		// "Content-type": "application/json;charset=utf-8"
	  // }
})
// 请求拦截
service.interceptors.request.use((config)=> {
  // console.log(config)
  let token = getToken()
  if(token){
    config.headers.Authorization = 'Bearer' + ' ' + token
  }
  
  return config
},err => {
  return Promise.reject(err)
})
// 响应拦截
service.interceptors.response.use(res => {
  if(res.data.status == 400){
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('userInfo')
    setTimeout(() => {
      router.push({
        path: '/login',
        query: {
            redirect: router.currentRoute.fullPath
        }
      })
    },500)
  }else{
    return Promise.resolve(res)
  }
},err => {
  console.log(err)
  // status在400-500之间都重新登陆
  if(err.status >= 400 && err.status <= 500 ){
    window.localStorage.removeItem('token')
    router.push({
      path: '/login',
      query: {
          redirect: router.currentRoute.fullPath
      }
    })
  }
  return Promise.reject(err.response)
})

export default service
