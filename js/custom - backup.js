$(document).ready(function () {  
//select box
   var prevVal;
/*$("#paragraphSpaceOPtion").on("change",function(){
 var val = $(this).find('option:selected').val();
 $(".show_box").removeClass(`show_box-${prevVal}`).addClass(`show_box-${val}`);
 prevVal = val;
});*/
$(".show_box").removeClass().addClass("show_box show_box-"+$('#paragraphSpaceOPtion').find('option:selected').val());
$("#paragraphSpaceOPtion").on("change",function(){
  var val=$(this).find('option:selected').val();
  $(".show_box").removeClass().addClass("show_box show_box-"+val);
});

$(".select_option").on("change",function(){
   var val=$(this).find('option:selected').val();
   if (val == '1'){      
      $(".select-option-hide").removeClass('active');
    }
    else
     {
      $(".select-option-hide").addClass('active');
      $(".select-option-sub1").removeClass('active');
    }
 });
 $(".select_bank").on("change",function(){
   var val=$(this).find('option:selected').val();
   if (val == 'Ngân hàng thương mại cổ phần Xuất Nhập Khẩu Việt Nam') {    
      $(".select-option-hide").removeClass('active');      
    }
    else
     { 
      $(".select-option-hide").addClass('active');
    }
 });
 $(".selectoption").on("change",function(){
   var val=$(this).find('option:selected').val();
   if (val == '1') {      
      $(".select-option-hide").addClass('active');
    }
    else
     {
      $(".select-option-hide").addClass('active');
    }
 });
$(".select_option_sub").on("change",function(){
   var val=$(this).find('option:selected').val();
   if (val == '1') {      
      $(".select-option-sub1").removeClass('active');
      $(".select-option-sub2").addClass('active');
    }
    else
     {
      $(".select-option-sub1").addClass('active');
      $(".select-option-sub2").removeClass('active');
    }
 });
//end select box
 
   
   $('body').addClass('background');
   

   $('.is-valid ~ .input-clear').on('click', function () {
      $(".is-valid.input-material").removeClass('is-valid');
   });
   $('.is-warning ~ .input-clear').on('click', function () {
      $(".is-warning.input-material").removeClass('is-warning');
   });
   $('.is-invalid ~ .input-clear').on('click', function () {
      $(".is-invalid.input-material").removeClass('is-invalid');
   });

   $('.is-valid').blur(function(){
      if(!$(this).val()){
         $(".is-valid.input-material").removeClass('is-valid');
      }
  });
  $('.is-warning').blur(function(){
   if(!$(this).val()){
      $(".is-warning.input-material").removeClass('is-warning');
   }
});
$('.is-invalid').blur(function(){
   if(!$(this).val()){
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
  $('.input-clear').on('click', function () {
   var input = $(this).siblings().closest('input');
   input.val('')
   input.trigger('change');
   input.keyup();
   input.focus();
})

$('.input-clear').on('click', function () {
   var textarea = $(this).siblings().closest('textarea');
   textarea.val('')
   textarea.trigger('change');
   textarea.keyup();
   textarea.focus();
});

$('.input-check1').on('paste keyup change', function () {
   var inputClear = $(this).siblings().closest('.input-clear');
   if ($(this).val()) {
      inputClear.addClass('show');
      $('.input-check1 ~ .txt-hiddren').addClass('show');      
   }
   else {
      $('.input-check1 ~ .txt-hiddren').removeClass('show');      
   }
});

$('.input-check2').on('paste keyup change', function () {
   var inputClear = $(this).siblings().closest('.input-clear');
   if ($(this).val()) {
      inputClear.addClass('show');
      $('.input-check2 ~ .txt-hiddren').addClass('show');
      //$('.input-check2 ~ .search-list').addClass('show');
      $('.list-info.list-info-hiddren').addClass('show');
   }
   else {
      $('.input-check2 ~ .txt-hiddren').removeClass('show');
      //$('.input-check2 ~ .search-list').removeClass('show');
      $('.list-info.list-info-hiddren').removeClass('show');
   }
});
 $('.input-check2').focusout(function () {
   $(this).siblings('.search-list').removeClass('show');
 });
$('.input-has-clear').on('paste keyup change', function () {
   var inputClear = $(this).siblings().closest('.input-clear');
   if ($(this).val()) {
      inputClear.addClass('show');
   }
   else {
      inputClear.removeClass('show');
   }
});
$('.input-has-clear').on('paste keyup change', function () {
   var inputClear = $(this).siblings().closest('.txt_count');
   if ($(this).val()) {
      inputClear.addClass('show');
   }
   else {
      inputClear.removeClass('show');
   }
});
//end input clear
 });

 $(document).ready(function () {  
   $('.box_checks .checkbox input[type=checkbox]').change(function(){
      if($(this).is(":checked")) {
          $('.box_checks').addClass('active');
      } else {
          $('.box_checks').removeClass('active');
      }
  });
    
  $('.form-action input').on('keyup', function()
  {
    var self = $( '.form-action .input-check1' ),
      label = self.siblings('.box-button');
  
      if ( self.val() != '' ) {
        $('.box-button').addClass('active');
        $('.box-button').removeClass('no-active');
      } else {
        $('.box-button').removeClass('active');
        $('.box-button').addClass('no-active');
      }
  });
  $('.form-action input').on('keyup', function()
  {
    var self = $( '.form-action .input-check2' ),
      label = self.siblings('.box-button');
  
      if ( self.val() != '' ) {
        $('.box-button').addClass('active');
        $('.box-button').removeClass('no-active');
      } else {
        $('.box-button').removeClass('active');
        $('.box-button').addClass('no-active');
      }
  });
    $('.form-action input').on('keyup', function()
  {
    var self = $( '.form-action .input-check3' ),
      label = self.siblings('.box-button');
  
      if ( self.val() != '' ) {
        $('.box-button').addClass('active');
        $('.box-button').removeClass('no-active');
      } else {
        $('.box-button').removeClass('active');
        $('.box-button').addClass('no-active');
      }
  }); 
  $('.form-action1 .input-check1').on('keyup', function()
  {
  var self = $( '.form-action1 .input-check1' ),
  label = self.siblings('.box-button');  
  if ( self.val() != '' ) {
  $('.box-button').addClass('active');
  $('.box-button').removeClass('no-active');
  } else {
  $('.box-button').removeClass('active');
  $('.box-button').addClass('no-active');
  }
  });
  $('.form-action1 .input-check2').on('keyup', function()
  {
  var self = $( '.form-action1 .input-check2' ),
  label = self.siblings('.box-button');  
  if ( self.val() != '' ) {
  $('.box-button').addClass('active');
  $('.box-button').removeClass('no-active');
  } else {
  $('.box-button').removeClass('active');
  $('.box-button').addClass('no-active');
  }
  });


$('.form-action2 .input-check2').on('keyup', function()
{
var self = $( '.form-action2 .input-check2' ),
label = self.siblings('.box-button');  
if ( self.val() != '' ) {
$('.box-button').addClass('active');
$('.box-button').removeClass('no-active');
} else {
$('.box-button').removeClass('active');
$('.box-button').addClass('no-active');
}
});

});
$(document).ready(function () {
   $('.wrap-checkbox input[type="checkbox"]').on('change', function () {
      if ($('.wrap-checkbox input[type="checkbox"]').is(':checked')) {
         $('.checkbox-show').show();
      }
      else {
         $('.checkbox-show').hide();
      }
   });
   //checkbox toggle
$('.check-all').each(function () {
   $(this).on('change', function () {
      $(this).parent().closest('.check-all-label').next('.checkbox-group').find('input[type=checkbox]').prop('checked', $(this).prop('checked'))
   })
 })
 $('.checkbox-group input[type=checkbox]').on('change', function () {
   var checkAlls = $(this).parents().closest('.checkbox-group').prev('.check-all-label').find('.check-all');
   var checkAll = $(this).parent().closest('.checkbox-group').prev('.check-all-label').find('.check-all');
   if (!$(this).is(':checked')) {
      checkAlls.prop('checked', false);
   }
   else {
      var childCheck = $(this).parent().closest('.checkbox-group').find('> label input[type=checkbox]:not(:checked)').length;
      if (childCheck == 0) {
         checkAll.prop('checked', 'checked').trigger('change');
      }
   }
 });
 $('.checkbox-group input[type=checkbox]').trigger('change');
 //end checkbox toggle
});