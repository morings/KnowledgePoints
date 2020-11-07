import {logToScreen} from './util.js'
let count = 0;
console.log('setInteval start')
setInterval(() => {
  count++;
  logToScreen(count);
}, 1000);
if(module.hot){
  module.hot.decline()
  module.hot.accept(['./util.js'])
}