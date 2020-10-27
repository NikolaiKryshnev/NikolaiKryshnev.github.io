//---------------------------------------------
// Radio
//---------------------------------------------
$(function () {
	const radio = $('.radio input[name="dostavka"]');
	radio.click(function () {
		

		if(+$(this).attr('value') == 1){
			$('.btnOrder-js').attr('disabled', 'disabled')
		}else{
			$('.btnOrder-js').removeAttr('disabled', 'disabled')
		}	

		// if(radio.attr['value', '1'])
		// console.log('yes')
	})
})