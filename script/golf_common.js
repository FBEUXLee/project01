$(function () {
    // nav
    $('.gnb .depth').hide();
    $('.gnb').hover(function () {
        $('.gnb .depth').stop().slideToggle();
        $('.gnb > ul::after').stop().slideToggle();
    });

    // 사이트맵
    $('.account .sitemap_btn').click(function () {
        $('.sitemap').show();
    });
    $('.close_btn').click(function () {
        $('.sitemap').hide();
    });

    $('.sitemap .gnb_chor').click(function () {
        $('.sitemap .depth').stop().slideToggle();
        $('.sitemap .gnb_chor span').text(function (e, text) {
            $(this).parent().parent().siblings().find(".depth").stop().slideToggle("slow", "swing");
            return text === 'expand_Less' ? 'expand_more' : 'expand_Less';
        });
    });
})