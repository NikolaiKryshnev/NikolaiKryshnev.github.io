// ----------------------------------------------
// HEADER - block info
// ----------------------------------------------

function headerClass(el) {
	if ($(window).width() > 992) {
		el.mouseenter(function () {
			$(this).addClass('active');
		});

		el.mouseleave(function () {
			$(this).removeClass('active');
		});
	} else {
		el.click(function () {
			$(this).toggleClass('active');
		});
	}
}

headerClass($(".header-contact--js"));