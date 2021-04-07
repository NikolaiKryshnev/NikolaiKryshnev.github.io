

$(function () {
	let anBlock = $('.advan-col__number');
	let elFlase = false;

	if (anBlock.length > 0) {
		function scrollTracking() {
			if (elFlase) {
				return false;
			}

			let wt = $(window).scrollTop();
			let wh = $(window).height();
			let et = $('.advan').offset().top;
			let eh = $('.advan').outerHeight();
			let dh = $(document).height();

			if (wt + wh >= et || wh + wt == dh || eh + et < wh) {
				elFlase = true;
				// elFlase = false;

				for (let i = 0; i < anBlock.length; i++) {
					const el = anBlock[i];
					let numberAn = $(el).attr('data-num');
					$(el).animateNumber(
						{
							number: numberAn,
							numberStep: function (now, tween) {
								var floored_number = Math.floor(now),
									target = $(tween.elem);

								target.text(floored_number);
							}
						},
						{
							easing: 'swing',
							duration: 1800
						}
					);
				}

			}
		}
		$(window).scroll(function () {
			scrollTracking();
		});
	
		scrollTracking();
	}

	
})