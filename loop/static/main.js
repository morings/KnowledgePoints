const worker = new Worker('/worker.js');
worker.addEventListener('message',function(e){
  $("#time").text(moment(Number(e.data.time)).format('YYYY-MM-DD HH:mm:ss'))
})