$(function() {
    var mytoken = localStorage.getItem('mytoken');
    if (!mytoken) {
        // 如果不存在 则跳转到登录页面
        location.href = './login.html'
    };

    // 获取用户信息
    (function() {
        $.ajax({
            type: 'get',
            url: 'http://ajax.frontend.itheima.net/my/userinfo',
            headers: {
                Authorization: localStorage.getItem('mytoken')
            },
            success: function(res) {
                if (res.status === 0) {
                    var info = res.data;
                    // 填充用户名
                    $('#left-username').html(info.username);
                    $('#top-username').html(info.username);

                    // 填充头像
                    // 判断是否有头像
                    // 假数据
                    // info.user_pic = 'http://t.cn/RCzsdCq'
                    if (info.user_pic) {
                        // 存在头像数据
                        // prev() 当前元素前面的元素 prevAll()前面的所有元素
                        // prepend() 当前元素开头插入元素
                        $('#left-username').parent().prev().remove();
                        $('#top-username').prev().remove();
                        $('#left-username').parent().prepend('<img src=' + info.user_pic + '>')
                        $('#top-username').prepend('<img src=' + info.user_pic + '>')
                    }
                }
            }
        })
    })();
});