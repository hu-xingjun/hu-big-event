"use strict";

$(function () {
  var mytoken = localStorage.getItem('mytoken');

  if (!mytoken) {
    location.href = './login.html';
  }
});