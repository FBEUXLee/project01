var swiper = new Swiper(".sec01", {
    centeredSlides: true,
    slidesPerView: 1.8,
    spaceBetween: 25,
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
            slidesPerView:1.8,
        },
    },
});