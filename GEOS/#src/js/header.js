function hoverMenuLink() {
	if ($(window).width() <= 1024) {
		$('.header-menu__ul li .header-arrow').click(
			function (e) {
				if ($(this).parent().hasClass("ul-Submenu")) {
					$(this).parent().toggleClass('hover');
					// $(this).parent().not($(this).next()).slideUp(1000);
					// $(this).next().slideToggle(1000);
				} else {
					e.preventDefault();
					$(this).parent().parent().toggleClass('hover');
					$(this).parent().parent().children('.ul-Submenu__block').slideToggle(1000);
					// $(this).parent().parent().children('.ul-Submenu__block').toggleClass('hover');
					// $(this).parent().parent().children('.ul-Submenu__block').not($(this).next()).slideUp(1000);
					// $(this).next().slideToggle(1000);
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
				
				// $(this).children('.ul-Submenu__block').slideUp(300)
			}
		);

	}
}

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

function showBlockClick(btn, block, main) {
	btn.click(function () {
		btn.toggleClass('active');
		block.toggleClass('active');
		main.toggleClass('active');
		$('.header').toggleClass('active');
		let height = $('header').height();
		if ($('.header-search').hasClass('active')) {
			$('.header-search').css({ 'top': `${height}px` });
		} else {
			$('.header-search').css({ 'top': `0px` });
		}
	})
	main.on('click', function (e) {
		if (e.target == this) {
			if ($('.header-search').hasClass('active')) {
				console.log('search');
				$('.header-search').css({ 'top': `0` });
			}
			$('.header').removeClass('active');
			btn.removeClass('active');
			block.removeClass('active');
			main.removeClass('active');
		}


	});
}


$(window).resize(function () {
	hoverMenuLink();
	headerClass($(".header-contact--js"));

});

$(document).ready(function () {
	showBlockClick($('.burger-js'), $('.header-menu--js'), $('.main'))

	hoverMenuLink()
	headerClass($(".header-contact--js"));

});
