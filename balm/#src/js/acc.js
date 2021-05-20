function f_acc($this, accBody, accHead) {
	$(accBody).not($($this).next()).slideUp(1000).removeClass('active');
	$($this).next().slideToggle(1000).toggleClass('active');

	$(accHead).not($($this)).removeClass('active');
	$($this).toggleClass('active');
}

if ($(window).width() < 767.88) {
	$('.footer-nav__title').append(`<div class="icon-plus"></div>`)
	$('.footer-nav.acc-js .acc-head-js').on('click', function (e) {
		f_acc($(this), $('.footer-nav.acc-js .acc-body-js'), $('.footer-nav.acc-js .acc-head-js'))
	});
}
