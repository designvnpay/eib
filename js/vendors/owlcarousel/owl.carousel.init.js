$(document).ready(function () {
  $(".slider_carousel_top").owlCarousel({
    loop: false,
    margin: 24,
    responsiveClass: true,
    responsive: {
      0: {
        items: 4,
        nav: true,
        margin: 16,
      },
      600: {
        items: 4,
        nav: true,
        margin: 16,
      },
      1000: {
        items: 6,
        nav: false,
        loop: false,
      },
    },
  });
  $(".slider_carousel_1").owlCarousel({
    loop: false,
    margin: 24,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
        margin: 16,
        stagePadding: 64,
      },
      600: {
        items: 2,
        nav: false,
        margin: 16,
      },
      1000: {
        items: 3,
        nav: true,
      },
    },
  });
  $(".slider_carousel_2").owlCarousel({
    //loop:true,
    //stagePadding: 100,
    margin: 24,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
        nav: true,
        margin: 16,
      },
      600: {
        items: 3,
        nav: true,
        margin: 16,
      },
      1000: {
        items: 3,
        nav: true,
      },
    },
  });
  $(".slider_carousel_3").owlCarousel({
    loop: false,
    margin: 24,
    responsiveClass: true,
    center: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
        margin: 16,
      },
      600: {
        items: 1,
        nav: true,
        margin: 16,
      },
      1000: {
        items: 1,
        nav: true,
      },
    },
  });
  $(".form-radio").owlCarousel({
    margin: 10,
    responsiveClass: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 3,
        nav: false,
      },
      600: {
        items: 5,
        nav: false,
      },
      768: {
        items: 6,
        nav: false,
      },
    },
  });
  $(".form-radio-5").owlCarousel({
    margin: 10,
    responsiveClass: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 5,
        nav: false,
      },
      600: {
        items: 5,
        nav: false,
      },
      768: {
        items: 5,
        nav: false,
      },
    },
  });

  $(".carousel-logo").owlCarousel({
    margin: 24,
    responsiveClass: true,
    responsive: {
      0: {
        items: 5,
        nav: false,
      },
      600: {
        items: 7,
        nav: false,
      },
      768: {
        items: 10,
        nav: false,
      },
    },
  });

  $(".carousel_card").owlCarousel({
    margin: 24,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
    },
  });
  /*
$('.owl-carousel-3d').owlCarousel({
    stagePadding: 180,
    loop:false,
    margin:0,
    padding:0,
    nav:true,
    items:1,
    lazyLoad: true,
    nav:true,    
  responsive:{
        0:{
            items:1,
            stagePadding: 60
        },
        600:{
            items:1,
            stagePadding: 120
        },
        770:{
            items:1,
            stagePadding: 190
        }
    },
});
*/
  $(".owl-carousel-3d").on(
    "initialized.owl.carousel translate.owl.carousel",
    function (e) {
      idx = e.item.index;
      $(".owl-item.big").removeClass("big");
      $(".owl-item.medium").removeClass("medium back-owl-item");
      $(".owl-item.medium").removeClass("medium next-owl-item");
      $(".owl-item").eq(idx).addClass("big");
      $(".owl-item")
        .eq(idx - 1)
        .addClass("medium back-owl-item");
      $(".owl-item")
        .eq(idx + 1)
        .addClass("medium next-owl-item");
    }
  );

  $(".owl-carousel-3d").owlCarousel({
    stagePadding: 180,
    loop: false,
    margin: 0,
    padding: 0,
    nav: true,
    items: 1,
    lazyLoad: true,
    nav: true,
    responsive: {
      0: {
        items: 1,
        stagePadding: 40,
      },
      600: {
        items: 1,
        stagePadding: 120,
      },
      770: {
        items: 1,
        stagePadding: 190,
      },
    },
  });

  $(".owl_content").owlCarousel({
    rewindNav: false,
    addClassActive: true, //important
    mouseDrag: false,
    afterAction: function add_mid_class(el) {
      $(".owl-item")
        .removeClass("middle")
        .removeClass("middle_beside")
        .removeClass("next_to_mid")
        .removeClass("prev_to_mid");
      var middle_item = Math.floor($(".active").length / 2);
      middle_item--;
      $(".active")
        .eq(middle_item - 1)
        .addClass("middle_beside");
      $(".active").eq(middle_item).addClass("middle");
      $(".active")
        .eq(middle_item + 1)
        .addClass("middle_beside");
      $(".active")
        .eq(middle_item + 1)
        .nextAll()
        .addClass("next_to_mid");
      $(".active")
        .eq(middle_item - 1)
        .prevAll()
        .addClass("prev_to_mid");
    },
  });

  var owl = $(".owl_content").data("owlCarousel");
  $(".owl_wrapper .next").click(function () {
    owl.next();
  });
  $(".owl_wrapper .prev").click(function () {
    owl.prev();
  });
});
