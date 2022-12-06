$(function(){
    $(".gnb .depth1 > .gnb_item > .gnb_anchor").hover(function(){
        $(".gnb .depth2").stop().slideToggle();
    });
});