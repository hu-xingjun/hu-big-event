"use strict";

$(function () {
  //表单验证
  var form = layui.form;
  form.verify({
    oldsame: function oldsame(value) {
      var oldPwd = $('#oldPwd').val();

      if (value === oldPwd) {
        return '新旧密码不能一致';
      }
    },
    newsame: function newsame(value) {
      var newPwd = $('#newPwd').val();

      if (value !== newPwd) {
        return '两次密码输入不一致,请重新输入';
      }
    }
  }); //表单提交

  $('form').submit(function (e) {
    e.preventDefault(); // 获取表单全部数据

    var formData = $(this).serialize();
    $.ajax({
      type: 'post',
      url: 'my/updatepwd',
      data: formData,
      success: function success(res) {
        if (res.status === 0) {
          layer.msg(res.message);
        } else {
          layer.msg(res.message);
        }
      }
    });
  });
});