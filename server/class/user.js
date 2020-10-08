var {mongoose} = require('../db'),
 uuid = require('uuid'),
    Schema = mongoose.Schema;
var UserSchema = new Schema({
    email : String,
    userpsw : String,
    logindate : Date,
    avatar:String
})
UserSchema = mongoose.model('user',UserSchema);
/*插入数据库函数*/
function insert(email,psw,avatar){
    //数据格式
    var user =  new UserSchema({
        email : email,
        userpsw : psw,
        avatar:avatar,
        userid:uuid.v1(),
        logindate : new Date()
    });
    user.save(function(err,res){
        if(err){
            console.log(err);
        }
        else{
            console.log(res);
        }
    })
}
module.exports = {UserSchema,insert}