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