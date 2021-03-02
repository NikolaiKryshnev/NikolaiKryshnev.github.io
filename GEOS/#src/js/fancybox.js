$(document).ready(function () {
	fancyboxNumber($('.banSlider-box__right'), '.fancybox');

	$(function () {
		for (let i = 0; i < $('.partfolio-line').length; i++) {
			const el = $('.partfolio-line')[i];
			for (let j = 0; j < $(el).find('.fancybox').length; j++) {
				const child = $(el).find('.fancybox')[j];
				$(child).attr('data-fancybox', `fancybox${i + 1}-${i + 1}`);

			}

			$(el).find('.galleryShow-js').on('click', function (e) {
				e.preventDefault();
				$.fancybox.open($(`[data-fancybox='fancybox${i + 1}-${i + 1}']`).fancybox());

			})
		}
	})

	$(".playVideo").fancybox({
		openEffect: 'none',
		closeEffect: 'none',
		helpers: {
			media: {}
		}
	})
	$(".review-img--js").fancybox({
		slideShow: true,
		fullScreen: true,
		thumbs: true,
		closeBtn: true,
	})
});

