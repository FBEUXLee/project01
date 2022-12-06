$(function(){
    $(".gnb .depth1 > .gnb_item").hover(function(){
        $(".gnb .depth2").stop().slideToggle();
    });
});