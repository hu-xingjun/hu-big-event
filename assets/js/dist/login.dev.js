"use strict";

$(function () {
  // 切换登录-注册页
  $('.travel_registra a').click(function () {
    $('#login').hide();
    $('#registra').show();
  });
  $('.travel_login a').click(function () {
    $('#login').show();
    $('#registra').hide();
  }); // layui是全部变量 可以找到form表单

  var form = layui.form; // 自定义表单验证

  form.verify({
    uname: [/^[\S]{6,12}$/, '请输入6-12位的字符'],
    pswd: [/^[\w]{6,18}$/, '请输入6-8位的字母,数字及下划线'],
    same: function same(value) {
      // Jq 获取val()值 默认获取第一个的值
      var pswd = $('#same_pswd').val();

      if (pswd != value) {
        return '两次输入密码必须一致';
      }
    }
  }); // 登录界面 登录按钮

  (function () {
    $('#login_form').submit(function (e) {
      // 阻止默认事件
      e.preventDefault(); // 获取表单所有数据

      var formData = $(this).serialize(); // 调用登录接口

      $.ajax({
        type: 'post',
        url: 'api/login',
        data: formData,
        success: function success(res) {
          if (res.status === 0) {
            // 登录成功则保存登录成功标志到本地存储
            localStorage.setItem('mytoken', res.token);
            location.href = './index.html';
          } else {
            layer.msg(res.message);
          }
        }
      });
    });
  })(); // 注册界面 注册按钮


  (function () {
    $('#registra_form').submit(function (e) {
      // 阻止默认跳转
      e.preventDefault(); //    获取表单全部数据

      var formData = $(this).serialize(); // 调用注册接口

      $.ajax({
        type: 'post',
        url: 'api/reguser',
        data: formData,
        success: function success(res) {
          if (res.status === 0) {
            $('.travel_login a').click();
            layer.msg(res.message);
          } else {
            // 如果注册失败
            // res.message
            layer.msg(res.message);
          }
        }
      });
    });
  })();
});