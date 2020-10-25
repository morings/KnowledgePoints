const {User} = require('./class/user.js')
const {Friend} = require('./class/friend.js')
const {FriendApply} = require('./class/friendApply.js')
const {Receive} = require("./class/receive.js")
const getUserInfo = function(req,res){
  let userid = req.body.userid;
  User.find({_id:userid}, function(err, obj){
    if (err) {
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
  let friend = await Friend.find({userid});
  friend = friend.map(item=>item.friendId);  
  User.find({email:{$regex : reg},_id:{$ne:userid}}).skip((pageIndex - 1) * pageSize).limit(pageSize||20).exec((err, doc) => {
    let data = []
    for(let item of doc){
      item = item.toObject()
      if(friendsApply.includes(item._id.toString()) || friend.includes(item._id.toString())){
        item.hasApply = true;
      }else{
        item.hasApply = false;
      }
      data.push(item)
    }
    User.find({email:{$regex : reg}}).then(result=>{
      res.send({success:true,data:{list:data,total:result.length}})
    })
  })
}
const addFriend = async function(req,res){
  let userid = req.body.userid;
  let friendId = req.body.friendId;
  let desc = req.body.desc;
  let friendsApply = await FriendApply.findOne({userid,friendId})
  if(friendsApply){
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
    let friend = await User.findById(i.userid);
    i = i.toObject()
    i.friendName = friend.name
    i.friendAvatar = friend.avatar
    result.push(i)
  }
  res.send({data:{list:result},success:true})
}
const aggreFriendApply = async function(req,res){
  let id = req.body.applyId;
  let friendApply = await FriendApply.findById(id)
  if(!friendApply){
    res.send({success:false,message:"好友请求不存在"})
  }
  await FriendApply.findByIdAndRemove(id)
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
  FriendApply.findByIdAndRemove(id,function(err){
    if(err){
      res.send({success:false,message:err})
    }else{
      res.send({success:true,message:"操作成功"})
    }
  })
}
const queryFriend = async function(req,res){
  let userid = req.body.userid;
  let list = await Friend.find({userid});
  let result = []
  for(let item of list){
    item = item.toObject();
    let friend = await User.findById(item.friendId);
    item.avatar = friend.avatar;
    item.name = friend.name;
    item.id = friend._id
    result.push(item)
  }
  res.send({success:true,data:{list:result},message:'查询成功'})
}
const getFriendInfo = async function(req,res){
  let id = req.body.id;
  let info = await User.findById(id);
  res.send({success:true,message:'查询成功',data:info})
}
const addReceive = async function(req,res){
  let userid = req.body.userid;
  let friendId = req.body.friendId;
  let receive = await Receive.findOne({userid,friendId})
  if(receive){
    return res.send({success:true,data:{id:receive._id}})
  }
  receive = new Receive({userid,friendId})
  receive = await receive.save();
  res.send({success:true,data:{id:receive._id}})
}
const getReceiveList = async function(req,res){
  let userid = req.body.userid;
  let list = await Receive.find({userid});
  let result = [];
  for(let item of list){
    item = item.toObject();
    let friend = await User.findById(item.friendId);
    item.name = friend.name;
    item.avatar = friend.avatar;
    result.push(item)
  }
  res.send({success:true,data:result})
}
module.exports = {
  getUserInfo,
  queryAccount,
  addFriend,
  queryFriendApply,
  aggreFriendApply,
  refuseFriendApply,
  queryFriend,
  getFriendInfo,
  addReceive,
  getReceiveList
}