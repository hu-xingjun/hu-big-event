$(function() {
    // 登录事件
    (function() {
        // layui是全局对象 可以找到form表单
        var form = layui.form;
        // 基于LayUI的自定义验证规则
        form.verify({
                uname: [/^[\S]{6,12}$/, '密码必须是6-12位字符'],
                password: [/^[\d]{6}$/, '密码必须是6位数字']
            })
            // form提交表单
        $(".layui-form").submit(function(e) {
            // 阻止默认事件
            e.preventDefault();
            // 获取表单所有数据
            var formData = $(this).serialize();

            // 提交表单之前要进行表单验证
            console.log(formData)
                // 调用后台接口
            $.ajax({
                type: 'post',
                url: 'http://ajax.frontend.itheima.net/api/login ',
                data: formData,
                success: function(res) {
                    if (res.status === 0) {
                        // 跳转打开页面
                        location.href = './index.html'
                    }
                }
            })
        })
    })();

    // 点击前往注册+点击前往登录
    (function() {
        $('.registration a').click(function() {
            $('#login').hide();
            $('#registration').show();
        })

        $('.login a').click(function() {
            $('#login').show();
            $('#registration').hide();
        })
    })();
})