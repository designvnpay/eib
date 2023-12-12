$(document).ready(function () {
   $('body').addClass('background');
    $('[name="home_"]').on('change', function () {
       if ($(this).is(':checked')) {
          //$('.bg').attr('class', '').addClass('bg ' + $(this).val());
          $('.bg').css("background-image","url(images-general/bg/default/" + $(this).val() + ".jpg");

       }
    });
 });