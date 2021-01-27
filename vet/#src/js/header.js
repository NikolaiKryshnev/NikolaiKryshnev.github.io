

function hoverMenuLink() {
	if ($(window).width() <= 1024) {
		$('.header-menu__ul li .header-arrow').click(
			function (e) {
				if ($(this).parent().hasClass("ul-Submenu")) {
					$(this).parent().toggleClass('hover');
				} else {
					e.preventDefault();
					$(this).parent().parent().toggleClass('hover');
				}
			},
		);
	} else {
		$('.header-menu__ul li').hover(
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
	hoverMenuLink();
});

$(document).ready(function () {
	hoverMenuLink()
});