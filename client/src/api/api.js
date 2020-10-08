
import server from "./server.js"
const api = {};
api.register = function(data){
  return server.post("/register",data);
}
api.login = function(data){
  return server.post("/login",data);
}
api.upload = function(data){
  return server.post("/upload",data,{
    'Content-Type': 'multipart/form-data'
  });
}
api.getUserInfo =  function(data){
  return server.post("/getUserInfo",data);
}
export default api;