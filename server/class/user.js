var {mongoose} = require('../db'),
    Schema = mongoose.Schema;
var UserSchema = new Schema({
    email : String,
    name:String,
    password : String,
    logindate : Date,
    avatar:String
})
var User = mongoose.model('user',UserSchema);
/*插入数据库函数*/
function insert(data){
    //数据格式
    var user =  new User({
        email : data.email,
        password : data.password,
        name:data.name,
        avatar:data.avatar,
        logindate : new Date()
    });
    user.save()
}
module.exports = {User,insert}