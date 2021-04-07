function hoverMenuLink() {
	if ($(window).width() <= 1124) {
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


function showBlockClick(btn, block) {
	btn.click(function () {
		btn.toggleClass('active');
		block.toggleClass('active');
		// main.toggleClass('active');
		
	})
	// main.on('click', function (e) {
	// 	if (e.target == this) {
		
	// 		btn.removeClass('active');
	// 		block.removeClass('active');
	// 		// main.removeClass('active');
	// 	}


	// });
}


showBlockClick($('.burger--js'), $('.header-menu--js'))