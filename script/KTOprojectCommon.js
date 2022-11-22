$(function(){
    // language
    $(".account .language").hide();
    $(".account ul li span").click(function () {
        $(".account .language").stop().slideToggle("slow", "swing");
        $(this).text(function (e, text) {
            return text === 'expand_Less' ? 'expand_more' : 'expand_Less';
        });
    });

    // 사이트맵
    $(".sitemap .content .list").hide();
    $(".sitemap .nav a span").click(function () {
        $(this).parent().siblings(".content").find(".list").stop().slideToggle("slow", "swing");
        $(this).text(function (e, text) {
            return text === 'expand_Less' ? 'expand_more' : 'expand_Less';
        });
    });

    $(".sitemap .slideToggle").click(function () {
        $(".sitemap .list").stop().slideToggle("slow", "swing");
        $(this).text(function (e, text) {
            return text === '전체열기' ? '전체닫기' : '전체열기';
        });
        $(".sitemap .nav a span").text(function (e, text) {
            return text === 'expand_Less' ? 'expand_more' : 'expand_Less';
        });
    });

    $("form .shortcut").click(function () {
        $(".sitemap").show();
    });
    $(".sitemap .close").click(function () {
        $(".sitemap").hide();
    });

    // var $gnb = $('.gnb'),
    //     $gnb_top = $gnb.find('.depth1 > .gnb_item');

    // $gnb_top.each(function (n, v) {
    //     var $gnb_text = $(v).find('a:not(".depth2 a")').text();
    //     $(v).find('.depth2').append('<h3 class="gnb_title">' + $gnb_text + '</h3>');
    // });
});