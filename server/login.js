
const {User,insert} = require('./class/user.js')
//加密模块
var crypto = require("crypto");

const login = function(req,res){
    //先查询有没有这个user
  var email = req.body.email;
  var UserPsw = req.body.password;
  //密码加密  
  var md5 = crypto.createHash("md5");
  var newPas = md5.update(UserPsw).digest("hex");
  //通过账号密码搜索验证
  var updatestr = {email: email,password:newPas};
  //处理跨域的问题
    res.setHeader('Content-type','application/json;charset=utf-8')
    res.header("X-Powered-By",' 3.2.1')
    
    User.find(updatestr, function(err, obj){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            if(obj.length == 1){
                console.log('登录成功');
                res.send({success:true,data:obj[0],message:"登录成功"}); 
            }else{
                console.log('请注册账号'); 
                res.send({message:false,message:"请先注册账号"}); 
            }
        }
    })
    
}
const register = function (req, res) {
  //处理跨域的问题
  res.setHeader('Content-type','application/json;charset=utf-8')
  res.header("X-Powered-By",' 3.2.1')
   //先查询有没有这个user
  var UserPsw = req.body.password;
  var Email = req.body.email;
  var avatar = req.body.avatar;
  console.log(req.body)
  //密码加密
  var md5 = crypto.createHash("md5");
  req.body.password = md5.update(UserPsw).digest("hex");
  //通过账号验证
  var updatestr = {email: Email};
    if(Email == ''){
       res.send({success:false}) ;
    }
    res.setHeader('Content-type','application/json;charset=utf-8')
    User.find(updatestr, function(err, obj){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            if(obj.length == 0){
                //如果查出无数据,就将账户密码插入数据库
                insert(req.body); 
                //返回数据到前端
                res.send({success:true,message:"注册成功"}) 
            }else if(obj.length !=0){
                res.send({success:false,message:"该邮箱已注册"}) 
            }
        }
    })  
};
module.exports = {
  login,
  register
}