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
    /*
    document.getElementById('p-upload1').onchange = function () { readFile(this); };
    document.getElementById('p-upload2').onchange = function () { readFile(this); };
    */
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

});