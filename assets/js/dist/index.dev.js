"use strict";

$(function () {
  var mytoken = localStorage.getItem('mytoken');

  if (!mytoken) {
    // 如果不存在 则跳转到登录页面
    location.href = './login.html';
  }
});