var formidable = require("formidable");
var path = require("path")
var fs = require('fs')
var reqpath = 'http://localhost:3000/files/'
const upload = function(req,res){
    var form = new formidable.IncomingForm();   //创建上传表单
    form.encoding = 'utf-8';        //设置编辑
    form.uploadDir = path.join(__dirname,"./upload/");     //设置上传目录
    form.keepExtensions = true;     //保留后缀
    form.maxFieldsSize = 2 * 1024 * 1024;   //文件大小
  
    form.parse(req, function(err, fields, files) {
  
      if (err) {
        
        return;
      } 
      var extName = '';  //后缀名
      switch (files.fulAvatar.type) {
        case 'image/pjpeg':
          extName = 'jpg';
          break;
        case 'image/jpeg':
          extName = 'jpg';
          break;
        case 'image/png':
          extName = 'png';
          break;
        case 'image/x-png':
          extName = 'png';
          break;
      }
  
      if(extName.length == 0){
        res.send({success:false,message:"只支持png和jpg格式图片"}); 
        return;
      }
  
      var avatarName = Math.random() + '.' + extName;
      //图片写入地址；
      var newPath = form.uploadDir + avatarName;
      //显示地址；
      var showUrl = reqpath + avatarName;
      fs.renameSync(files.fulAvatar.path, newPath);  //重命名
      res.json({
        success:true,
        data:{
          newPath:showUrl
        }
       
      });
    });
}
module.exports = {
  upload
}