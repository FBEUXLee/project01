$(function(){
    $(".vertical-slider").each(function () {
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
    

    // 컬러hover
    $(".main-color .co01").mousemove(function(event){
        var x = event.pageX;
        var y = event.pageY;
        $(".tip01").css({left:x+10, top:y-40}).addClass("on");
    }).mouseleave(function(){
        $(".tip01").removeClass("on");
    });
    $(".main-color .co02").mousemove(function(event){
        var x = event.pageX;
        var y = event.pageY;
        $(".tip02").css({left:x+10, top:y-40}).addClass("on");
    }).mouseleave(function(){
        $(".tip02").removeClass("on");
    });

    //메일폼
    var regmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    emailjs.init("iE8kgMdT2Yfy5HeyS"); // API keys

    document.querySelector('.contactForm').addEventListener('submit', function(e) {
        e.preventDefault(); // submit이벤트 막기
        const fromName = document.querySelector('#from_name').value; //전송자 이름 추출
        const mailaddr = document.querySelector('#from_mail').value;

        if(regmail.test(mailaddr) === true){
            $('.caution').removeClass('on');
            emailjs.sendForm("service_9nqhgtd", "template_10kyvl5", this)
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
});