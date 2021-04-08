//!smooth scroll top
//---------------------------------------------------------------------------------------------------------------------------------------

let headerHeight = $('.header-menu--js').height();

$(function () {
		$('.scrollTop').click(function () {
			$("html, body").animate({
				scrollTop: 0
			}, 1000);
		})
})

$(window).scroll(function () {
	if ($(this).scrollTop() > headerHeight) {
		$('.scrollTop').fadeIn();
	}
	else {
		$('.scrollTop').fadeOut();
	}
});

$(".header-menu__ul").on("click", "a", function (event) {
	event.preventDefault();
	let id = $(this).attr('href'),
		top = $(id).offset().top;
	$('body,html').animate({ scrollTop: top }, 500);
});