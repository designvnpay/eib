$(document).ready(function() {
$('.select-2').select2({
    allowClear: true
});

    $('body').on('click', '.btn-move', function(e) {
        $('body').addClass('show-btn-move');
    });

    /*$('.btn-remove').on('click', function() {
        $(this).closest('.box-list-item').hide();
    });*/
    //select box
    var prevVal;
    /*$("#paragraphSpaceOPtion").on("change",function(){
     var val = $(this).find('option:selected').val();
     $(".show_box").removeClass(`show_box-${prevVal}`).addClass(`show_box-${val}`);
     prevVal = val;
    });*/
    $(".show_box").removeClass().addClass("show_box show_box-" + $('#paragraphSpaceOPtion').find('option:selected').val());
    $("#paragraphSpaceOPtion").on("change", function() {
        var val = $(this).find('option:selected').val();
        $(".show_box").removeClass().addClass("show_box show_box-" + val);
    });
    $(".show_box2").removeClass().addClass("show_box2 show_box-" + $('#paragraphSpaceOPtion2').find('option:selected').val());
    $("#paragraphSpaceOPtion2").on("change", function() {
        var val = $(this).find('option:selected').val();
        $(".show_box2").removeClass().addClass("show_box2 show_box-" + val);
    });

    $(".select_option").on("change", function() {
        var val = $(this).find('option:selected').val();
        if (val == '1') {
            $(".select-option-hide").removeClass('active');
            $(".select-option1").addClass('active');
            $(".select-option2").removeClass('active');
        } else {
            $(".select-option-hide").addClass('active');
            $(".select-option-sub1").removeClass('active');
            $(".select-option1").removeClass('active');
            $(".select-option2").addClass('active');
        }
    });
    $(".select_bank").on("change", function() {
        var val = $(this).find('option:selected').val();
        if (val == 'Ngân hàng thương mại cổ phần Xuất Nhập Khẩu Việt Nam') {
            $(".select-option-hide").removeClass('active');
        } else {
            $(".select-option-hide").addClass('active');
        }
    });
    $(".selectoption").on("change", function() {
        var val = $(this).find('option:selected').val();
        if (val == '1') {
            $(".select-option-hide").addClass('active');
        } else {
            $(".select-option-hide").addClass('active');
        }
    });
    $(".select_option_sub").on("change", function() {
        var val = $(this).find('option:selected').val();
        if (val == '1') {
            $(".select-option-sub1").removeClass('active');
            $(".select-option-sub2").addClass('active');
        } else {
            $(".select-option-sub1").addClass('active');
            $(".select-option-sub2").removeClass('active');
        }
    });
    //end select box
    //$('body').addClass('background');


    $('.is-valid ~ .input-clear').on('click', function() {
        $(".is-valid.input-material").removeClass('is-valid');
    });
    $('.is-warning ~ .input-clear').on('click', function() {
        $(".is-warning.input-material").removeClass('is-warning');
    });
    $('.is-invalid ~ .input-clear').on('click', function() {
        $(".is-invalid.input-material").removeClass('is-invalid');
    });

    $('.is-valid').blur(function() {
        if (!$(this).val()) {
            $(".is-valid.input-material").removeClass('is-valid');
        }
    });
    $('.is-warning').blur(function() {
        if (!$(this).val()) {
            $(".is-warning.input-material").removeClass('is-warning');
        }
    });
    $('.is-invalid').blur(function() {
        if (!$(this).val()) {
            $(".is-invalid.input-material").removeClass('is-invalid');
        }
    });

    /*$('.input-group-material>.input-material.is-valid').on('paste keyup change', function () {
         var inputClear = $(this).siblings().closest('.input-group-material>.input-material ~ .input-clear');
         if ($(this).val()) {
            inputClear.addClass('show');
            $('.input-group-material>.input-material').addClass('is-valid');
    
         }
         else {
            $('.input-group-material>.input-material.is-valid').removeClass('is-valid');    
            $('.input-group-material>.input-material ~ .input-clear').removeClass('show');  
         }
      });
   
      $('.is-warning').on('paste keyup change', function () {
         var inputClear = $(this).siblings().closest('.input-clear');
         if ($(this).val()) {
            inputClear.addClass('show');
            $('.input-material.is-warning').addClass('is-warning');
    
         }
         else {
            $('.input-material.is-warning').removeClass('is-warning');    
            $('.input-clear').removeClass('show');  
         }
      });
   
      $('.is-invalid').on('paste keyup change', function () {
         var inputClear = $(this).siblings().closest('.input-clear');
         if ($(this).val()) {
            inputClear.addClass('show');
            $('.input-material.is-invalid').addClass('is-invalid');
    
         }
         else {
            $('.input-material.is-invalid').removeClass('is-invalid');    
            $('.input-clear').removeClass('show');  
         }
      });
   
   */     

  $('.radio1').on('click', function() {
    $('.show-radio-1').addClass('active');
    $('.show-radio-2').removeClass('active');
    $('.show-radio-btn2').removeClass('active');
    $('.show-radio-btn1').addClass('active');
});
  $('.radio2').on('click', function() {
    $('.show-radio-1').removeClass('active');
          $('.show-radio-2').addClass('active');
            $('.show-radio-btn2').addClass('active');
            $('.show-radio-btn1').removeClass('active');
});

    $('.input-clear').on('click', function() {
        var input = $(this).siblings().closest('input');
        input.val('')
        input.trigger('change');
        input.keyup();
        input.focus();
    })

    $('.input-clear').on('click', function() {
        var textarea = $(this).siblings().closest('textarea');
        textarea.val('')
        textarea.trigger('change');
        textarea.keyup();
        textarea.focus();
    });

    $('.input-check1').on('paste keyup change', function() {
        var inputClear = $(this).siblings().closest('.input-clear');
        if ($(this).val()) {
            inputClear.addClass('show');
            $('.input-check1 ~ .txt-hiddren').addClass('show');
        } else {
            $('.input-check1 ~ .txt-hiddren').removeClass('show');
        }
    });

    $('.input-check2').on('paste keyup change', function() {
        var inputClear = $(this).siblings().closest('.input-clear');
        if ($(this).val()) {
            inputClear.addClass('show');
            $('.input-check2 ~ .txt-hiddren').addClass('show');
            //$('.input-check2 ~ .search-list').addClass('show');
            $('.list-info.list-info-hiddren').addClass('show');
        } else {
            $('.input-check2 ~ .txt-hiddren').removeClass('show');
            //$('.input-check2 ~ .search-list').removeClass('show');
            $('.list-info.list-info-hiddren').removeClass('show');
        }
    });
    $('.input-check2').focusout(function() {
        $(this).siblings('.search-list').removeClass('show');
    });
    $('.input-has-clear').on('paste keyup change focus', function() {
        var inputClear = $(this).siblings().closest('.input-clear');
        if ($(this).val()) {
            inputClear.addClass('show');
        } else {
            inputClear.removeClass('show');
        }
    });
    $('.input-has-clear').on('paste keyup change', function() {
        var inputClear = $(this).siblings().closest('.txt_count');
        if ($(this).val()) {
            inputClear.addClass('show');
        } else {
            inputClear.removeClass('show');
        }
    });
    //end input clear
});

$(document).ready(function() {
    $('.box_checks .checkbox input[type=checkbox]').change(function() {
        if ($(this).is(":checked")) {
            $('.box_checks').addClass('active');
            $('.box-show').addClass('active');
            $('#modal_notify_exim_on').modal('show');
            $('#modal_notify_exim_off').modal('hide');
        } else {
            $('.box_checks').removeClass('active');
            $('.box-show').removeClass('active');
            $('#modal_notify_exim_on').modal('hide');
            $('#modal_notify_exim_off').modal('show');
        }
    });
    $('.ubtn-showbox input[type=checkbox]').change(function() {
        if ($(this).is(":checked")) {
            $('.box-show1').addClass('active');
        } else {
            $('.box-show1').removeClass('active');
        }
    });

    $('.form-action input').on('keyup', function() {
        var self = $('.form-action .input-check1'),
            label = self.siblings('.box-button');

        if (self.val() != '') {
            $('.box-button').addClass('active');
            $('.box-button').removeClass('no-active');
        } else {
            $('.box-button').removeClass('active');
            $('.box-button').addClass('no-active');
        }
    });
    $('.form-action input').on('keyup', function() {
        var self = $('.form-action .input-check2'),
            label = self.siblings('.box-button');

        if (self.val() != '') {
            $('.box-button').addClass('active');
            $('.box-button').removeClass('no-active');
        } else {
            $('.box-button').removeClass('active');
            $('.box-button').addClass('no-active');
        }
    });
    $('.form-action input').on('keyup', function() {
        var self = $('.form-action .input-check3'),
            label = self.siblings('.box-button');

        if (self.val() != '') {
            $('.box-button').addClass('active');
            $('.box-button').removeClass('no-active');
        } else {
            $('.box-button').removeClass('active');
            $('.box-button').addClass('no-active');
        }
    });
    $('.form-action1 .input-check1').on('keyup', function() {
        var self = $('.form-action1 .input-check1'),
            label = self.siblings('.box-button');
        if (self.val() != '') {
            $('.box-button').addClass('active');
            $('.box-button').removeClass('no-active');
        } else {
            $('.box-button').removeClass('active');
            $('.box-button').addClass('no-active');
        }
    });
    $('.form-action1 .input-check2').on('keyup', function() {
        var self = $('.form-action1 .input-check2'),
            label = self.siblings('.box-button');
        if (self.val() != '') {
            $('.box-button').addClass('active');
            $('.box-button').removeClass('no-active');
        } else {
            $('.box-button').removeClass('active');
            $('.box-button').addClass('no-active');
        }
    });


    $('.form-action2 .input-check2').on('keyup', function() {
        var self = $('.form-action2 .input-check2'),
            label = self.siblings('.box-button');
        if (self.val() != '') {
            $('.box-button').addClass('active');
            $('.box-button').removeClass('no-active');
        } else {
            $('.box-button').removeClass('active');
            $('.box-button').addClass('no-active');
        }
    });

});
$(document).ready(function() {
    $('.wrap-checkbox input[type="checkbox"]').on('change', function() {
        if ($('.wrap-checkbox input[type="checkbox"]').is(':checked')) {
            $('.checkbox-show').show();
        } else {
            $('.checkbox-show').hide();
        }
    });
    //checkbox toggle
    $('.check-all').each(function() {
        $(this).on('change', function() {
            $(this).parent().closest('.check-all-label').next('.checkbox-group').find('input[type=checkbox]').prop('checked', $(this).prop('checked'))
        })
    })
    $('.checkbox-group input[type=checkbox]').on('change', function() {
        var checkAlls = $(this).parents().closest('.checkbox-group').prev('.check-all-label').find('.check-all');
        var checkAll = $(this).parent().closest('.checkbox-group').prev('.check-all-label').find('.check-all');
        if (!$(this).is(':checked')) {
            checkAlls.prop('checked', false);
        } else {
            var childCheck = $(this).parent().closest('.checkbox-group').find('> label input[type=checkbox]:not(:checked)').length;
            if (childCheck == 0) {
                checkAll.prop('checked', 'checked').trigger('change');
            }
        }
    });
    $('.checkbox-group input[type=checkbox]').trigger('change');
    //end checkbox toggle

    $(".progress").each(function(){
  
        var $bar = $(this).find(".bar");
        var $val = $(this).find("span");
        var perc = parseInt( $val.text(), 10);
      
        $({p:0}).animate({p:perc}, {
          duration: 3000,
          easing: "swing",
          step: function(p) {
            $bar.css({
              transform: "rotate("+ (45+(p*1.8)) +"deg)", // 100%=180° so: ° = % * 1.8
              // 45 is to add the needed rotation to have the green borders at the bottom
            });
            $val.text(p|0);
          }
        });
      });

      // file upload
      function bs_input_file() {
        $(".input-file").before(
            function() {
                if ( ! $(this).prev().hasClass('input-ghost') ) {
                    var element = $("<input type='file' class='input-ghost' style='visibility:hidden; height:0'>");
                    element.attr("name",$(this).attr("name"));
                    element.change(function(){
                        element.next(element).find('input').val((element.val()).split('\\').pop());
                    });
                    $(this).find("button.btn-choose").click(function(){
                        element.click();
                    });
                    $(this).find("button.btn-reset").click(function(){
                        element.val(null);
                        $(this).parents(".input-file").find('input').val('');
                    });
                    $(this).find('input').css("cursor","pointer");
                    $(this).find('input').mousedown(function() {
                        $(this).parents('.input-file').prev().click();
                        return false;
                    });
                    return element;
                }
            }
        );
    }
    $(function() {
        bs_input_file();
    });
      // file upload end
});


/*checkall list*/
$(document).on('change','input[type="checkbox"]',function(e) {
    var checked = $(this).prop("checked");
    var container = $(this).parent();
    var siblings = container.siblings();
  
    container.find('input[type="checkbox"]').prop({
      indeterminate: false,
      checked: checked
    });
  
    function checkSiblings(el) {
  
      var parent = el.parent().parent();
      var all = true;
  
      el.siblings().each(function() {
        return all = ($(this).children('input[type="checkbox"]').prop("checked") === checked);
      });
  
      if (all && checked) {
  
        parent.children('input[type="checkbox"]').prop({
          indeterminate: false,
          checked: checked
        });
  
        checkSiblings(parent);
  
      } else if (all && !checked) {
  
        parent.children('input[type="checkbox"]').prop("checked", checked);
        parent.children('input[type="checkbox"]').prop("indeterminate", (parent.find('input[type="checkbox"]:checked').length > 0));
        checkSiblings(parent);
  
      } else {
  
        el.parents("li").children('input[type="checkbox"]').prop({
          indeterminate: true,
          checked: false
        });
  
      }
  
    }
  
    checkSiblings(container);
  });
/*checkall list end*/
$(".check-all").click(function(){
    $(".checkbox>input.hidden").prop("checked",$(this).prop("checked"));
    });
