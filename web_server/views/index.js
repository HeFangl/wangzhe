$(function() {
    function getHeroList() {
        $.ajax({
            type: "get",
            url: "http://127.0.0.1:5001/getallhero",
            success: function(res) {
                console.log(res);

                var html = template('row', res);
                $('#tbd').html(html)
            }
        })
    }
    getHeroList();

    //弹出隐藏层
    $("#add").on("click", function() {
        $('.ui.modal').modal('show')
    })

    // 初始化下拉框
    $('.ui.dropdown').dropdown()

    //添加英雄
    $('#btnAdd').on('click', function() {
        $.ajax({
            url: 'http://127.0.0.1:5001/addhero',
            data: $('form').serialize(),
            type: 'post',
            dataType: 'json',
            success: function(result) {
                //添加成功刷新页面
                if (result.status === 200) {
                    getHeroList()
                }
            }
        })
    })
})