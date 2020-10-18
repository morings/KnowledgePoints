var {mongoose} = require('../db'),
    Schema = mongoose.Schema;
var UserSchema = new Schema({
    email : String,
    nickname:String,
    password : String,
    logindate : Date,
    avatar:String
})
UserSchema = mongoose.model('user',UserSchema);
/*插入数据库函数*/
function insert(data){
    //数据格式
    var user =  new UserSchema({
        email : data.email,
        password : data.password,
        nickname:data.nickname,
        avatar:data.avatar,
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