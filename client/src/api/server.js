import axios from "axios";
import { Message } from 'element-ui';
const server = axios.create({
  headers: {
    'content-type': 'application/json'
  },
  baseURL:'/api'
})
// http response 拦截器
server.interceptors.response.use(
  res => {
    if(res.data.success){
      return res.data.data
    }else{
      Message({message:res.data.message,type:'error'})
      return Promise.reject(res.data.message) 
    }
  },
//接口错误状态处理，也就是说无响应时的处理
  error => {
    return Promise.reject(error) 
  }// 返回接口返回的错误信息
)
export default server