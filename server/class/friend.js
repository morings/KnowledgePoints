var {mongoose} = require('../db'),
     Schema = mongoose.Schema;
var FriendSchema = new Schema({
    userid:String,
    friendId:String,
    isAggre: Boolean     
})
FriendSchema = mongoose.model('friend',FriendSchema);
module.exports = {FriendSchema}