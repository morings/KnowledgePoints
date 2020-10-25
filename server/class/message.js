//好友申请
var {mongoose} = require('../db'),
     Schema = mongoose.Schema;
var MessageSchema = new Schema({
    userid:String,
    message:String
})
var Message = mongoose.model('friend',MessageSchema);
module.exports = {Message}