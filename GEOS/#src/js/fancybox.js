
$(document).ready(function () {

	$(function () {
		for (let i = 0; i < $('.banSlider-box__right').length; i++) {
			const el = $('.banSlider-box__right')[i];
			$(el).children('.fancybox').attr('data-fancybox', `fancybox-${i + 1}`);
		}
	})

});

