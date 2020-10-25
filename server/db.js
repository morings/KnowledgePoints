var mongoose = require('mongoose')
//数据库地址
var DB_URL = 'mongodb://localhost:27017/chat';

mongoose.connect(DB_URL);
mongoose.connection.once('open', ()=>console.log('数据库连接成功'));
mongoose.connection.on('disconnected',function(){
    console.log('数据库连接失败');
})

module.exports = {mongoose};