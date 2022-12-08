$(function () {
    $(".gnb .depth1 > .gnb_item").hover(function () {
        $(".gnb .depth2").stop().slideToggle();
    });

    // 골프장날씨
    fetch('http://goweather.herokuapp.com/weather/Seogwipo')
        .then((response) => response.json())
        .then((data) => {
            document.getElementById("temperature").innerHTML = data['temperature'];
            document.getElementById("wind").innerHTML = data['wind'];
            document.getElementById("air").innerHTML = data['description'];
        });
});
