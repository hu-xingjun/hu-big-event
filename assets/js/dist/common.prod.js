"use strict";$(function(){$.ajaxPrefilter(function(e){e.beforeSend=function(){window.NProgress&&window.NProgress.start()},e.url="http://ajax.frontend.itheima.net/"+e.url,e.url.lastIndexOf(!0)&&(e.headers={Authorization:localStorage.getItem("mytoken")}),e.complete=function(e){window.NProgress&&window.NProgress.done(),1===e.responseJSON.status&&"身份确认失败！"===e.responseJSON.message&&(localStorage.removeItem("mytoken"),location.href="./login.html")}})});