

function checkboxBlockShow(checkbox, block) {
	
	checkbox.click(function(){
		if ($(this).is(':checked')){
			block.show(100);
		} else {
			block.hide(100);
		}
	}); 
}

checkboxBlockShow($('.checkbox-email'), $('.fieldset-email'))
checkboxBlockShow($('.checkbox-pass'), $('.fieldset-password'))
