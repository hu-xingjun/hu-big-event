"use strict";

$(function () {
  var form = layui.form; // 获取用户信息 填充到表单

  function getUsersinfo() {
    $.ajax({
      type: 'get',
      url: 'my/userinfo',
      success: function success(res) {
        // 必须跟表单属性 lay-filter的值一致"info_form"
        form.val('info_form', res.data);
      }
    });
  }

  ;
  getUsersinfo(); // 表单提交事件

  $('form').submit(function (e) {
    // 阻止默认事件
    e.preventDefault(); // 获取表单所有的数据

    var formData = $(this).serialize();
    $.ajax({
      type: 'post',
      url: 'my/userinfo',
      data: formData,
      success: function success(res) {
        layer.msg(res.message);
      }
    });
  });
});