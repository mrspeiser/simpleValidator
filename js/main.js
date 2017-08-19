(function(){

	(function(){
	
	var Validator = {
		textString : "Password111",
		lessThan6Char : "Your password needs at least 6 characters!",
		noNumberWarn : "Your password needs at least 1 number!",
		passwordValidated : "Your password is OK",

		displayText : function(){
			$('#password').on('keyup', function(e){
				var txtInput = $(this).val();
				// console.log(txtInput);
				// $(".displayPass").text(txtInput);
		       	if(txtInput.length > 5 && txtInput.match(/\d/)){
		       		$('.displayValidation').text(Validator.passwordValidated);
		       		$('.displayValidation2').text(Validator.passwordValidated);
		       		$(':input[type="submit"]').prop('disabled', false);
		       	} else {
		       		$(".displayValidation").text(Validator.lessThan6Char);
		       		$(".displayValidation2").text(Validator.noNumberWarn);
		       		
		       	}
		    });
		}
}
Validator.displayText();
})();



})();
