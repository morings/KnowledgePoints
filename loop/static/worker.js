

getTime()
setInterval(getTime,1000)
function getTime(){
  var xmlhttp;
  xmlhttp=new XMLHttpRequest();
  var time = new Date().getTime();
  xmlhttp.onreadystatechange=state_Change;
  xmlhttp.open("GET",`/getTime?time=${time}`,true);
  xmlhttp.send()
  function state_Change(){
    if (xmlhttp.readyState==4){// 4 = "loaded"
      if (xmlhttp.status==200){
        let data = JSON.parse(xmlhttp.response);
        self.postMessage(data)
      }       
    }
  }
}