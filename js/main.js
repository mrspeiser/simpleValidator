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
	       		$('.displayValidation').removeClass('red');
	       		$('.displayValidation').addClass('green');
	       		$('.displayValidation').text(Validator.passwordValidated);
	       		$('.displayValidation2').parent().remove();
	       		$(':input[type="submit"]').prop('disabled', false);
	       	} else {
	       		$(".displayValidation").text(Validator.lessThan6Char);
	       		$(".displayValidation2").text(Validator.noNumberWarn);
	       		
	       	}
	    });
	}
}
Validator.displayText();

$('.sign-in').on('click', function(){
	$('.form-div').addClass('triggerForwards');
	$('.buttons').addClass('hideButtons'); 
	$('.form').addClass('showForm');
	$('.form-div').on('animationend webkitAnimationEnd oAnimationEnd',
    function() {
        $('.form-div').removeClass("triggerForwards");
        $
	    }
	);
});


$('.sign-up').on('click', function(){
	$('.form-div').addClass('triggerBackwards');
	$('.form-div').on('animationend webkitAnimationEnd oAnimationEnd',
    function() {
        $('.form-div').removeClass("triggerBackwards");
	    }
	);
});


})();
