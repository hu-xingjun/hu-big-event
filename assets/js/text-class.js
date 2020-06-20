$(function() {
    var form = layui.form;
    // 分类列表渲染
    function classList() {
        $.ajax({
            type: 'get',
            url: '/my/article/cates',
            success: function(res) {
                var temList = template('info-text', res);
                // 渲染到页面
                $('tbody').html(temList)
            }
        })
    };
    classList();

    // 添加类别弹框-定义一个独有的凭证
    var indexAdd = null;
    // 编辑类别弹框-定义一个独有的凭证
    var indexEdito = null;

    // 添加类别
    function addClass() {
        $('#showAdd').click(function() {
            indexAdd = layer.open({
                type: 1,
                title: '添加文章类别',
                content: $('#add-class').html(),
                area: ['500px', '207px']
            });
        })
    };
    addClass();

    // 弹出框 确定添加点击事件 (通过body进行事件委托//因为是动态添加的弹框)
    $('body').on('click', '#add-form', function(e) {
        e.preventDefault();
        // 获取表单数据
        var formData = $(this).serialize();
        // 调用新增接口
        $.ajax({
            type: 'post',
            url: '/my/article/addcates',
            data: formData,
            success: function(res) {
                if (res.status === 0) {
                    layer.msg(res.message)
                    classList();
                    // 关闭弹窗
                    layer.close(indexAdd)
                }
            }
        })
    });

    // 编辑 (点击显示弹框)
    $('body').on('click', '#edito-btn', function() {
        // 通过Id获得数据
        var id = $(this).data('id');

        // 通过Id获取数据 接口
        $.ajax({
            type: 'get',
            url: '/my/article/cates/' + id,
            data: {
                id: id
            },
            success: function(res) {
                // console.log(res)
                // 渲染到弹窗
                form.val('edito_form', res.data)
            }
        })

        indexEdito = layer.open({
            type: 1,
            title: '编辑文章类别',
            content: $('#edito-class').html(),
            area: ['500px', '207px']
        });
    });

    // 编辑 提交表单事件
    $('body').on('submit', '#edito-form', function(e) {
        e.preventDefault();
        // 获取表单数据
        var formData = $(this).serialize();
        // 更新表单
        $.ajax({
            type: 'post',
            url: '/my/article/updatecate',
            data: formData,
            success: function(res) {
                classList();
                // 关闭弹窗
                layer.close(indexEdito)
            }
        })
    })

    // 删除
    $('body').on('click', '#del-btn', function() {
        // 获取当前自定义属性 id
        var id = $(this).data('id');
        // 通过id删除
        $.ajax({
            type: 'get',
            url: '/my/article/deletecate/' + id,
            data: {
                id: id
            },
            success: function(res) {
                if (res.status === 0) {
                    classList();
                    layer.msg(res.message)
                }
            }
        })
    });

})