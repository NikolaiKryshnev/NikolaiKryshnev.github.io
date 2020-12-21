if ($(window).width() > 1200) {
	if ($('.nav-blocks-js')) {
		let block_show = null;
		let posHeight = $('.nav-blocks-js').offset().top;

		function addClassBlocks(num, color) {
			thisEl.siblings().removeClass('active');
			thisEl.addClass('active');
			$('[data-menuposition]').siblings().removeClass('active');
			num.addClass('active');
		}

		function scrollTracking() {
			let pos = $('[data-position]');

			pos.each(function (index, value) {

				el = $(this);
				let dataEl = el.data("position");

				var wt = $(window).scrollTop();
				var wh = $(window).height();
				var et = el.offset().top - (posHeight + posHeight);
				var eh = el.outerHeight();

				if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)) {
					if (block_show == null || block_show == false) {
						if (dataEl === 1) {
							thisEl = $(this);
							addClassBlocks($('[data-menuposition="1"]'));
							$('.nav-blocks-js').removeClass('white');
						} else if (dataEl === 2) {
							thisEl = $(this);
							addClassBlocks($('[data-menuposition="2"]'));
							$('.nav-blocks-js').addClass('white');
						} else if (dataEl === 3) {
							thisEl = $(this);
							addClassBlocks($('[data-menuposition="3"]'));
							$('.nav-blocks-js').removeClass('white');
						} else if (dataEl === 4) {
							thisEl = $(this);
							addClassBlocks($('[data-menuposition="4"]'));
							$('.nav-blocks-js').addClass('white');
						} else if (dataEl === 5) {
							thisEl = $(this);
							addClassBlocks($('[data-menuposition="5"]'));
							$('.nav-blocks-js').removeClass('white');

						} else if (dataEl === 6) {
							thisEl = $(this);
							addClassBlocks($('[data-menuposition="6"]'));
							$('.nav-blocks-js').addClass('white');
						} else if (dataEl === 7) {
							thisEl = $(this);
							addClassBlocks($('[data-menuposition="7"]'));
							$('.nav-blocks-js').removeClass('white');
						} else if (dataEl === 8) {
							thisEl = $(this);
							addClassBlocks($('[data-menuposition="8"]'));
							$('.nav-blocks-js').show().addClass('white');
						} else if (dataEl === 9) {
							$('.nav-blocks-js').hide();
						}
					}
					block_show = true;
				} else {
					if (block_show == null || block_show == true) {
						thisEl = $(this);
						$(this).removeClass('active');
					}
					block_show = false;
				}
			});
		}

		$(window).scroll(function () {
			scrollTracking();
		});

		$(window).bind("load", function () {
			scrollTracking();
		});
	}
}