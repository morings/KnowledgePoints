//接待列表
var {mongoose} = require('../db'),
     Schema = mongoose.Schema;
var ReceiveSchema = new Schema({
    userid:String,
    friendId:String
})
var Receive = mongoose.model('receive',ReceiveSchema);
module.exports = {Receive}