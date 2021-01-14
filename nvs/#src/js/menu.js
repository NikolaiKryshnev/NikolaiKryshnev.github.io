// ----------------------------------------------
// BURGER MENU
// ----------------------------------------------

$(function () {
	let burger = $('.burger-js');
	let burgerMenu = $('.header-menu-js');
	let main = $('.main');

	burger.click(function () {
		burger.toggleClass('active');
		burgerMenu.toggleClass('active');
		main.toggleClass('active');
	})
	main.on('click', function (e) {
		if (e.target == this) {
			burger.removeClass('active');
			burgerMenu.removeClass('active');
			main.removeClass('active');

		}

	});
})