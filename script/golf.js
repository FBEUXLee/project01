$(function () {
    $(".gnb .depth2").hide();
    $(".gnb .depth1 > .gnb_item").hover(function () {
        $(".gnb .depth2").stop().slideToggle();
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
        var month = dateObj.getMonth()+1;
        var date = dateObj.getDate();
        document.getElementById('date').innerHTML = year + '-' + month + '-' + date;

    //상세안내
    $(".button a:first-chlid").click(function(){
        $(".explanation.ex01").show();
    });
});
