"use strict";$(function(){$(".travel_registra a").click(function(){$("#login").hide(),$("#registra").show()}),$(".travel_login a").click(function(){$("#login").show(),$("#registra").hide()}),layui.form.verify({uname:[/^[\S]{6,12}$/,"请输入6-12位的字符"],pswd:[/^[\w]{6,18}$/,"请输入6-8位的字母,数字及下划线"],same:function(e){if($("#same_pswd").val()!=e)return"两次输入密码必须一致"}}),$("#login_form").submit(function(e){e.preventDefault();var t=$(this).serialize();$.ajax({type:"post",url:"/api/login",data:t,success:function(e){0===e.status?(localStorage.setItem("mytoken",e.token),location.href="./index.html"):layer.msg(e.message)}})}),$("#registra_form").submit(function(e){e.preventDefault();var t=$(this).serialize();$.ajax({type:"post",url:"/api/reguser",data:t,success:function(e){0===e.status&&$(".travel_login a").click(),layer.msg(e.message)}})})});