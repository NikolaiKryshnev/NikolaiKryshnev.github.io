//---------------------------------------------
// Sub Menu Active
//---------------------------------------------
let width = $(window).width();
let submenu = $('.header-menu-js li');
if (width >= 992) {
	submenu.hover(
		function () {
			$(this).addClass('hover');
		},
		function () {
			$(this).removeClass('hover');
		});
} else {
	submenu.click(function (e) {
		e.preventDefault();
		$(this).toggleClass('hover');
	})
}

//---------------------------------------------
// Burger Active
//---------------------------------------------

$(function () {
	const burger = $('.header-burger-js');
	const burgerMenu = $('.header-menu-js');
	burger.click(function () {
		burger.toggleClass('active');
		burgerMenu.toggleClass('active');
		$('.page').toggleClass('active');
		$('.section-js').toggleClass('active');

	})
})

//---------------------------------------------
// search Active
//---------------------------------------------

$(function () {
	const searchBtn = $('.search-btn-js');
	const searchInput = $('.header-search-js');
	const searchClose = $('.search-close-js');

	searchBtn.click(function () {
		searchBtn.toggleClass('active');
		searchInput.toggleClass('active');

	})
	searchClose.click(function () {
		searchBtn.removeClass('active');
		searchInput.removeClass('active');

	})
})