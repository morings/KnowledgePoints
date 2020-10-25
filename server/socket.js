var ws = require('nodejs-websocket');
var server = ws.createServer(function(socket){
// 事件名称为text(读取字符串时，就叫做text)，读取客户端传来的字符串
　  var count = 1;
    socket.on('text', function(str) {    
        console.log(str);       
    });
}).listen(8090); 
console.log('websocket服务端启动成功')
