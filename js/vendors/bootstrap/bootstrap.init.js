//====================BOOTSTRAP INIT=================//
$(document).ready(function() {
    // toast center
    var centeredWidth = $('.toast').width()/2, 
    centeredHeight = $('.toast').height()/2;

$('.toast').css({ 'margin-left' : -centeredWidth , 'margin-top' : -centeredHeight });
// toast end
    $('[data-tooltip]').tooltip();
    // modal
    $('.list-radio-modal-close').find('input').on('click', function() {
        $(this).closest('.modal').modal('hide');
    });
    /*Login*/
    $('input.check_tool[type=checkbox]').change(function() {
        if ($(this).is(":checked")) {
            $('.login-box').addClass('fade');
            $('.btn_language').addClass('fade');
            $('.social-footer').addClass('fade');
            $('.box_tool .dropdown').addClass('show');
            $('.box_tool .dropdown-menu').addClass('show');
        } else {
            $('.login-box').removeClass('fade');
            $('.btn_language').removeClass('fade');
            $('.social-footer').removeClass('fade');
            $('.box_tool .dropdown').removeClass('show');
            $('.box_tool .dropdown-menu').removeClass('show');
        }
    });

    $('.alert button.close').on('click', function() {
        $(this).closest('.alert').hide();
        $('.alert').removeClass('show');
    });
    /*Login*/
    /*toast*/
    $('body').on('click', '.btn-toast', function(e) {
        $('.toast').toast('show');
    });
    $('body').on('click', '.btn-toast1', function(e) {
        $('.toast1').toast('show');
    });
    $('body').on('click', '.btn-toast2', function(e) {
        $('.toast2').toast('show');
    });
    $('body').on('click', '.btn-toast3', function(e) {
        $('.toast3').toast('show');
    });
    $('body').on('click', '.toast button.close', function(e) {
        $('.toast.show').removeClass('show');
    });
    $('body').on('click', '.btn-toast4', function(e) {
        $('.toast4').toast('show');
    });
    /*toast end*/
    /*otp
    $(".otp-number-input").keydown(function(ev) {
        otp_val = $(this).val();

        $('#code-error').addClass('invisible');
        $('#code-clear').addClass('none');
    }).focus(function() {
        $(this).select();
    }).keyup(function(ev) {
        otpCodeTemp = "";
        $("input.otp-number-input").each(function(i) {
            if ($(this).val().length != 0) {
                $(this).addClass('otp-filled-active');
            } else {
                $(this).removeClass('otp-filled-active');
            }
            otpCodeTemp += $(this).val();
        });

        if ($(this).val().length == 1 && ev.keyCode != 37 && ev.keyCode != 39) {
            $(this).next('.otp-number-input').focus();
            ev.preventDefault();
        }
    });
    $(".otp-number-input").on("click", function(e) {
        otp_val = $('#otp-number-input-1').val();
        if (otp_val === "") {
            $("#otp-number-input-1").focus();
        }
    });
    const $inp = $(".otp-number-input");
    $inp.on({
      paste(ev) { // Handle Pasting      
        const clip = ev.originalEvent.clipboardData.getData('text').trim();
        // Allow numbers only
        if (!/\d{6}/.test(clip)) return ev.preventDefault(); // Invalid. Exit here
        // Split string to Array or characters
        const s = [...clip];
        // Populate inputs. Focus last input.
        $inp.val(i => s[i]).eq(6).focus(); 
      },
      input(ev) { // Handle typing
        
        const i = $inp.index(this);
        if (this.value) $inp.eq(i + 1).focus();
      },
      keydown(ev) { // Handle Deleting
        
        const i = $inp.index(this);
        if (!this.value && ev.key === "Backspace" && i) $inp.eq(i - 1).focus();
      }      
    });

    /*otp end*/

    //RADIO//  
    $('.form-radio input[type="radio"]:checked').closest('label').addClass('checked');
    $('.form-radio input[type="radio"]').click(function() {
        if ($('.form-radio input[type="radio"]').is(':not(:checked)')) {
            $('.form-radio input[type="radio"]').parent('label').removeClass('checked');
        }
        if ($('.form-radio input[type="radio"]').is(':checked')) {
            $('.form-radio input[type="radio"]:checked').closest('label').addClass('checked');
        }
    });
    //END RADIO//
    //carousel-logo//
    $('.carousel-logo input[type="radio"]:checked').closest('label').addClass('checked');
    $('.carousel-logo input[type="radio"]').click(function() {
        if ($('.carousel-logo input[type="radio"]').is(':not(:checked)')) {
            $('.carousel-logo input[type="radio"]').parent('label').removeClass('checked');
        }
        if ($('.carousel-logo input[type="radio"]').is(':checked')) {
            $('.carousel-logo input[type="radio"]:checked').closest('label').addClass('checked');
        }
    });
    //END carousel-logo//  
    $('body').on('click', '.dashboard', function(e) {
        $('body').toggleClass('active');
    });
    $('body').on('click', '.btn-guide', function(e) {
        $('body').toggleClass('hidden-scroll');
    });
    $('body').on('click', '.btn-hidden-scroll', function(e) {
        $('body').toggleClass('hidden-scroll');
    });
    $('body').on('click', '.modal-close', function(e) {
        $('body').removeClass('hidden-scroll');
    });

    $('body').on('click', '.setting_ic', function(e) {
        $('body').removeClass('active');
    });
    $('body').on('click', '.home_ic', function(e) {
        $('body').removeClass('active');
    });

    $('body').on('click', '.setting', function(e) {
        $('body').toggleClass('active_setting');
    });
    $('body').on('click', '.dashboard', function(e) {
        $('body').removeClass('active_setting');
    });
    $('body').on('click', '.home_ic', function(e) {
        $('body').removeClass('active_setting');
    });

    // menu left 
    /*if ($(window).width() > 1200) {
      $('.sidebar-input-trigger').change(function() {
        if (this.value == 'sidebar1') {
          $(".sidebar-left-content").css('opacity','1');
          $(".sidebar-right").css('opacity','0');
        }
        else if (this.value == 'sidebar2') {
          $(".sidebar-left-content").css('opacity','1');
          $(".sidebar-right").css('opacity','0');
        }
        else if (this.value == 'sidebar-left-close') {
          $(".sidebar-left-content").css('opacity','0');
          $(".sidebar-right").css('opacity','1');
          $('body').removeClass('active');
        }    
      });
    };*/
    $('body').on('click', '.close-sidebar-left', function(e) {
        $('body').removeClass('active');
        $('body').removeClass('active_setting');
    });
    if (deviceIsMobile == false) {
        $('body').addClass('no-touch')
    };
    if (deviceIsMobile == true) {
        $('.bg').css('min-height', $(window).height() + 100)
            // $('.bg--login').css('min-height', $(window).height() + 300)
    };


    $(function() {
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            if (scroll >= 16) {
                $('.menu').addClass('menu--sticky');
                $('body').addClass('body-top');
            } else {
                $('.menu').removeClass('menu--sticky');
                $('body').removeClass('body-top');
            }
            if ($(window).width() >= 1200) {
                if (scroll >= 16) {
                    $('.search').addClass('search--sticky');
                    $('.fav--sticky').addClass('fav--sticky-top');
                } else {
                    $('.fav--sticky').removeClass('fav--sticky-top');
                }
            }
        });
    });

    if ($('body').has('.main .fav-inner').length > 0) {
        var hieghtThreshold;

        function stickyHeightCal() {
            if ($(".main .fav-inner").length) {
                if ($(window).width() > 768) {
                    hieghtThreshold = $(".main .fav-inner").offset().top + $(".main .fav-inner").height() - 120;
                } else {
                    hieghtThreshold = $(".main .fav-inner").offset().top;
                }
            }
        };
        $(window).resize(function() {
            stickyHeightCal()
        });
        $(function() {
            stickyHeightCal();
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();
                if (scroll >= hieghtThreshold) {
                    $('.fav--sticky').addClass('sticky-fav');
                    $('.btn_search_when_scroll').addClass('addinput');
		  $('.btn_search_when_scroll').attr('data-original-title', 'Tìm kiếm');
                } else {
                    $('.fav--sticky').removeClass('sticky-fav');
                    $('.btn_search_when_scroll').removeClass('addinput');
		  $('.btn_search_when_scroll').removeAttr('data-original-title');
                }
            });
        });

    } else {
        $('.fav--sticky').addClass('sticky-fav');
        $(window).scroll(function() {
            if ($(window).width() >= 1200) {
                var scroll = $(window).scrollTop();
                if (scroll >= 16) {
                    $('.menu').addClass('menu--sticky');
                } else {
                    $('.menu').removeClass('menu--sticky');
                }
            }
        });
    };
    if (iOS()) {
        $('#search').focus(function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        })
    }
    if ($(window).width() < 1200) {
        $('#sidebar3').prop("checked", true);
    };
    if ($(window).width() > 1200) {
        $('#sidebar3').prop("checked", true);
    };
    //radio Show
    /* $('input[type=radio][showFor]').on('change', function () {
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
     $('input[type=radio][showFor]').trigger('change')*/
    //end radio Show  


    //Input material
	$('.select-2').each(function () {
		if ($(this).val() && $(this).val().length > 0){
		$(this).addClass('input-hadval');

		} else {
		$(this).removeClass('input-hadval');
		}
	})
	$('.select-2').change(function () {
		if ($(this).val() && $(this).val().length > 0){
		$(this).addClass('input-hadval');
		} else {
		$(this).removeClass('input-hadval');
		}
	})

    $('.input-material').each(function () {
		if ($(this).val() && $(this).val().length > 0){
		$(this).addClass('input-hadval');

		} else {
		$(this).removeClass('input-hadval');
		}
	})
	$('.input-material').change(function () {
		if ($(this).val() && $(this).val().length > 0){
		$(this).addClass('input-hadval');
		} else {
		$(this).removeClass('input-hadval');
		}
	})
    /*$('.input-material:not(.static)').each(function() {
        if ($(this).val().length == 0) {
            $(this).removeClass('input-hadval');
        } else {
            $(this).addClass('input-hadval');
        }
        $(this).on('blur change', function() {
            if ($(this).val().length == 0) {
                $(this).removeClass('input-hadval');
            } else {
                $(this).addClass('input-hadval');
            }
        })
    });*/
    //End Input material

    //input clear
   $('.input-clear').on('click', function () {
    var input = $(this).siblings().closest('input');
    input.val('')
    input.trigger('change');
    input.keyup();
    input.focus();
 })
 $('.input-has-clear').on('paste keyup change', function () {
    var inputClear = $(this).siblings().closest('.input-clear');
    if ($(this).val()) {
       inputClear.addClass('show');
    }
    else {
       inputClear.removeClass('show');
    }
 });
 //end input clear
 //live-search
 var accentMap = { "Ⓐ": "A", "Ａ": "A", "À": "A", "Á": "A", "Â": "A", "Ầ": "A", "Ấ": "A", "Ẫ": "A", "Ẩ": "A", "Ã": "A", "Ā": "A", "Ă": "A", "Ằ": "A", "Ắ": "A", "Ẵ": "A", "Ẳ": "A", "Ȧ": "A", "Ǡ": "A", "Ä": "A", "Ǟ": "A", "Ả": "A", "Å": "A", "Ǻ": "A", "Ǎ": "A", "Ȁ": "A", "Ȃ": "A", "Ạ": "A", "Ậ": "A", "Ặ": "A", "Ḁ": "A", "Ą": "A", "Ⱥ": "A", "Ɐ": "A", "Ꜳ": "AA", "Æ": "AE", "Ǽ": "AE", "Ǣ": "AE", "Ꜵ": "AO", "Ꜷ": "AU", "Ꜹ": "AV", "Ꜻ": "AV", "Ꜽ": "AY", "Ⓑ": "B", "Ｂ": "B", "Ḃ": "B", "Ḅ": "B", "Ḇ": "B", "Ƀ": "B", "Ƃ": "B", "Ɓ": "B", "Ⓒ": "C", "Ｃ": "C", "Ć": "C", "Ĉ": "C", "Ċ": "C", "Č": "C", "Ç": "C", "Ḉ": "C", "Ƈ": "C", "Ȼ": "C", "Ꜿ": "C", "Ⓓ": "D", "Ｄ": "D", "Ḋ": "D", "Ď": "D", "Ḍ": "D", "Ḑ": "D", "Ḓ": "D", "Ḏ": "D", "Đ": "D", "Ƌ": "D", "Ɗ": "D", "Ɖ": "D", "Ꝺ": "D", "Ǳ": "DZ", "Ǆ": "DZ", "ǲ": "Dz", "ǅ": "Dz", "Ⓔ": "E", "Ｅ": "E", "È": "E", "É": "E", "Ê": "E", "Ề": "E", "Ế": "E", "Ễ": "E", "Ể": "E", "Ẽ": "E", "Ē": "E", "Ḕ": "E", "Ḗ": "E", "Ĕ": "E", "Ė": "E", "Ë": "E", "Ẻ": "E", "Ě": "E", "Ȅ": "E", "Ȇ": "E", "Ẹ": "E", "Ệ": "E", "Ȩ": "E", "Ḝ": "E", "Ę": "E", "Ḙ": "E", "Ḛ": "E", "Ɛ": "E", "Ǝ": "E", "Ⓕ": "F", "Ｆ": "F", "Ḟ": "F", "Ƒ": "F", "Ꝼ": "F", "Ⓖ": "G", "Ｇ": "G", "Ǵ": "G", "Ĝ": "G", "Ḡ": "G", "Ğ": "G", "Ġ": "G", "Ǧ": "G", "Ģ": "G", "Ǥ": "G", "Ɠ": "G", "Ꞡ": "G", "Ᵹ": "G", "Ꝿ": "G", "Ⓗ": "H", "Ｈ": "H", "Ĥ": "H", "Ḣ": "H", "Ḧ": "H", "Ȟ": "H", "Ḥ": "H", "Ḩ": "H", "Ḫ": "H", "Ħ": "H", "Ⱨ": "H", "Ⱶ": "H", "Ɥ": "H", "Ⓘ": "I", "Ｉ": "I", "Ì": "I", "Í": "I", "Î": "I", "Ĩ": "I", "Ī": "I", "Ĭ": "I", "İ": "I", "Ï": "I", "Ḯ": "I", "Ỉ": "I", "Ǐ": "I", "Ȉ": "I", "Ȋ": "I", "Ị": "I", "Į": "I", "Ḭ": "I", "Ɨ": "I", "Ⓙ": "J", "Ｊ": "J", "Ĵ": "J", "Ɉ": "J", "Ⓚ": "K", "Ｋ": "K", "Ḱ": "K", "Ǩ": "K", "Ḳ": "K", "Ķ": "K", "Ḵ": "K", "Ƙ": "K", "Ⱪ": "K", "Ꝁ": "K", "Ꝃ": "K", "Ꝅ": "K", "Ꞣ": "K", "Ⓛ": "L", "Ｌ": "L", "Ŀ": "L", "Ĺ": "L", "Ľ": "L", "Ḷ": "L", "Ḹ": "L", "Ļ": "L", "Ḽ": "L", "Ḻ": "L", "Ł": "L", "Ƚ": "L", "Ɫ": "L", "Ⱡ": "L", "Ꝉ": "L", "Ꝇ": "L", "Ꞁ": "L", "Ǉ": "LJ", "ǈ": "Lj", "Ⓜ": "M", "Ｍ": "M", "Ḿ": "M", "Ṁ": "M", "Ṃ": "M", "Ɱ": "M", "Ɯ": "M", "Ⓝ": "N", "Ｎ": "N", "Ǹ": "N", "Ń": "N", "Ñ": "N", "Ṅ": "N", "Ň": "N", "Ṇ": "N", "Ņ": "N", "Ṋ": "N", "Ṉ": "N", "Ƞ": "N", "Ɲ": "N", "Ꞑ": "N", "Ꞥ": "N", "Ǌ": "NJ", "ǋ": "Nj", "Ⓞ": "O", "Ｏ": "O", "Ò": "O", "Ó": "O", "Ô": "O", "Ồ": "O", "Ố": "O", "Ỗ": "O", "Ổ": "O", "Õ": "O", "Ṍ": "O", "Ȭ": "O", "Ṏ": "O", "Ō": "O", "Ṑ": "O", "Ṓ": "O", "Ŏ": "O", "Ȯ": "O", "Ȱ": "O", "Ö": "O", "Ȫ": "O", "Ỏ": "O", "Ő": "O", "Ǒ": "O", "Ȍ": "O", "Ȏ": "O", "Ơ": "O", "Ờ": "O", "Ớ": "O", "Ỡ": "O", "Ở": "O", "Ợ": "O", "Ọ": "O", "Ộ": "O", "Ǫ": "O", "Ǭ": "O", "Ø": "O", "Ǿ": "O", "Ɔ": "O", "Ɵ": "O", "Ꝋ": "O", "Ꝍ": "O", "Ƣ": "OI", "Ꝏ": "OO", "Ȣ": "OU", "Ⓟ": "P", "Ｐ": "P", "Ṕ": "P", "Ṗ": "P", "Ƥ": "P", "Ᵽ": "P", "Ꝑ": "P", "Ꝓ": "P", "Ꝕ": "P", "Ⓠ": "Q", "Ｑ": "Q", "Ꝗ": "Q", "Ꝙ": "Q", "Ɋ": "Q", "Ⓡ": "R", "Ｒ": "R", "Ŕ": "R", "Ṙ": "R", "Ř": "R", "Ȑ": "R", "Ȓ": "R", "Ṛ": "R", "Ṝ": "R", "Ŗ": "R", "Ṟ": "R", "Ɍ": "R", "Ɽ": "R", "Ꝛ": "R", "Ꞧ": "R", "Ꞃ": "R", "Ⓢ": "S", "Ｓ": "S", "ẞ": "S", "Ś": "S", "Ṥ": "S", "Ŝ": "S", "Ṡ": "S", "Š": "S", "Ṧ": "S", "Ṣ": "S", "Ṩ": "S", "Ș": "S", "Ş": "S", "Ȿ": "S", "Ꞩ": "S", "Ꞅ": "S", "Ⓣ": "T", "Ｔ": "T", "Ṫ": "T", "Ť": "T", "Ṭ": "T", "Ț": "T", "Ţ": "T", "Ṱ": "T", "Ṯ": "T", "Ŧ": "T", "Ƭ": "T", "Ʈ": "T", "Ⱦ": "T", "Ꞇ": "T", "Ꜩ": "TZ", "Ⓤ": "U", "Ｕ": "U", "Ù": "U", "Ú": "U", "Û": "U", "Ũ": "U", "Ṹ": "U", "Ū": "U", "Ṻ": "U", "Ŭ": "U", "Ü": "U", "Ǜ": "U", "Ǘ": "U", "Ǖ": "U", "Ǚ": "U", "Ủ": "U", "Ů": "U", "Ű": "U", "Ǔ": "U", "Ȕ": "U", "Ȗ": "U", "Ư": "U", "Ừ": "U", "Ứ": "U", "Ữ": "U", "Ử": "U", "Ự": "U", "Ụ": "U", "Ṳ": "U", "Ų": "U", "Ṷ": "U", "Ṵ": "U", "Ʉ": "U", "Ⓥ": "V", "Ｖ": "V", "Ṽ": "V", "Ṿ": "V", "Ʋ": "V", "Ꝟ": "V", "Ʌ": "V", "Ꝡ": "VY", "Ⓦ": "W", "Ｗ": "W", "Ẁ": "W", "Ẃ": "W", "Ŵ": "W", "Ẇ": "W", "Ẅ": "W", "Ẉ": "W", "Ⱳ": "W", "Ⓧ": "X", "Ｘ": "X", "Ẋ": "X", "Ẍ": "X", "Ⓨ": "Y", "Ｙ": "Y", "Ỳ": "Y", "Ý": "Y", "Ŷ": "Y", "Ỹ": "Y", "Ȳ": "Y", "Ẏ": "Y", "Ÿ": "Y", "Ỷ": "Y", "Ỵ": "Y", "Ƴ": "Y", "Ɏ": "Y", "Ỿ": "Y", "Ⓩ": "Z", "Ｚ": "Z", "Ź": "Z", "Ẑ": "Z", "Ż": "Z", "Ž": "Z", "Ẓ": "Z", "Ẕ": "Z", "Ƶ": "Z", "Ȥ": "Z", "Ɀ": "Z", "Ⱬ": "Z", "Ꝣ": "Z", "ⓐ": "a", "ａ": "a", "ẚ": "a", "à": "a", "á": "a", "â": "a", "ầ": "a", "ấ": "a", "ẫ": "a", "ẩ": "a", "ã": "a", "ā": "a", "ă": "a", "ằ": "a", "ắ": "a", "ẵ": "a", "ẳ": "a", "ȧ": "a", "ǡ": "a", "ä": "a", "ǟ": "a", "ả": "a", "å": "a", "ǻ": "a", "ǎ": "a", "ȁ": "a", "ȃ": "a", "ạ": "a", "ậ": "a", "ặ": "a", "ḁ": "a", "ą": "a", "ⱥ": "a", "ɐ": "a", "ꜳ": "aa", "æ": "ae", "ǽ": "ae", "ǣ": "ae", "ꜵ": "ao", "ꜷ": "au", "ꜹ": "av", "ꜻ": "av", "ꜽ": "ay", "ⓑ": "b", "ｂ": "b", "ḃ": "b", "ḅ": "b", "ḇ": "b", "ƀ": "b", "ƃ": "b", "ɓ": "b", "ⓒ": "c", "ｃ": "c", "ć": "c", "ĉ": "c", "ċ": "c", "č": "c", "ç": "c", "ḉ": "c", "ƈ": "c", "ȼ": "c", "ꜿ": "c", "ↄ": "c", "ⓓ": "d", "ｄ": "d", "ḋ": "d", "ď": "d", "ḍ": "d", "ḑ": "d", "ḓ": "d", "ḏ": "d", "đ": "d", "ƌ": "d", "ɖ": "d", "ɗ": "d", "ꝺ": "d", "ǳ": "dz", "ǆ": "dz", "ⓔ": "e", "ｅ": "e", "è": "e", "é": "e", "ê": "e", "ề": "e", "ế": "e", "ễ": "e", "ể": "e", "ẽ": "e", "ē": "e", "ḕ": "e", "ḗ": "e", "ĕ": "e", "ė": "e", "ë": "e", "ẻ": "e", "ě": "e", "ȅ": "e", "ȇ": "e", "ẹ": "e", "ệ": "e", "ȩ": "e", "ḝ": "e", "ę": "e", "ḙ": "e", "ḛ": "e", "ɇ": "e", "ɛ": "e", "ǝ": "e", "ⓕ": "f", "ｆ": "f", "ḟ": "f", "ƒ": "f", "ꝼ": "f", "ⓖ": "g", "ｇ": "g", "ǵ": "g", "ĝ": "g", "ḡ": "g", "ğ": "g", "ġ": "g", "ǧ": "g", "ģ": "g", "ǥ": "g", "ɠ": "g", "ꞡ": "g", "ᵹ": "g", "ꝿ": "g", "ⓗ": "h", "ｈ": "h", "ĥ": "h", "ḣ": "h", "ḧ": "h", "ȟ": "h", "ḥ": "h", "ḩ": "h", "ḫ": "h", "ẖ": "h", "ħ": "h", "ⱨ": "h", "ⱶ": "h", "ɥ": "h", "ƕ": "hv", "ⓘ": "i", "ｉ": "i", "ì": "i", "í": "i", "î": "i", "ĩ": "i", "ī": "i", "ĭ": "i", "ï": "i", "ḯ": "i", "ỉ": "i", "ǐ": "i", "ȉ": "i", "ȋ": "i", "ị": "i", "į": "i", "ḭ": "i", "ɨ": "i", "ı": "i", "ⓙ": "j", "ｊ": "j", "ĵ": "j", "ǰ": "j", "ɉ": "j", "ⓚ": "k", "ｋ": "k", "ḱ": "k", "ǩ": "k", "ḳ": "k", "ķ": "k", "ḵ": "k", "ƙ": "k", "ⱪ": "k", "ꝁ": "k", "ꝃ": "k", "ꝅ": "k", "ꞣ": "k", "ⓛ": "l", "ｌ": "l", "ŀ": "l", "ĺ": "l", "ľ": "l", "ḷ": "l", "ḹ": "l", "ļ": "l", "ḽ": "l", "ḻ": "l", "ſ": "l", "ł": "l", "ƚ": "l", "ɫ": "l", "ⱡ": "l", "ꝉ": "l", "ꞁ": "l", "ꝇ": "l", "ǉ": "lj", "ⓜ": "m", "ｍ": "m", "ḿ": "m", "ṁ": "m", "ṃ": "m", "ɱ": "m", "ɯ": "m", "ⓝ": "n", "ｎ": "n", "ǹ": "n", "ń": "n", "ñ": "n", "ṅ": "n", "ň": "n", "ṇ": "n", "ņ": "n", "ṋ": "n", "ṉ": "n", "ƞ": "n", "ɲ": "n", "ŉ": "n", "ꞑ": "n", "ꞥ": "n", "ǌ": "nj", "ⓞ": "o", "ｏ": "o", "ò": "o", "ó": "o", "ô": "o", "ồ": "o", "ố": "o", "ỗ": "o", "ổ": "o", "õ": "o", "ṍ": "o", "ȭ": "o", "ṏ": "o", "ō": "o", "ṑ": "o", "ṓ": "o", "ŏ": "o", "ȯ": "o", "ȱ": "o", "ö": "o", "ȫ": "o", "ỏ": "o", "ő": "o", "ǒ": "o", "ȍ": "o", "ȏ": "o", "ơ": "o", "ờ": "o", "ớ": "o", "ỡ": "o", "ở": "o", "ợ": "o", "ọ": "o", "ộ": "o", "ǫ": "o", "ǭ": "o", "ø": "o", "ǿ": "o", "ɔ": "o", "ꝋ": "o", "ꝍ": "o", "ɵ": "o", "ƣ": "oi", "ȣ": "ou", "ꝏ": "oo", "ⓟ": "p", "ｐ": "p", "ṕ": "p", "ṗ": "p", "ƥ": "p", "ᵽ": "p", "ꝑ": "p", "ꝓ": "p", "ꝕ": "p", "ⓠ": "q", "ｑ": "q", "ɋ": "q", "ꝗ": "q", "ꝙ": "q", "ⓡ": "r", "ｒ": "r", "ŕ": "r", "ṙ": "r", "ř": "r", "ȑ": "r", "ȓ": "r", "ṛ": "r", "ṝ": "r", "ŗ": "r", "ṟ": "r", "ɍ": "r", "ɽ": "r", "ꝛ": "r", "ꞧ": "r", "ꞃ": "r", "ⓢ": "s", "ｓ": "s", "ß": "s", "ś": "s", "ṥ": "s", "ŝ": "s", "ṡ": "s", "š": "s", "ṧ": "s", "ṣ": "s", "ṩ": "s", "ș": "s", "ş": "s", "ȿ": "s", "ꞩ": "s", "ꞅ": "s", "ẛ": "s", "ⓣ": "t", "ｔ": "t", "ṫ": "t", "ẗ": "t", "ť": "t", "ṭ": "t", "ț": "t", "ţ": "t", "ṱ": "t", "ṯ": "t", "ŧ": "t", "ƭ": "t", "ʈ": "t", "ⱦ": "t", "ꞇ": "t", "ꜩ": "tz", "ⓤ": "u", "ｕ": "u", "ù": "u", "ú": "u", "û": "u", "ũ": "u", "ṹ": "u", "ū": "u", "ṻ": "u", "ŭ": "u", "ü": "u", "ǜ": "u", "ǘ": "u", "ǖ": "u", "ǚ": "u", "ủ": "u", "ů": "u", "ű": "u", "ǔ": "u", "ȕ": "u", "ȗ": "u", "ư": "u", "ừ": "u", "ứ": "u", "ữ": "u", "ử": "u", "ự": "u", "ụ": "u", "ṳ": "u", "ų": "u", "ṷ": "u", "ṵ": "u", "ʉ": "u", "ⓥ": "v", "ｖ": "v", "ṽ": "v", "ṿ": "v", "ʋ": "v", "ꝟ": "v", "ʌ": "v", "ꝡ": "vy", "ⓦ": "w", "ｗ": "w", "ẁ": "w", "ẃ": "w", "ŵ": "w", "ẇ": "w", "ẅ": "w", "ẘ": "w", "ẉ": "w", "ⱳ": "w", "ⓧ": "x", "ｘ": "x", "ẋ": "x", "ẍ": "x", "ⓨ": "y", "ｙ": "y", "ỳ": "y", "ý": "y", "ŷ": "y", "ỹ": "y", "ȳ": "y", "ẏ": "y", "ÿ": "y", "ỷ": "y", "ẙ": "y", "ỵ": "y", "ƴ": "y", "ɏ": "y", "ỿ": "y", "ⓩ": "z", "ｚ": "z", "ź": "z", "ẑ": "z", "ż": "z", "ž": "z", "ẓ": "z", "ẕ": "z", "ƶ": "z", "ȥ": "z", "ɀ": "z", "ⱬ": "z", "ꝣ": "z", "Ά": "Α", "Έ": "Ε", "Ή": "Η", "Ί": "Ι", "Ϊ": "Ι", "Ό": "Ο", "Ύ": "Υ", "Ϋ": "Υ", "Ώ": "Ω", "ά": "α", "έ": "ε", "ή": "η", "ί": "ι", "ϊ": "ι", "ΐ": "ι", "ό": "ο", "ύ": "υ", "ϋ": "υ", "ΰ": "υ", "ω": "ω", "ς": "σ" };
 String.prototype.latinise = function () { return this.replace(/[^A-Za-z0-9\[\] ]/g, function (a) { return accentMap[a] || a }) };
 $('.live-search-result > *').each(function () {
    $(this).attr('data-search-term', $(this).find('>span').text().trim().toLowerCase().latinise());
 });
 $('.live-search-box').on('keyup', function () {
    var parent = $(this).parent().closest('.live-search-list');
    $('[data-search-term] span > .highlight').contents().unwrap();
    if ($.trim($(this).val()).length > 0) {
       var search_value = $(this).val();
       var search_regexp = new RegExp(search_value, "g");
       parent.addClass('searching');
       parent.find('.show:not(.input-clear)').removeClass('show').removeClass('hightlight');
       var searchTerm = $(this).val().toLowerCase().latinise();
       var match = parent.find("[data-search-term *='" + searchTerm + "']");
       if (match.length == 0) {
          $(this).addClass('no-result');
          $(this).closest('.live-search-list').addClass('list-no-result');
       }
       else {
          $(this).removeClass('no-result');
          $(this).closest('.live-search-list').removeClass('list-no-result');
       }
       match.parents().closest('.search-group').addClass('show');
       match.parents('.live-search-result').addClass('show');
       match.addClass('show');
       match.find('span:not(.span-wrap)').each(function () {
          $(this).html($(this).text().replace(search_regexp, "<span class = 'highlight'>" + search_value + "</span>"));
       });
       if (match.hasClass('search-group')) {
          match.find('[data-search-term]').addClass('show');
       }
    }
    else {
       if ($(this).siblings('.live-search-result-2').length > 0) {
          $(this).addClass('no-result');
       }
       parent.removeClass('searching');
       $(this).closest('.live-search-list').removeClass('list-no-result');
       parent.find('.show').removeClass('show').removeClass('hightlight');;
    }
 });
 $('.live-search-box').focusout(function () {
    $(this).siblings('.live-search-result-2').removeClass('show');
 });
 $('.live-search-box').focus(function () {
    if ($(this).siblings('.live-search-result-2').find('li').hasClass('show')) {
       $(this).siblings('.live-search-result-2').addClass('show');
    }
    else {
       if ($(this).siblings('.live-search-result-2').length > 0) {
          $(this).addClass('no-result');
       }
    }
 });
 $('.live-search-result li span').each(function () {
    $(this).on('mousedown touchstart', function () {
       $(this).parent().closest('.live-search-list').find('.live-search-result').removeClass('show');
       var parentInput = $(this).parent().closest('.live-search-list').find('.live-search-box');
       parentInput.siblings('.input-clear').addClass('show');
       parentInput.val($(this).text());
    })
 });
/*live-search end*/


});

// search home
$(document).keyup(function(e) {
    if (e.key === "Escape") { 
       close_searchmb();
    }
 });
 
 $("#input_search_ib").keyup(function() {
    var value = document.getElementById('input_search_ib').value;
    if (value) {
       $('.display_result_search_mb').fadeIn();
       $('#box_found').hide();
    }
    else {
       $('.display_result_search_mb').hide();
       $('#box_found').fadeIn();
    }
 });

 $(function(){
    $('.search-main').click(function(e) {
       e.stopImmediatePropagation();
       $('#header_live_search').show();
    });
    $("body").click(function() {
       $('#header_live_search').hide();
    })
 });
 function search_mobile(){
    $('.searchmb').fadeIn();
    BNS.on();
    $(".searchmb .input-clean").focus();		
    randomitems()
 }
 function close_searchmb(){
    $('.searchmb').hide();
    BNS.off();
    $('.random_data').html("");
 }
  // end search home
/*Copy*/
function copyToClipboard(elementId) {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(elementId).innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
}
/*Copy end*/

//====================END BOOTSTRAP INIT=================//