//<accordeon>---------------------------------------
$(document).ready(function () {
	$('.accordeon-js .accordeon-box .acc-head-js').on('click', f_acc);
});

function f_acc() {
	$('.accordeon-js .accordeon-box .acc-body-js').not($(this).next()).slideUp(2000);
	$(this).next().slideToggle(2000);
}
//</accordeon>---------------------------------------
