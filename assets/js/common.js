$(function() {
    var baseURL = 'http://ajax.frontend.itheima.net/';

    // ajax 通用配置
    $.ajaxPrefilter(function(option) {
        // 发送请求前 调用进度条
        option.beforeSend = function() {
            window.NProgress && window.NProgress.start();
        };
        // 配置URL
        option.url = baseURL + option.url;

        // 配置 通用请求头
        if (option.url.lastIndexOf('/my/' !== -1)) {
            option.headers = {
                Authorization: localStorage.getItem('mytoken')
            }
        }

        // 处理失败
        option.complete = function(res) {
            // 结束时调用
            window.NProgress && window.NProgress.done();
            if (res.responseJSON.status === 1 && res.responseJSON.message === "身份确认失败！") {
                // 清空无效token
                localStorage.removeItem('mytoken');
                // 跳转到登录界面
                location.href = './login.html'
            }
        }

    })
})