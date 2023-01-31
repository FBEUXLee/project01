$(function () {

    //슬라이드
    var swiper = new Swiper(".sec01", {
        centeredSlides: true,
        spaceBetween: 15,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            1024: {
                // slidesPerView: 1.8,
            },
        },
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
    // $(".button a.on").click(function (e) {
    //     e.preventDefault();
    //     $(".explanation.ex01").show();
    // });
    // $(".sec05 .reservation .explanation.ex01 .close").click(function () {
    //     $(".explanation.ex01").hide();
    // });

});