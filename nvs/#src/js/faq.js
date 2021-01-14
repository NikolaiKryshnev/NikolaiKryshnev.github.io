// ----------------------------------------------
// FAQ - accardeon
// ----------------------------------------------

let acr = $('.accordeon-js .faq-block__link');
$(document).ready(function () {
	acr.on('click', f_acc);
});

function f_acc() {
	$('.accordeon-js .acc-body-js').not($(this).next()).slideUp(1000).removeClass('active');
	$(this).next().slideToggle(1000).toggleClass('active');

	$('.accordeon-js .acc-head-js').not($(this)).removeClass('active');
	$(this).toggleClass('active');

}