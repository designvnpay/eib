$(document).ready(function () {  
  // Cap nhat avatar
  if (document.getElementById("p-upload-crop") != null) {
    var $uploadCrop;
    var cropEl = document.getElementById('p-upload-crop');
    function readFile (input) {
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
          $uploadCrop.bind({
            url: e.target.result
          });
          $('#modal-profile').modal('show');
        }

        reader.readAsDataURL(input.files[0]);
      }
      else {
        swal("Sorry - you're browser doesn't support the FileReader API");
      }
    }

    $uploadCrop = new Croppie(cropEl, {
      enableExif: true,
      viewport: {
        width: 200,
        height: 200,
        type: 'circle'
      },
      boundary: {
        width: '100%',
        height: 300
      }
    });
    document.getElementById('p-upload').onchange = function () { readFile(this); };
    $('#get-cropped').on('click', function () {
      $uploadCrop.result({ type: 'base64', format: 'png' }).then(function (r) {
        // console.log(r)
        ;
      });
    });
    var abc = document.getElementById('p-upload-2');
    if ($(abc).length > 0) {
      abc.onchange = function () { readFile(this); };
    }
    $('#get-cropped').on('click', function () {
      $uploadCrop.result({ type: 'base64', format: 'png' }).then(function (r) {
        // console.log(r)
        ;
      });
    });
  }

  // End Cap nhat avatar
  //Script đành cho bản vip demo
  var vipLink = window.location.href;
  if (vipLink.indexOf('html-vip') > 0) {
    $('head').append('<link rel="stylesheet" href="vip/css/vip.css" type="text/css" />');
    $('[src*="/primary"]').each(function () {
      $(this).attr('src', 'vip/vip-' + $(this).attr('src'));
    });
    $('[src*="banner"]').each(function () {
      $(this).attr('src', 'vip/vip-' + $(this).attr('src'));
    });
    $('[src*="logo-white-type-2.svg"]').each(function () {
      $(this).attr('src', 'vip/vip-' + $(this).attr('src'));
    });
  }
  //end Script đành cho bản vip demo
  $('.steps').each(function () {
    var stepItem = $(this).find('.steps__item');
    var stepItemLength = stepItem.length;
    var stepItemActive = $(this).find('.steps__item--active');
    var stepItemActiveLength = stepItemActive.length;
    $(stepItemActive).eq(stepItemActiveLength - 1).addClass('steps__item--active--last');
    var itemSpace = (100 / (stepItemLength - 1)) * (stepItemActiveLength - 1);
    console.log($(stepItemActive).eq(stepItemActiveLength));
    $(this).find('.steps__progress').css('width', itemSpace + '%')
  });
  $('.table-wraper-size').scroll(function (e) {
    var _this = this;
    if (_this.scrollWidth === (_this.scrollLeft + _this.clientWidth)) {
      $(_this).parent('.table-wraper-inner').addClass('right-none');
    }
    else {
      $(_this).parent('.table-wraper-inner').removeClass('right-none');
    };

    if (_this.scrollLeft === 0) {
      $(_this).parent('.table-wraper-inner').addClass('left-none');
    }
    else {
      $(_this).parent('.table-wraper-inner').removeClass('left-none');
    };
  }).scroll();
  if (deviceIsMobile == false) {
    $('body').addClass('no-touch')
  };
  if (deviceIsMobile == true) {
    $('.bg').css('min-height', $(window).height() + 100)
    // $('.bg--login').css('min-height', $(window).height() + 300)
  };
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
  var swiperLogin = new Swiper('.swiper-login', {
    spaceBetween: 30,
    autoplay: {
      delay: 7000,
    },
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  });
  var swiperLogin = new Swiper('.swiper-km-big', {
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
  });

  var swiper3it = new Swiper('.swiper-3-it', {
    spaceBetween: 10,
    slidesPerView: 3,
    navigation: {
      nextEl: '.swiper-3-it ~ .swiper-next',
      prevEl: '.swiper-3-it ~ .swiper-prev',
    },
    breakpoints: {
      // when window width is >= 480px
      640: {
        slidesPerView: 'auto'
      }
    }
  });

  if ($('body').has('.main .fav-inner').length > 0) {
    var hieghtThreshold;
    function stickyHeightCal () {
      if ($(".main .fav-inner").length) {
        if ($(window).width() > 768) {
          hieghtThreshold = $(".main .fav-inner").offset().top + $(".main .fav-inner").height() - 120;
        }
        else {
          hieghtThreshold = $(".main .fav-inner").offset().top;
        }
      }
    };
    $(window).resize(function () {
      stickyHeightCal()
    });
    $(function () {
      stickyHeightCal();
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= hieghtThreshold) {
          $('.fav--sticky').addClass('sticky-fav');
        } else {
          $('.fav--sticky').removeClass('sticky-fav');
        }
      });
    });
    $(function () {
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 16) {
          $('.menu').addClass('menu--sticky');
        }
        else {
          $('.menu').removeClass('menu--sticky');
        }
        if ($(window).width() >= 1200) {
          if (scroll >= 16) {
            $('.search').addClass('search--sticky');
            $('.fav--sticky').addClass('fav--sticky-top');
          }
          else {
            $('.fav--sticky').removeClass('fav--sticky-top');
          }
        }
      });
    });
  }
  else {
    $('.fav--sticky').addClass('sticky-fav');
    $(window).scroll(function () {
      if ($(window).width() >= 1200) {
        var scroll = $(window).scrollTop();
        if (scroll >= 16) {
          $('.menu').addClass('menu--sticky');
        }
        else {
          $('.menu').removeClass('menu--sticky');
        }
      }
    });
  };
  if (iOS()) {
    $('#search').focus(function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    })
  }
  //sidebar-cal
  // if ($('.sidebar-mini__item').hasClass('active')) {
  //    sidebarActiveFirstPos = $('.sidebar-mini__item.active').position().top;
  //    $('.sidebar-mini-active').addClass('show');
  // }
  // else {
  //    sidebarActiveFirstPos = ''
  // }
  // $('[name=sidebar-m-trigger]').on('change', function () {
  //    sidebarId = $(this).attr('id');
  //    if ($(this).is(':checked')) {
  //       $('[for=' + sidebarId + ']').addClass('sidebar-item--acitve');
  //       $('.sidebar-left').addClass('sidebar-left--open')
  //       $('[name=sidebar-m-trigger]:not(#' + sidebarId + ')').prop("checked", false);
  //       $('.sidebar-right-expand-overlay').addClass('active');
  //    }
  //    else {
  //       $('label.sidebar-mini__item').removeClass('sidebar-item--acitve');
  //       $('.sidebar-left').removeClass('sidebar-left--open');
  //       $('.sidebar-right-expand-overlay').removeClass('active');
  //    }
  // });
  // if ($(window).width() >= 1200) {
  //    $('label.sidebar-mini__item').on('click', function () {
  //       sidebarActivePos = $(this).position().top;
  //       $('.sidebar-mini-active').css('top', sidebarActivePos).addClass('show');
  //    });
  // }
  // else {
  //    $('label.sidebar-mini__item:not(.sidebar-mini--home)').on('click', function () {
  //       sidebarActivePos = $(this).position().top;
  //       $('.sidebar-mini-active').css('top', sidebarActivePos).addClass('show');
  //    });
  // };
  // $('.breadcrumbs > label').on('click', function () {
  //    var idFor = $(this).attr('for');
  //    console.log(idFor);
  //    $('.sidebar-mini__item[for=' + idFor + ']').trigger('click')
  // });
  // $('.close-sidebar-left').on('click', function () {
  //    $('.sidebar-left').removeClass('sidebar-left--open');
  //    $(this).removeClass('active');
  //    $('[name=sidebar-m-trigger]').prop("checked", false);
  //    if ($('.sidebar-mini__item').hasClass('active')) {
  //       $('.sidebar-mini-active').css('top', sidebarActiveFirstPos)
  //    }
  //    else {
  //       $('.sidebar-mini-active').removeClass('show');
  //    }
  // });
  // $('.sidebar-mini--home').on('click', function () {
  //    $('.sidebar-left').removeClass('sidebar-left--open');
  // });
  if ($(window).width() < 1200) {
    $('#sidebar1').prop("checked", true);
  };
  //end sidebar-cal
  //radio Show
  $('input[type=radio][showFor]').on('change', function () {
    $('input[type=radio][showFor]').each(function () {
      name = $(this).attr('name');
      idShow = $($(this).attr('showFor'));
      idShow.addClass('hidden');
      if ($(this).is(':checked')) {
        idShow.removeClass('hidden')
      }
      else {
        idShow.addClass('hidden');
      }
    })
  });
  $('input[type=radio][showFor]').trigger('change')
  //end radio Show
  //template select-2-confirm
  function templateConfirm (confirm) {
    if (!confirm.id) { return confirm.text; }
    var $confirm = $('<div class="select-txt-main">' + confirm.text + '</div><div class="select-txt-sub h6">' + confirm.element.attributes.datainfo.value + '</div>');
    return $confirm;
  };
  function templateImg (img) {
    if (!img.id) { return img.text; }
    var $img = $('<div class="select-tpl-img-wrap"><div class="select-tpl-img" style="background-image: url(images/web/img/' + img.element.attributes.dataimg.value + ')"></div><div class="sselect-tpl-txt">' + img.text + '</div></div>');
    return $img;
  };
  $('.select-2-template-cf').select2({
    templateResult: templateConfirm,
    templateSelection: templateConfirm,
  });

  $('.select-2-template-img').select2({
    templateResult: templateImg,
    templateSelection: templateImg
  });
  // light-pick from to
  //modal-countdown
  var countdown
  $('.modal--countdown').on('shown.bs.modal', function () {
    $('.modal-countdown-txt').html('3');
    countdown = setInterval(function () {
      countdownNum = $('.modal-countdown-txt').html();
      $('.modal-countdown-txt').html(countdownNum - 1);
      if (countdownNum == 1) {
        $('.modal--countdown').modal('hide')
      }
      if (countdownNum <= 0) {
        clearInterval(countdown);
        $('.modal-countdown-txt').html('3');
      }
    }, 1000);
  }).on('hidden.bs.modal', function () {
    $('.modal-countdown-txt').html('3');
    clearInterval(countdown);
  });
  //popover
  $('[data-toggle="popover"]').popover({
    trigger: 'focus',
    html: true
  })
  // modal
  $('.list-radio-modal-close').find('input').on('click', function () {
    $(this).closest('.modal').modal('hide');
  });
  // cleave
  $('.cleave-custom-date').toArray().forEach(function (field) {
    new Cleave(field, {
      delimiter: '/',
      blocks: [2, 2, 4],
      uppercase: true
    });
  });
  $('[data-tooltip-m]').tooltip({
    template: '<div class="tooltip tooltip-m" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
  });

  // fix ie 11
  if (window.document.documentMode) {
    console.log('ie11')
    $('[data-toggle=dropdown]').addClass('dropdown-statics').removeAttr('href').removeAttr('data-toggle');
    $('.dropdown-statics').on('click', function(){
      $(this).toggleClass('show-dropdown');
    })
  }
});


// đếm ngược time nhận mã OTP
function countdown_otp () {
  var timeleft = 10;
  var downloadTimer = setInterval(function () {
    document.getElementById("countdown").innerHTML = "Mã OTP sẽ hết hiệu lực sau " + timeleft + " giây";
    timeleft -= 1;
    if (timeleft <= 0) {
      clearInterval(downloadTimer);
      document.getElementById("countdown").innerHTML = '<a href="javascript:countdown_otp()" class="reopt hover-line-white"><span class="icon"></span>Nhận lại mã xác nhận</a>'
    }
  }, 1000);


}

// đọc số tiền bằng chữ
  var DocTienBangChu = function () {
    this.ChuSo = new Array(" không ", " một ", " hai ", " ba ", " bốn ", " năm ", " sáu ", " bảy ", " tám ", " chín ");
    this.Tien = new Array("", " nghìn", " triệu", " tỷ", " nghìn tỷ", " triệu tỷ");
  };

  DocTienBangChu.prototype.docSo3ChuSo = function (baso) {
    var tram;
    var chuc;
    var donvi;
    var KetQua = "";
    tram = parseInt(baso / 100);
    chuc = parseInt((baso % 100) / 10);
    donvi = baso % 10;
    if (tram == 0 && chuc == 0 && donvi == 0) return "";
    if (tram != 0) {
      KetQua += this.ChuSo[tram] + " trăm ";
      if ((chuc == 0) && (donvi != 0)) KetQua += " linh ";
    }
    if ((chuc != 0) && (chuc != 1)) {
      KetQua += this.ChuSo[chuc] + " mươi";
      if ((chuc == 0) && (donvi != 0)) KetQua = KetQua + " linh ";
    }
    if (chuc == 1) KetQua += " mười ";
    switch (donvi) {
      case 1:
        if ((chuc != 0) && (chuc != 1)) {
          KetQua += " mốt ";
        }
        else {
          KetQua += this.ChuSo[donvi];
        }
        break;
      case 5:
        if (chuc == 0) {
          KetQua += this.ChuSo[donvi];
        }
        else {
          KetQua += " lăm ";
        }
        break;
      default:
        if (donvi != 0) {
          KetQua += this.ChuSo[donvi];
        }
        break;
    }
    return KetQua;
  }

  DocTienBangChu.prototype.doc = function (SoTien) {
    var lan = 0;
    var i = 0;
    var so = 0;
    var KetQua = "";
    var tmp = "";
    var soAm = false;
    var ViTri = new Array();
    if (SoTien < 0) soAm = true;//return "Số tiền âm !";
    if (SoTien == 0) return "Không đồng";//"Không đồng !";
    if (SoTien > 0) {
      so = SoTien;
    }
    else {
      so = -SoTien;
    }
    if (SoTien > 8999999999999999) {
      //SoTien = 0;
      return "";//"Số quá lớn!";
    }
    ViTri[5] = Math.floor(so / 1000000000000000);
    if (isNaN(ViTri[5]))
      ViTri[5] = "0";
    so = so - parseFloat(ViTri[5].toString()) * 1000000000000000;
    ViTri[4] = Math.floor(so / 1000000000000);
    if (isNaN(ViTri[4]))
      ViTri[4] = "0";
    so = so - parseFloat(ViTri[4].toString()) * 1000000000000;
    ViTri[3] = Math.floor(so / 1000000000);
    if (isNaN(ViTri[3]))
      ViTri[3] = "0";
    so = so - parseFloat(ViTri[3].toString()) * 1000000000;
    ViTri[2] = parseInt(so / 1000000);
    if (isNaN(ViTri[2]))
      ViTri[2] = "0";
    ViTri[1] = parseInt((so % 1000000) / 1000);
    if (isNaN(ViTri[1]))
      ViTri[1] = "0";
    ViTri[0] = parseInt(so % 1000);
    if (isNaN(ViTri[0]))
      ViTri[0] = "0";
    if (ViTri[5] > 0) {
      lan = 5;
    }
    else if (ViTri[4] > 0) {
      lan = 4;
    }
    else if (ViTri[3] > 0) {
      lan = 3;
    }
    else if (ViTri[2] > 0) {
      lan = 2;
    }
    else if (ViTri[1] > 0) {
      lan = 1;
    }
    else {
      lan = 0;
    }
    for (i = lan; i >= 0; i--) {
      tmp = this.docSo3ChuSo(ViTri[i]);
      KetQua += tmp;
      if (ViTri[i] > 0) KetQua += this.Tien[i];
      if ((i > 0) && (tmp.length > 0)) KetQua += '';//',';//&& (!string.IsNullOrEmpty(tmp))
    }
    if (KetQua.substring(KetQua.length - 1) == ',') {
      KetQua = KetQua.substring(0, KetQua.length - 1);
    }
    KetQua = KetQua.substring(1, 2).toUpperCase() + KetQua.substring(2);
    if (soAm) {
      return "Âm " + KetQua + " đồng";//.substring(0, 1);//.toUpperCase();// + KetQua.substring(1);
    }
    else {
      return KetQua + " đồng";//.substring(0, 1);//.toUpperCase();// + KetQua.substring(1);
    }
  }

  $('input[name=sotienthanhtoan]').change(function () {
    var docTien = new DocTienBangChu();
    var giatri = $(this).val().replace(/,/g, '');
    console.log(giatri)
    var doctien1 = docTien.doc(giatri);
    $('.sotienbangchu').text(doctien1);
  });
// end đọc số tiền bằng chữ

