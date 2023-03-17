import request from '../request'

export function products(params) {
    return request({
      url: "/users/login",  //接口路径
      method: "get",  //接口方法
      params  //接口参数
    });
  }
   
  export function login(data) {
    return request({
      url: "/users/login",
      method: "post",
      data,
    });
  }