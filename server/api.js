const {UserSchema} = require('./class/user.js')
const getUserInfo = function(req,res){
  let userid = req.body.userid;
  UserSchema.find({_id:userid}, function(err, obj){
    if (err) {
      console.log("Error:" + err);
      res.send({success:false,message:"查询失败"}) 
    }
    else {
        if(obj.length == 0){
            res.send({success:false,message:"查询失败"}) 
        }else if(obj.length !=0){
            res.send({success:true,data:obj[0]}) 
        }
    }
  })
}
module.exports = {
  getUserInfo
}