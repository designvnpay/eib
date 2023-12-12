if ($(window).width() < 769) {
    var swiperFav = new Swiper('.swiper-fav', {
      slidesPerView: 'auto',
      navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
      },
    });
  };
  var swiperFav = new Swiper('.swiper-fav-sticky', {
   slidesPerView: 'auto',
   watchOverflow: true,
   navigation: {
     nextEl: '.swiper-next',
     prevEl: '.swiper-prev',
   },
 });