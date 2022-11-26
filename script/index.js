$(function(){
    $('nav ul li').on('click', function(){
        $('.vertical-slider').slick('slickGoTo', $(this).data('index'));
    });
    const swiper = new Swiper('.swiper', {
        mousewheel: {
          invert: true,
          sensetivity : 1
        },
      });
});