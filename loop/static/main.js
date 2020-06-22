const worker = new Worker('/worker.js');
worker.addEventListener('message',function(e){
  $("#time").text(e.data.time)
})