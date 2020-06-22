importScripts("https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.js")
$.ajax({
  url:'http://localhost:3000/getTime',
  data:{
    time:new Date().getTime()
  },
  success: function(res) {
    self.postMessage(res.data)
  }
})