$(document).ready(function () {
	if ($(window).width() <= 1200) {
		$('.accordeon-js  .acc-head-js .sidebar-arrow').on('click', f_acc);

	}else{
		$('.accordeon-js  .acc-head-js').on('click', f_acc);

	}
});

function f_acc() {
	let accBody = $('.accordeon-js .acc-body-js'),
		accHead = $('.accordeon-js .acc-head-js');
	if ($(window).width() <= 1200) {
		accBody.not($(this).parent().next()).slideUp(1000).removeClass('active');
		$(this).parent().next().slideToggle(1000).toggleClass('active');
		accHead.not($(this).parent()).removeClass('active');
		$(this).parent().toggleClass('active');
	} else {
		accBody.not($(this).next()).slideUp(1000).removeClass('active');
		$(this).next().slideToggle(1000).toggleClass('active');
		accHead.not($(this)).removeClass('active');
		$(this).toggleClass('active');
	}

}