//<Header link active>---------------------------------------

let Blockpositions = [],
	currentActive = null,
	links = $('.nav-blocks-js li a'),
	navBlocks = $('.nav-blocks-js');

$('section').each(function () {
	Blockpositions.push({
		top: $(this).position().top - 400,
		a: links.filter('[href="#' + $(this).attr('id') + '"]')
	});
});

Blockpositions = Blockpositions.reverse();

$(window).on('scroll', function () {
	var winTop = $(window).scrollTop();
	for (var i = 0; i < Blockpositions.length; i++) {
		if (Blockpositions[i].top < winTop) {
			if (currentActive !== i) {
				currentActive = i;

				if (currentActive == 0) {
					navBlocks.hide();

				} else if (currentActive > 0) {
					navBlocks.show();
					if ((currentActive % 2 == 0)) {
						// 								navBlocks.removeClass('white');
					} else {
						// 								navBlocks.addClass('white');
					}
					links.filter('.active').removeClass('active');
					Blockpositions[i].a.addClass("active");
				}
			}
			break;
		}
	}
});

//</Header link active>---------------------------------------




$(window).bind("load", function () {
	if ($(window).width() > 1200) {
		if ($('.nav-blocks-js')) {
			var Blockpositions = [],
				currentActive = null,
				links = $('.nav-blocks-js li a'),
				navBlocks = $('.nav-blocks-js');

			$('[data-position]').each(function () {
				Blockpositions.push({
					top: $(this).position().top - 400,
					a: links.filter('[href="#' + $(this).attr('id') + '"]')
				});
			});

			Blockpositions = Blockpositions.reverse();
			function navActive() {
				var winTop = $(window).scrollTop();
				for (var i = 0; i < Blockpositions.length; i++) {
					if (Blockpositions[i].top < winTop) {
						if (currentActive !== i) {
							currentActive = i;

							if (currentActive == 0) {
								navBlocks.hide();

							} else if (currentActive > 0) {
								navBlocks.show();
								if ((currentActive % 2 == 0)) {
									// 								navBlocks.removeClass('white');
								} else {
									// 								navBlocks.addClass('white');
								}
								links.filter('.active').removeClass('active');
								Blockpositions[i].a.addClass("active");
							}
						}
						break;
					}
				}
			}
			$(window).on('scroll', function () {
				navActive();
			});
			
			navActive()

		}
	}
});