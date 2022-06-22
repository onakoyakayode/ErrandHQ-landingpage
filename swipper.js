var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});



//initialize swiper when document ready
var swiper = new Swiper ('.swiper-container', {
slidesPerView: 1,
spaceBetween: 10,
slidesPerGroup: 3,
breakpoints: {
    600: {
    slidesPerView: 4,
    spaceBetween: 100,
    },
},
// Optional parameters   


})