//好友申请
var {mongoose} = require('../db'),
     Schema = mongoose.Schema;
var FriendSchema = new Schema({
    userid:String,
    friendId:String
})
var Friend = mongoose.model('friend',FriendSchema);
module.exports = {Friend}