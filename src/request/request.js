import axios from "axios";
const service = axios.create({
  // baseURL: 'http://192.168.3.49:9999',

  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 60000,
})
service.interceptors.request.use(
  (config) => {
    if (localStorage.getItem('Authorization')) {
      config.headers.Authorization = localStorage.getItem('Authorization')
    }

    // config.headers.caCode = localStorage.getItem('caId')
    // config.headers['X-Access-Token'] = localStorage.getItem('token')
    // if (config.method == 'get') { //暂时定义caid 后期更具账户来
    //   config.headers.caId = localStorage.getItem('caId')
    //   config.headers['X-Access-Token'] = localStorage.getItem('token')
    // } else {
    //   config.headers.caId = localStorage.getItem('caId')
    //   config.headers['X-Access-Token'] = localStorage.getItem('token')
    // }
  
    return config
  }, (err) => {
    return Promise.reject('err')
  }
)
service.interceptors.response.use(
  response => {
    const res = response.data;  // 该处可将后端数据取出，提前做一个处理

    if (res.code == 0 || res.code == 200) {
      return res  // 该处将结果返回，下一步可用于前端页面渲染用
    } else if (res.code == 404) {
     

    } else if (res.code == 401) {
     
      return res
     
    }
    else {

      
      return Promise.reject('error')

    }
  },


)
export default service