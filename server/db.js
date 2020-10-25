var mongoose = require('mongoose')
console.log(mongoose)
//数据库地址
var DB_URL = 'mongodb://localhost:27017/chat';

mongoose.connect(DB_URL);
mongoose.connection.once('open', ()=>console.log('mongo connect success'));
mongoose.connection.on('disconnected',function(){
    console.log('connect wrong');
})

module.exports = {mongoose};