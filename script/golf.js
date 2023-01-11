$(function () {
    // nav
    $('.gnb .depth').hide();
    $('.gnb').hover(function(){
        $('.gnb .depth').stop().slideToggle();
        $('.gnb > ul::after').stop().slideToggle();
    });

    // 골프장 날씨
    fetch('http://goweather.herokuapp.com/weather/Seogwipo')
        .then((response) => response.json())
        .then((data) => {
            document.getElementById("temperature").innerHTML = data['temperature'];
            document.getElementById("wind").innerHTML = data['wind'];
            document.getElementById("air").innerHTML = data['description'];
        });

    //골프장 날짜
    var dateObj = new Date();
    var year = dateObj.getFullYear();
    var month = dateObj.getMonth() + 1;
    var date = dateObj.getDate();
    document.getElementById('date').innerHTML = year + '-' + month + '-' + date;

    //상세안내
    $(".button a.on").click(function (e) {
        e.preventDefault();
        $(".explanation.ex01").show();
    });
    $(".sec05 .reservation .explanation.ex01 .close").click(function () {
        $(".explanation.ex01").hide();
    });

    // 사이트맵
    $('.account .sitemap_btn').click(function(){
        $('.sitemap').show();
    });
    $('.close_btn').click(function(){
        $('.sitemap').hide();
    });

    $('.sitemap .gnb_chor').click(function(){
        $('.sitemap .depth').stop().slideToggle();
        $('.sitemap .gnb_chor span').text(function (e, text) {
            $(this).parent().parent().siblings().find(".depth").stop().slideToggle("slow", "swing");
            return text === 'expand_Less' ? 'expand_more' : 'expand_Less';
        });
    });
});