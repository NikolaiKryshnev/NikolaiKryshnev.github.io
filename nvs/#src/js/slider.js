$('.bgSlider-js').slick({
	dots: false,
	slidesToShow: 1,
	arrows: true,
	prevArrow: '<div class="slick-arrow slick-arrow__left"><svg width="24" height="42" viewBox="0 0 24 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 2L3 21L22 40" stroke="#F7F7F7" stroke-width="3"/></svg></div>',
	nextArrow: '<div class="slick-arrow slick-arrow__right"><svg width="24" height="42" viewBox="0 0 24 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 2L3 21L22 40" stroke="#F7F7F7" stroke-width="3"/></svg></div>',
	responsive: [
		{
			breakpoint: 992,
			settings: {
				arrows: true,
				prevArrow: '<div class="slick-arrow slick-arrow__left"><svg width="33" height="24" viewBox="0 0 33 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M33 12H2M2 12L12.5 1.5M2 12L12.5 22.5" stroke="white" stroke-width="2"/></svg></div>',
				nextArrow: '<div class="slick-arrow slick-arrow__right"><svg width="33" height="24" viewBox="0 0 33 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M33 12H2M2 12L12.5 1.5M2 12L12.5 22.5" stroke="white" stroke-width="2"/></svg></div>',
			}
		},
	],
});

if ($(window).width() >= 726) {
	$('.news-slider--js').slick({
		infinite: true,
		dots: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: '<div class="slick-arrow slick-arrow__left"><svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.53846 1L2 7.5M2 7.5L8.53846 14M2 7.5H19" stroke="#353535" stroke-width="2"/></svg></div>',
		nextArrow: '<div class="slick-arrow slick-arrow__right"><svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.84615 1L16 7.5M16 7.5L9.84615 14M16 7.5H0" stroke="#353535" stroke-width="2"/></svg></div>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					// arrows: false,
					slidesToShow: 2,
				}
			},
		]
	});
}


$('.reviews-slider--js').slick({
	dots: false,
	slidesToShow: 1,
	arrows: true,
	prevArrow: '<div class="slick-arrow slick-arrow__left slick-arrow--js"><svg width="24" height="42" viewBox="0 0 24 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 2L3 21L22 40" stroke="#F7F7F7" stroke-width="7"/></svg></div>',
	nextArrow: '<div class="slick-arrow slick-arrow__right slick-arrow--js"><svg width="24" height="42" viewBox="0 0 24 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 2L3 21L22 40" stroke="#F7F7F7" stroke-width="7"/></svg></div>',
});

$('.reviews-slider--js').on('afterChange', function (event, slick, currentSlide, nextSlide) {
	currentSlide + 1;
	if (currentSlide <= 8) {
		let number_slider_nav_index = (currentSlide + 1)
		$('.number-js').text('0' + number_slider_nav_index);
	} else {
		$('.number-js').text(currentSlide + 1);
	}
});

function arrowApppend(arrow, arrowBlock) {
	arrowBlock.append(arrow);
}
$(document).ready(function () {
	arrowApppend($('.slick-arrow--js'), $('.arrow-block---js'))
	if ($(window).width() <= 991) {
		arrowApppend($('.bgSlider-js .slick-arrow'), $('.ban-slider__arrow--js'))
	}
});
