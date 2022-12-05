$(function(){
    $(".vertical-slide").each(function () {
        // 개별적으로 Wheel 이벤트 적용 mousewheel(IE/chrome/opera) DOMMouseScroll(FF)
        $(this).on("mousewheel DOMMouseScroll", function (e) {
            e.preventDefault();
            var delta = 0;
            /* IE */
            if (!event) event = window.event;
            //휠에 대한 정보 얻기 파이어폭스 외 IE/Chrome/Opera = wheelDelta
            if (event.wheelDelta) {
                delta = event.wheelDelta / 50;
                //평균 50~120 사이로 요소의 인식높이에 따라 다름(한 화면(height100%)기준일떄는 120
                if (window.opera) delta = -delta;
            //휠에 대한 정보 얻기 Mozilla FF = detail
            } else if (event.detail) delta = -event.detail / 3;
            var moveTop = null;
            // 마우스휠을 위에서 아래로
            if (delta < 0) {
                if ($(this).next() != undefined) {
                    moveTop = $(this).next().offset().top;
                }
            // 마우스휠을 아래에서 위로
            } else {
                if ($(this).prev() != undefined) {
                    moveTop = $(this).prev().offset().top;
                }
            }
            // 화면 이동 0.8초(800)
            $("html,body").stop().animate({
                scrollTop: moveTop + 'px'
            }, {
                duration: 500, complete: function () {
                }
            });
        });
    });
    

    //메일폼
    var regmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    emailjs.init("iE8kgMdT2Yfy5HeyS"); // API keys

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

    //-----------------------------스크롤버튼(nav)
    $(".navi li").each(function() {
        var thisOffset = $("." + $(this).data('id')).offset().top;

        $(this).click(function() {
            $("html, body").animate({
                scrollTop: thisOffset
            }, 1000);
            $(this).addClass('on');
        });
    });

    //----------------------------섹션이동 시 리모콘에 하이라이트
    var scrolltop = $(window).scrollTop();
    $("section").each(function() {
        if (scrolltop >= $(this).offset().top) {
            $(".navi li[data-id=" + $(this).attr('class').split(' ')[0] + "]").addClass('on').siblings().removeClass('on');
            $(this).addClass('on').siblings().removeClass('on');
        } else if (scrolltop >= $(".sec04").offset().top + 130) {
            $(".navi li[data-id=sec04]").addClass('on').siblings().removeClass('on');
        }
    });    
});
