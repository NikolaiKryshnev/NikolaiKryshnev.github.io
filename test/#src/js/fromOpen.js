//---------------------------------------------
// Form Open
//---------------------------------------------
$(function () {
	const btnOpen = $('.btnOpen-js');
	const formOpen = $('.formOpen-js');
	btnOpen.click(function () {
		btnOpen.attr('disabled', "disabled");
		formOpen.addClass('active');
		$('.formTitle-js').addClass('active');


	})
})