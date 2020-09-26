
import server from "./server.js"
const api = {};
api.register = function(data){
  return server.post("/register",data);
}
api.login = function(data){
  return server.post("/login",data);
}
export default api;