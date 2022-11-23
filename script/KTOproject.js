var swiper = new Swiper(".swiper.banner", {
    centeredSlides: true,
    slidesPerView: 1.8,
    spaceBetween: 20,
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
            slidesPerView: 3.2,
        },
    },
});

$(function () {    
    // 섹션2 hover
    $(".boxContent01 a:eq(0)").hover(function () {
        $(this).children('img').attr("src", "image/채용정보2.svg");
    }, function () {
        $(this).children('img').attr("src", "image/채용정보.svg");
    });
    $(".boxContent01 a:eq(1)").hover(function () {
        $(this).children('img').attr("src", "image/알림마당2.svg");
    }, function () {
        $(this).children('img').attr("src", "image/알림마당.svg");
    });
    $(".boxContent01 a:eq(2)").hover(function () {
        $(this).children('img').attr("src", "image/사업공고공모2.svg");
    }, function () {
        $(this).children('img').attr("src", "image/사업공고공모.svg");
    });
    $(".boxContent01 a:eq(3)").hover(function () {
        $(this).children('img').attr("src", "image/정보공개신청2.svg");
    }, function () {
        $(this).children('img').attr("src", "image/정보공개신청.svg");
    });
    $(".boxContent01 a:eq(4)").hover(function () {
        $(this).children('img').attr("src", "image/영상물지원요청2.svg");
    }, function () {
        $(this).children('img').attr("src", "image/영상물지원요청.svg");
    });
    $(".boxContent01 a:eq(5)").hover(function () {
        $(this).children('img').attr("src", "image/관광정보수정신규요청2.svg");
    }, function () {
        $(this).children('img').attr("src", "image/관광정보수정신규요청.svg");
    });
    $(".boxContent01 a:eq(6)").hover(function () {
        $(this).children('img').attr("src", "image/똑똑한문의2.svg");
    }, function () {
        $(this).children('img').attr("src", "image/똑똑한문의.svg");
    });

    // 섹션3 right 보도자료
    $(".newstab button:eq(0)").on("click", function () {
        $(this).addClass("on").siblings().removeClass("on");
        $(".article02").stop(true).fadeIn(350);
        $(".article01").stop(true).fadeIn(350);
    });
    $(".newstab button:eq(1)").on("click", function () {
        $(this).addClass("on").siblings().removeClass("on");
        $(".article01").stop(true).fadeIn(100);
        $(".article02").hide();
    }).trigger('click');
    $(".newstab button:eq(2)").on("click", function () {
        $(this).addClass("on").siblings().removeClass("on");
        $(".article02").stop(true).fadeIn(100);
        $(".article01").hide();
    });
});