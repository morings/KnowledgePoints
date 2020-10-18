const {UserSchema} = require('./class/user.js')
const {FriendSchema} = require('./class/friend.js')
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
const queryAccount = function(req,res){
  let userid = req.body.userid;
  let email = req.body.email;
  let reg = new RegExp(email,'i');
  let pageIndex = req.body.pageIndex;
  let pageSize = req.body.pageSize;
  FriendSchema.find({userid},function(err,obj){
    if (err) {
      console.log("Error:" + err);
      res.send({success:false,message:"查询失败"}) 
    }
    let friends = obj.map(item=>item.friendId);
    UserSchema.find({email:{$regex : reg},_id:{$ne:userid}}).skip((pageIndex - 1) * pageSize).limit(pageSize||20).exec((err, doc) => {
      let data = []
      for(let item of doc){
        item = item.toObject()
        if(friends.includes(item._id.toString())){
          item.hasApply = true;
        }else{
          item.hasApply = false;
        }
        data.push(item)
      }
      UserSchema.find({email:{$regex : reg}}).then(result=>{
        res.send({success:true,data:{list:data,total:result.length}})
      })
    })
  })
}
const addFriend = function(req,res){
  let userid = req.body.userid;
  let friendId = req.body.friendId;
  let fiendLink = new FriendSchema({
    userid,
    friendId,
    isAggre:false
  })
  fiendLink.save(function(err){
    if(err){
      res.send({success:false,message:err})
    }
    else{
      res.send({success:true,message:"已发送好友申请"})
    }
  })
}
const queryFriendApply = function(req,res){
  let userid = req.body.userid;
  FriendSchema.find({userid},function(err,list){
    if(err){
      res.send({success:false,message:err})
    }else{
      res.send({success:true,data:{list,message:'查询成功'}})
    }
  })
}
module.exports = {
  getUserInfo,
  queryAccount,
  addFriend,
  queryFriendApply
}