//Настройки по выводу слайдов в зависимости от разрешения экрана
let scrollCount = null;
let scroll = null;

let slider = $('.slider-js');
if ($(window).width() > 526) {
	slider.slick({
		dots: false,
		infinite: false,
		arrows: true,
		prevArrow: '<div class="slider-control slider-control__left "><img src="./img/icons/icons.svg#btn-arrow_top" alt=""></div>',
		nextArrow: '<div class="slider-control slider-control__right slider-control__show "><img src="./img/icons/icons.svg#btn-arrow_bottom" alt=""></div>',
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		vertical: true,
		dots: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
					arrows: true,
					prevArrow: '<div class="slider-control slider-control__left "><img src="./img/icons/icons.svg#btn-arrow_top" alt=""></div>',
					nextArrow: '<div class="slider-control slider-control__right slider-control__show "><img src="./img/icons/icons.svg#btn-arrow_bottom" alt=""></div>',

				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: true,
					prevArrow: '<div class="slider-control slider-control__left "><img src="./img/icons/icons.svg#btn-arrow_top" alt=""></div>',
					nextArrow: '<div class="slider-control slider-control__right slider-control__show "><img src="./img/icons/icons.svg#btn-arrow_bottom" alt=""></div>',

				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

}

// slider.on('wheel', (function (e) {
// 	e.preventDefault();

// 	clearTimeout(scroll);
// 	scroll = setTimeout(function () { scrollCount = 0; }, 200);
// 	if (scrollCount) return 0;
// 	scrollCount = 1;

// 	if (e.originalEvent.deltaY < 0) {
// 		$(this).slick('slickNext');
// 	} else {
// 		$(this).slick('slickPrev');
// 	}
// }));

slider.on('afterChange', function (event, slick, currentSlide, nextSlide) {

	currentSlide + 1;
	if (currentSlide <= 8) {
		let number_slider_nav_index = (currentSlide + 1)

		$('.slider-numbers__active-js').text('0' + number_slider_nav_index);
	} else {
		$('.slider-numbers__active-js').text(currentSlide + 1);
	}
});
function numberSum() {
	let numberSumSlider = $('[data-slick-index]').length;
	if (numberSumSlider <= 9) {
		$('.slider-numbers__total').text('0' + numberSumSlider);
	} else {
		$('.slider-numbers__total').text(numberSumSlider);

	}
}
numberSum()







