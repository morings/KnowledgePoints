var {mongoose} = require('../db'),
     Schema = mongoose.Schema;
var FriendSchema = new Schema({
    userid:String,
    friendId:String,
    isAggre: Boolean,
    desc:String,
    friendAvatar:String,
    friendName:String
})
FriendSchema = mongoose.model('friend',FriendSchema);
module.exports = {FriendSchema}