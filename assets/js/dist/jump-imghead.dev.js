"use strict";

$(function () {
  // 图片裁剪
  // 裁剪区图片
  var cutImg = $('.cropper-box img'); // 规定裁剪区

  var option = {
    // 纵横比
    aspectRatio: 1,
    // 指定预览区域
    preview: '.img-preview'
  }; // 运用裁剪区

  cutImg.cropper(option); // 上传图片点击事件
  // 上传触发file标签的点击行为

  $('#upload').click(function () {
    $('#file').click();
  }); // 获取文件数据  更新图片url

  $('#file').change(function (e) {
    var files = e.target.files[0]; // 获取预览url地址

    var newUrl = URL.createObjectURL(files); // 把地址更新到img

    cutImg.cropper('destroy').attr('src', newUrl).cropper(option);
  }); // 点击提交确定事件

  $('#sure').click(function () {
    // 获取裁剪后的图片信息
    var cutUrl = cutImg.cropper('getCroppedCanvas', {
      width: 100,
      height: 100
    }).toDataURL('image/png'); //将画布上的内容转为base64格式
    // 更换头像接口文档

    $.ajax({
      type: 'post',
      url: '/my/update/avatar',
      data: {
        avatar: cutUrl
      },
      success: function success(res) {
        if (res.status === 0) {
          layer.msg(res.message); // 调用父窗口的更换头像方法

          window.parent.$.changeImg();
        }
      }
    });
  });
});