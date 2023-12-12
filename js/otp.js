/*let digitValidate = function(ele){
	console.log(ele.value);
	ele.value = ele.value.replace(/[^0-9]/g,'');
  }
  
  let tabChange = function(val){
	  let ele = document.querySelectorAll('input.otp-number-input');
	  if(ele[val-1].value != ''){
		ele[val].focus()
	  }else if(ele[val-1].value == ''){
		ele[val-2].focus()
	  }   
   }*/
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
	ev.target.value = ev.target.value.replace(/[^\d]/g,'');
  }      
});