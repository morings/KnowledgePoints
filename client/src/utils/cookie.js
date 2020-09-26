function getCookie(c_name) {
  if (document.cookie.length > 0) {
    console.log(document.cookie);
    c_start = document.cookie.indexOf(c_name + "=");
    if (c_start != -1) {
      c_start = c_start + c_name.length + 1;
      c_end = document.cookie.indexOf(";", c_start);
      if (c_end == -1) c_end = document.cookie.length;
      return unescape(document.cookie.substring(c_start, c_end));
    }
  }
  return "";
}

function setCookie(c_name, value, expiredays) {
  var cookieStr = "";
  var exdate = new Date();
  exdate.setDate(exdate.getDate() + expiredays);
  document.cookie = c_name + "=" + escape(value) +
    ((expiredays == null) ? "" : "; expires=" + exdate.toGMTString()) + ";path=/";
} //由于cookie存在域的概念，且在这里要不区分域，获取cookie的值，所以在这里使用的是统一的路径 path=/ ；
function delCookie(name, path, domain) {
  if (get_cookie(name)) {
    document.cookie = name + "=" +
      ((path) ? ";path=" + path : "") +
      ((domain) ? ";domain=" + domain : "") +
      ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
  }
}
export {
  getCookie,
  setCookie,
  delCookie
}