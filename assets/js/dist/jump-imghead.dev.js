"use strict";

$(function () {
  // 图片裁剪
  $('.cropper-box img').cropper({
    // 纵横比
    aspectRatio: 1,
    // 指定预览区域
    preview: '.img-preview'
  });
});