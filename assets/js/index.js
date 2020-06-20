$(function() {
    var mytoken = localStorage.getItem('mytoken');
    if (!mytoken) {
        // 如果不存在 则跳转到登录页面
        location.href = './login.html'
    };

    // 获取用户信息
    function changeImg() {
        $.ajax({
            type: 'get',
            url: '/my/userinfo',
            // headers: {
            //     // 接口文档表示 my/ 类必须添加请求头
            //     Authorization: localStorage.getItem('mytoken')
            // },
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
                        // 1. 删除模板头像
                        $('#left-username').parent().prev().remove();
                        $('#top-username').prev().remove();
                        // 2. 增加img标签
                        $('#left-username')
                            .parent()
                            .find()
                            .remove()
                            .end()
                            .prepend('<img src=' + info.user_pic + '>')
                        $('#top-username')
                            .prepend('<img src=' + info.user_pic + '>')
                    }
                }
            }
        })
    }
    changeImg();

    // 利用Jq插件 将changeImg方法保存在$上
    $.changeImg = changeImg;



    // 退出功能
    (function() {
        $('#withdrawal').click(function() {
            // 显示弹框
            layer.confirm('确定要退出吗?', { icon: 3, title: '提示' }, function(index) {
                // 确定退出 执行 清除token (清空放回成功标志)
                localStorage.removeItem(mytoken);
                // 跳转至登录界面
                location.href = './login.html'

                layer.close(index);
            });
        })
    })();
});