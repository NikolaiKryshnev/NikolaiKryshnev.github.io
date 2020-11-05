//<Sub Menu Active>---------------------------------------------------------------------------------------------------------------------

let width = $(window).width();
let submenu = $('.header-menu-js > li.submenu-js');
let submenuA = $('.header-menu-js > li.submenu-js > a');

if (width >= 1100) {
	submenu.hover(
		function () {
			$(this).addClass('active');
		},
		function () {
			$(this).removeClass('active');
		});
} else {
	submenuA.click(function (e) {
		e.preventDefault();

		$('.header-menu-js > li.submenu-js > ul').not($(this).next()).slideUp(500).removeClass('active');
		$(this).next().slideToggle(500).toggleClass('active');

		submenuA.not($(this)).removeClass('active');
		$(this).toggleClass('active');
	})
}

//</Sub Menu Active>---------------------------------------------------------------------------------------------------------------------


//<Burger Active>---------------------------------------------------------------------------------------------------------------------

$(function () {
	const burger = $('.burger-js');
	const burgerMenu = $('.header-menu-js');
	burger.click(function () {
		burger.toggleClass('active');
		burgerMenu.toggleClass('active');
		$('.page-js').toggleClass('active');
	})
})

//</Burger Active>---------------------------------------------------------------------------------------------------------------------

