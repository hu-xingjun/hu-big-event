$(function() {
    // 切换登录-注册页
    (function() {
        $('.travel_registra a').click(function() {
            $('#login').hide();
            $('#registra').show()
        });
        $('.travel_login a').click(function() {
            $('#login').show();
            $('#registra').hide()
        })
    })();

    // 登录界面 登录按钮
    (function() {

        // layui是全部变量 可以找到form表单
        var form = layui.form;
        // 自定义表单验证
        form.verify({
            uname: [/^[\S]{6,12}$/, '请输入6-12位的字符'],
            pswd: [/^[\w]{6,18}$/, '请输入6-8位的字母,数字及下划线']
        })

        $('.layui-form').submit(function(e) {
            // 阻止默认事件
            e.preventDefault();
            // 获取表单所有数据
            var formData = $(this).serialize();

            // 调用接口
            $.ajax({
                type: 'post',
                url: 'http://ajax.frontend.itheima.net/api/login',
                data: formData,
                success: function(res) {
                    if (res.status === 0) {
                        location.href = './index.html'
                    }
                }
            })
        })
    })();

    // 注册界面 注册按钮
    (function() {

    })();
})