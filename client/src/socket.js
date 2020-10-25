import ReconnectingWebSocket from 'reconnecting-websocket';
const sockerUrl = 'ws://localhost:8090/'
function socket(){
  return new Promise(function(resolve, reject){
    try {
      var ws = new ReconnectingWebSocket(sockerUrl);
      ws.debug = true;
      ws.timeoutInterval = 5400;
      ws.onopen = function () {
        resolve(ws);
      };
      ws.onerror = function (e) {
        console.log(e);
      };
      ws.onclose = function (e) {
        reject({
          res: 1,
          msg: 'WebSocket 连接已断开'
        });
      };
    } catch (error) {
      console.error(error);
      reject({
        res: 1,
        msg: 'WebSocket 连接失败'
      });
    }
  });
}
export default socket;
