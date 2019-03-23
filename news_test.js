(function () {
    $.ajax({
        type: "get",
        url: "./news.json",
        dataType: "json",
        success: function (data) {
            var html = '';
            for (var i = 1; i <= 10; i++) {
                html += '<a href="' + data[i].link + '" >' + data[i].title + '</a><br>';
            }
            $("#news").html(html);
        }
    });
})();