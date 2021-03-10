function hoverMenuLink(blockClick, blockHover) {
	if ($(window).width() < 1125) {
		blockClick.click(
			function (e) {
				// e.preventDefault();
				$(this).toggleClass('hover');
				$(".main").toggleClass('active');

			},
		);
		$(".main").on('click', function (e) {
			if (e.target == this) {
				blockClick.removeClass('hover');
				$(".main").removeClass('active');

			}
		});
	} else {
		blockHover.hover(
			function () {
				$(this).addClass('hover');
			},
			function () {
				$(this).removeClass('hover');
			}
		);
	}

}
$(window).resize(function () {
	hoverMenuLink($('.header-menu__ul li .header-arrow'), $('.header-menu__ul li'));
	hoverMenuLink($('.header-contact--js'), $('.header-contact--js'));

});

$(document).ready(function () {
	hoverMenuLink($('.header-menu__ul li .header-arrow'), $('.header-menu__ul li'));
	hoverMenuLink($('.header-contact--js'), $('.header-contact--js'));

});