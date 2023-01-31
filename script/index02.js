$(document).ready(function(){
    $(".gnb li").each(function (){
        var thisOffset = $("." + $(this).data("id")).offset().top;

        $(this).click(function(){
            $("html, body").animate({
                scrollTop: thisOffset
            }, 1000);
        });
    });

    $("nav button:first-of-type").click(function(){
        $("nav .gnb").addClass("on");
        $("nav button:first-of-type").css({"display": "none",});
        $("nav button:last-of-type").css({"display": "block",});
    });

    $("nav button:last-of-type").click(function(){
        $("nav .gnb.on").removeClass("on");
        $("nav button:first-of-type").css({"display": "block",});
        $("nav button:last-of-type").css({"display": "none",});
    });
});

var swiper = new Swiper(".mySwiper", {
    navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


//메일폼
var regmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
emailjs.init("_25umooRsbcFGlOTZ"); // API keys

document.querySelector('#contactform').addEventListener('submit', function(e) {
    e.preventDefault(); // submit이벤트 막기
    const fromName = document.querySelector('#from_name').value; //전송자 이름 추출
    const mailaddr = document.querySelector('#from_mail').value;

    if(regmail.test(mailaddr) === true){
        $('.caution').removeClass('on');
        emailjs.sendForm("service_9nqhgtd", "template_5xa19me", this)
        .then(function() {
            alert(`${fromName}님, 메일 전송 완료 되었습니다.`)
        }, function(error) {
            alert(`${fromName}님, 메일 전송이 실패했습니다.`)
            console.log('전송실패', error);
        });
    } else{
        $('.caution').addClass('on');
    }
});

$('input[type=reset]').on('click', function(){
    $('.caution').removeClass('on');
});    

