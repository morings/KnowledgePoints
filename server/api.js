const {UserSchema} = require('./class/user.js')
const {Friend} = require('./class/friend.js')
const {FriendApply} = require('./class/friendApply.js')
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
const queryAccount = async function(req,res){
  let userid = req.body.userid;
  let email = req.body.email;
  let reg = new RegExp(email,'i');
  let pageIndex = req.body.pageIndex;
  let pageSize = req.body.pageSize;
  let friendsApply = await FriendApply.find({userid})
  friendsApply = friendsApply.map(item=>item.friendId);  
  UserSchema.find({email:{$regex : reg},_id:{$ne:userid}}).skip((pageIndex - 1) * pageSize).limit(pageSize||20).exec((err, doc) => {
    let data = []
    for(let item of doc){
      item = item.toObject()
      if(friendsApply.includes(item._id.toString())){
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
}
const addFriend = async function(req,res){
  let userid = req.body.userid;
  let friendId = req.body.friendId;
  let desc = req.body.desc;
  let friendsApply = await FriendApply.findOne({userid,friendId})
  if(friendsApply.lenth){
    return res.send({success:true,message:'已申请过了'})
  }
  let fiendApply = new FriendApply({
    userid,
    friendId,
    isAggre:false,
    desc:desc
  })
  fiendApply.save(function(err){
    if(err){
      res.send({success:false,message:err})
    }
    else{
      res.send({success:true,message:"已发送好友申请"})
    }
  })
}
const queryFriendApply = async function(req,res){
  let userid = req.body.userid;
  let list = await FriendApply.find({friendId:userid})
  let result = []
  for(let i of list){
    let friend = await UserSchema.findById(i.userid);
    i = i.toObject()
    i.friendName = friend.nickname
    i.friendAvatar = friend.avatar
    result.push(i)
  }
  res.send({data:{list:result},success:true})
}
const aggreFriendApply = async function(req,res){
  let id = req.body.applyId;
  let apply = await Friend.findById(id)
  if(!apply){
    res.send({success:false,message:"好友请求不存在"})
  }
  await FriendApply.findByIdAndRemove(id)
  let friendApply =await  FriendApply.findOne({_id:id});
  let friend1 = new Friend({
    userid:friendApply.userid,
    friendId:friendApply.friendId,
  })
  let friend2 = new Friend({
    userid:friendApply.friendId,
    friendId:friendApply.userid,
  })
  await friend1.save()
  await friend2.save();
  res.send({success:true,message:"操作成功"})
}
const refuseFriendApply = function(req,res){
  let id = req.body.applyId;
  FriendSchema.findByIdAndRemove(id,function(err){
    if(err){
      res.send({success:false,message:err})
    }else{
      res.send({success:true,message:"操作成功"})
    }
  })
}
const queryFriend = function(req,res){
  let userid = req.body.userid;
  Friend.find({userid},function(err,list){
    if(err){
      res.send({success:false,message:err})
    }else{
      res.send({success:true,data:{list},message:'查询成功'})
    }
  })
}
module.exports = {
  getUserInfo,
  queryAccount,
  addFriend,
  queryFriendApply,
  aggreFriendApply,
  refuseFriendApply,
  queryFriend
}