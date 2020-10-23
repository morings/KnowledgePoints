//好友申请
var {mongoose} = require('../db'),
     Schema = mongoose.Schema;
var FriendApplySchema = new Schema({
    userid:String,
    friendId:String,
    isAggre: Boolean,
    desc:String
})
var FriendApply = mongoose.model('friendApply',FriendApplySchema);
module.exports = {FriendApply}