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
			$('.main').toggleClass('active');
			
		});
		$('.main').on('click', function (e) {
			if (e.target == this) {
				$(".header-contact--js").removeClass('active');
				$('.main').removeClass('active');
			}
		});
	}
	
}

headerClass($(".header-contact--js"));
