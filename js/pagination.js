var nombrePage = $(".pagin-content").length;

showPage = function(pagination) {
    if (pagination < 0 || pagination >= nombrePage) return;

    $(".content").hide().eq(pagination).show();
    $("#pagin li").removeClass("active").eq(pagination).addClass("active");
}

// Go to Left
$(".prev").click(function() {
    showPage($("#pagin ul .active").index() - 1);
});

// Go to Right
$(".next").click(function() {
    showPage($("#pagin ul .active").index() + 1);
});

$("#pagin ul a").click(function(e) {
    e.preventDefault();
    showPage($(this).parent().index());
});

showPage(0)