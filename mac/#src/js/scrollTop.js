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

$(document).ready(function () {
	$(".header-menu__ul").on("click", "a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id = $(this).attr('href'),

			//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;

		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({ scrollTop: top }, 500);
	});
});
