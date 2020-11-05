//<accordeon>---------------------------------------

let acrd = $('.accordeon-js .acc-head-js');
$(document).ready(function () {
	acrd.on('click', f_acc);
});

function f_acc() {
	$('.accordeon-js .acc-body-js').not($(this).next()).slideUp(1000).removeClass('active');
	$(this).next().slideToggle(1000).toggleClass('active');
	
	$('.accordeon-js .acc-head-js').not($(this)).removeClass('active');
	$(this).toggleClass('active');

}

//</accordeon>---------------------------------------

let acr = $('.faq--js .faq-block__link');
$(document).ready(function () {
	acr.on('click', f_ac);
});


function f_ac() {
	$('.faq--js .faq-block__content').not($(this).next()).slideUp(500).removeClass('active');
	$(this).next().slideToggle(500).toggleClass('active');

	$('.faq--js .faq-block__link').not($(this)).removeClass('active');
	$(this).toggleClass('active');

}
