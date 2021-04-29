let acr = $('.accordeon-js .acc-head-js');
$(document).ready(function () {
	acr.on('click', f_acc);
});

function f_acc() {
	$('.accordeon-js .acc-body-js').not($(this).next()).slideUp(300).removeClass('active');
	$(this).next().slideToggle(300).toggleClass('active');

	$('.accordeon-js .acc-head-js').not($(this)).removeClass('active');
	$(this).toggleClass('active');
}