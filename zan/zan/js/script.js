

	(function ($) {
		//<TASK>---------------------------------------

		let acr = $('.accordeon-js .acc-head-js');
$(document).ready(function () {
	acr.on('click', f_acc);
});

function f_acc() {
	// $('.accordeon-js .acc-body-js').not($(this).next()).slideUp(1000).removeClass('active');
	$(this).next().slideToggle(1000);
	$(this).toggleClass('active');


	// $('.accordeon-js .acc-head-js').toggleClass('active');
	// $(this).toggleClass('active');
}
	




		//</TASK>---------------------------------------
	})(jQuery);

