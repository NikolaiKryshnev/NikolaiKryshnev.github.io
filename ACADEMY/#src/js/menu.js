//---------------------------------------------
// Burger Active
//---------------------------------------------
$(function () {
	const burger = $('.header-burger-js');
	const burgerMenu = $('.header-menu-js');
	burger.click(function () {
		burger.toggleClass('active');
		burgerMenu.toggleClass('active');
		$('body').toggleClass('hidden');

	})
})


//---------------------------------------------
// Scroll
//---------------------------------------------

$('a[href*="#"]').on('click', function (e) {
	e.preventDefault();
  
	$('html, body').animate({
	  scrollTop: $($(this).attr('href')).offset().top
	}, 500, 'linear');
 });
