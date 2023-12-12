
//====================SELECT2 INIT=================//
function closeSelect () {
  $('.select-2').select2('close');
}
function select2_search (term) {
  var $search = $('.select2-container--open').siblings(".select-2[multiple]").data('select2').dropdown.$search || $('.select2-container--open').siblings(".select-2[multiple]").data('select2').selection.$search;
  $search.val(term);
  $search.trigger('keyup');
}
function deselectAll () {
  if ($(".select2-results__options").children(".select2-results__message").length > 0) {
    closeSelect();
  }
  $('.select2-container--open').siblings(".select-2[multiple]").find("option").prop("selected", false);
  $('.select2-container--open').siblings(".select-2[multiple]").find("option").find('option').prop('selected', false);
  $('.select2-container--open').siblings(".select-2[multiple]").trigger("change");
  $("li.select2-results__option").attr('aria-selected', 'false');
}
$(document).ready(function () { 
  $(document).on('focus', '.select2.select2-container', function (e) {
    // only open on original attempt - close focus event should not fire open
    if (e.originalEvent && $(this).find(".select2-selection--single").length > 0) {
      $(this).siblings('select:enabled').select2('open')
    }
  });
  var select2Timeout;
  if ($(window).width() <= 767) {
    if ($('body .select-2').hasClass('select-2')) {
      $('body').append('<div class="select-2-backdrop"></div>')
    }
  }
  $('.select-2-backdrop').on('click', function () {
    $('.select-2').select2('close');
  })
  $('.select-2:not([multiple])').select2({
    width: '100%',
    closeOnSelect: $(window).width() < 768 ? false : true,
  }).on("select2:opening", function () {
    if ($(window).width() <= 767) {
      clearTimeout(select2Timeout);
    }
  }).on("select2:open", function () {
    $(this).parents('.form-group').addClass('input-focus')
    $(".select2-search--dropdown .select2-search__field").attr("placeholder", "Tìm kiếm...");
    if ($(window).width() >= 789) {
      if (navigator.userAgent.indexOf('MSIE') !== -1
        || navigator.appVersion.indexOf('Trident/') > -1) {
        $('.select2-search input').prop('focus', false);
      }
    }
    if ($(window).width() < 789) {
      $('.select2-search input').prop('focus', false);
    }
    if ($(window).width() <= 767) {
      clearTimeout(select2Timeout);
      console.log($(this))
      BNS.on()
      $('.close-select').remove();
      var x = $(this).eq(0).attr('header-text');
      $('body > .select2-container .select2-dropdown').prepend('<div class="close-select"><div class="close-select__btn" href="javascript:void(0)" onclick="closeSelect()">Đóng</div>' + x + '</div>');
      $('body > .select2-container .select2-dropdown').addClass('top-0');
      $('.select-2-backdrop').addClass('show');
    }
  }).on("select2:closing", function () {
    $('.select-2-backdrop').removeClass('show');
    if ($(window).width() <= 767) {
      BNS.off()
      $('body > .select2-container .select2-dropdown').removeClass('top-0');
    }
  }).on("select2:select", function () {
    if ($(window).width() <= 767) {
      $('.select-2-backdrop').removeClass('show');
      $('body > .select2-container .select2-dropdown').removeClass('top-0');
      select2Timeout = setTimeout(function () {
        $('.select-2').select2('close');
      }, 320)
    }
  }).on("select2:close", function () {
    $(this).parents('.form-group').removeClass('input-focus')
  });
  $('.select-2[multiple]').select2({
    width: '100%',
    closeOnSelect: false
  }).on("select2:opening", function () {
    if ($(window).width() <= 767) {
      clearTimeout(select2Timeout);
    }
  }).on("select2:open", function () {
    $(this).parents('.form-group').addClass('input-focus')
    $(".select2-search--dropdown .select2-search__field").attr("placeholder", "Tìm kiếm...");
    if ($(window).width() < 789) {
      $('.select2-search input').prop('focus', false);
    }
    if ($(window).width() <= 767) {
      clearTimeout(select2Timeout);
      BNS.on()
      $('.close-select').remove();
      $('.unselect-all').remove();
      $('.select2-search-container').remove();
      var x = $(this).eq(0).attr('header-text');
      if ($(this).attr('data-minimum-results-for-search')) {
        $('body > .select2-container .select2-dropdown').prepend('<div class="close-select"><div class="close-select__btn" href="javascript:void(0)" onclick="closeSelect()"></div>' + x + '</div>');
      } else {
        $('body > .select2-container .select2-dropdown').prepend('<div class="close-select"><div class="close-select__btn" href="javascript:void(0)" onclick="closeSelect()"></div>' + x + '</div><span class="no-pb select2-search select2-search-container select2-search--dropdown"><input placeholder="Tìm kiếm" id="select-2-search-multiple" class="select2-search__field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox"><div class="unselect-all" onclick="deselectAll()">Bỏ chọn tất cả</div></span>');
        $("#select-2-search-multiple").keyup(function () {
          select2_search($("#select-2-search-multiple").val());
        });
      }
      $('body > .select2-container .select2-dropdown').addClass('top-0');
      $('.select-2-backdrop').addClass('show');

    }
  }).on("select2:closing", function () {
    $('.select-2-backdrop').removeClass('show');
    if ($(window).width() <= 767) {
      BNS.off()
      $('body > .select2-container .select2-dropdown').removeClass('top-0');
    }
  }).on("select2:close", function () {
    $(this).parents('.form-group').removeClass('input-focus')
  })

  //template select-2
  function templateImg (img) {
    if (!img.id) { return img.text; }
    if (img.element.attributes.dataimgClass) {
      return $img = $('<div class="select-tpl-img-wrap"><div class="row row-10 align-items-center"><div class="col-auto"><div class="select-tpl-img ' + img.element.attributes.dataimgClass.value + '" style="background-image: url(\'' + img.element.attributes.dataimg.value + '\')"></div></div><div class="col text-truncate"><div class="select-tpl-txt">' + img.text + '</div></div></div></div>');
    } else {
      return $img = $('<div class="select-tpl-img-wrap"><div class="row row-10 align-items-center"><div class="col text-truncate"><div class="select-tpl-txt">' + img.text + '</div></div></div></div>');
    }
  };
  function templateImgRes (img) {
    if (!img.id) { return img.text; }
    if (img.element.attributes.datasub) {
      var imgSub = '<div class="select-tpl-txt-sub h7 color-default-3">' + img.element.attributes.datasub.value + '</div>'
    } else {
      imgSub = ''
    }
    if (img.element.attributes.dataimgClass) {

      return $img = $('<div class="select-tpl-img-wrap"><div class="row row-10 align-items-center"><div class="col-auto"><div class="select-tpl-img ' + img.element.attributes.dataimgClass.value + '" style="background-image: url(\'' + img.element.attributes.dataimg.value + '\')"></div></div><div class="col"><div class="select-tpl-txt b">' + img.text + '</div>' + imgSub + '</div></div></div>');
    } else {
      return $img = $('<div class="select-tpl-img-wrap"><div class="row row-10 align-items-center"><div class="col"><div class="select-tpl-txt b">' + img.text + '</div>' + imgSub + '</div></div></div>');
    }
  };
  $('.select-2-template').select2({
    templateResult: templateImgRes,
    templateSelection: templateImg,
    width: '100%'
  });
  $('.select-2-template[multiple]').select2({
    templateResult: templateImgRes,
    templateSelection: templateImg,
    closeOnSelect: false,
    width: '100%'
  });
  //end template select-2
  if (iOS()) {
    if ($(window).width() < 992 && deviceIsMobile) {
      $(document).on('touchstart', '.select2-results', function (e) {
        setTimeout(function () {
          $('input').blur();
        }, 1000)
      });
    }
  }
});

$(document).ready(function () {
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
  })
  // End search
  $('.radio1 input[type=radio]').change(function(){
    if($(this).is(":checked")) {
      $('.show-radio-1').addClass('active');
      $('.show-radio-2').removeClass('active');
      $('.show-radio-btn2').removeClass('active');
      $('.show-radio-btn1').addClass('active');
    }
});
$('.radio2 input[type=radio]').change(function(){
    if($(this).is(":checked")) {
      $('.show-radio-1').removeClass('active');
      $('.show-radio-2').addClass('active');
        $('.show-radio-btn2').addClass('active');
        $('.show-radio-btn1').removeClass('active');

    }
});
 

$('.show-box .switch-show>input[type=checkbox]').change(function(){
  if($(this).is(":checked")) {
    $('.show-box').addClass('active');
  }
  else {
    $('.show-box').removeClass('active');
  }
});
$('.show-box-1 .switch-show>input[type=checkbox]').change(function(){
  if($(this).is(":checked")) {
    $('.show-box-1').addClass('active');
    $('.show-radio-btn1').removeClass('active');
    $('.show-radio-btn2').addClass('active');    

  }
  else {
    $('.show-box-1').removeClass('active');
    $('.show-radio-btn1').addClass('active');
    $('.show-radio-btn2').removeClass('active');    
  }
});
$('.ubtn-showbox input[type=checkbox]').change(function(){
  if($(this).is(":checked")) {
      $('.showbox').addClass('active');
  }
});
         //====================select2customize=================//
function setlogos (logos) {
if (!logos.id) { return logos.text; }
var $logos = $(
    '<div class="select2-item">' +
    '<div class="select2-img"><img src="images-general/logo/'+ logos.text +'.svg" /></div>' +
  '<div class="select2-title">' + logos.text + '</div>'+ 
  '<div class="select2-des">' + logos.element.value + '</div>'); +
  '</div>'
return $logos;
};
$(".select2customize").select2({
placeholder: "Chọn", //placeholder
allowClear: true,
templateResult: setlogos,
templateSelection: setlogos
});
//====================select2customize=================// 

//====================select2customize=================//
function select2_text (select2_text) {
if (!select2_text.id) { return select2_text.text; }
var $select2_text = $(
    '<div class="select2-item">' +
  '<div class="select2-title size16 b">' + select2_text.text + '</div>'+ 
  '<div class="select2-des size12">' + select2_text.element.value + '</div>'); +
  '</div>'
return $select2_text;
};
$(".select2_text").select2({
placeholder: "Chọn", //placeholder
templateResult: select2_text,
templateSelection: select2_text
});
//====================select2customize=================//

//====================select2customize-style2=================//
function setlogos2 (logos2) {
  if (!logos2.id) { return logos2.text; }
  var $logos2 = $(
      '<div class="select2-item2">' +
      '<div class="select2-img2"><img src="images-general/logo/'+ logos2.element.value +'.svg" /></div>' +
    '<div class="select2-title2">' + logos2.text + '</div>'); +
    '</div>'
  return $logos2;
  };
  $(".select2customize-style2").select2({
  placeholder: "Chọn", //placeholder
  templateResult: setlogos2,
  templateSelection: setlogos2
  });
  //====================select2customize-style2=================// 
           //====================select2customize-style3=================//
function setlogos3 (logos3) {
  if (!logos3.id) { return logos3.text; }
  var $logos3 = $(
      '<div class="select2-item3">' +
      '<div class="select2-img3"><img src="images-general/logo/'+ logos3.element.value +'.svg" /></div>' +
    '<div class="select2-title3">' + logos3.text + '</div>'+ 
    '<div class="select2-des3-sub">' + logos3.element.id + '</div>'+ 
    '<div class="select2-text-bank">' + 'Eximbank' + '</div>'); +
    '</div>'
  return $logos3;
  };
  $(".select2customize-style3").select2({
  placeholder: "Chọn", //placeholder
  templateResult: setlogos3,
  templateSelection: setlogos3
  });
  //====================select2customize-style3=================// 
  
});
//====================END SELECT2 INIT=================//