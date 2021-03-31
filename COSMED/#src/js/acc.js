let acr = $('.accordeon-js .acc-head-js');
$(document).ready(function () {
	acr.on('click', f_acc);
});

function f_acc() {
	$('.accordeon-js .acc-body-js').not($(this).next()).slideUp(500).removeClass('active');
	$(this).next().slideToggle(500).toggleClass('active');

	$('.accordeon-js .acc-head-js').not($(this)).removeClass('active');
	$(this).toggleClass('active');
}