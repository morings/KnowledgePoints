
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
api.queryAccount =  function(data){
  return server.post("/queryAccount",data);
}
api.addFriend =  function(data){
  return server.post("/addFriend",data);
}
api.queryFriendApply = function(data){
  return server.post("/queryFriendApply",data);
}
api.refuseFriendApply = function(data){
  return server.post("/refuseFriendApply",data);
}
api.aggreFriendApply = function(data){
  return server.post("/aggreFriendApply",data);
}
api.queryFriend = function(data){
  return server.post("/queryFriend",data);
}
api.getFriendInfo = function(data){
  return server.post("/getFriendInfo",data);
}
api.addReceive = function(data){
  return server.post("/addReceive",data);
}
api.getReceiveList = function(data){
  return server.post("/getReceiveList",data);
}
export default api;