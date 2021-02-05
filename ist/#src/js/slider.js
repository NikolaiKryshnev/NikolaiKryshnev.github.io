//!SLIDER
//---------------------------------------------------------------------------------------------------------------------------------------


var $status = $('.number-js');
var $slickElement = $('.ban-slider--js');

$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
	 //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
	 var i = (currentSlide ? currentSlide : 0) + 1;
	 $status.html(`${i}<span class="numberSum">/${slick.slideCount}</span>`);
});

$slickElement.slick({
	dots: false,
	slidesToShow: 1,
	arrows: true,
	speed: 1000,
	slidesToShow: 1,
	slidesToScroll: 1,
	// autoplay: true,
	prevArrow: '<div class="slick-arrow slick-arrow__left"><svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.8462 2C8.73231 5.168 4.65128 9.32 3 11M3 11L11.8462 20M3 11H26" stroke="#26242D" stroke-width="3"/></svg></div>',
	nextArrow: '<div class="slick-arrow slick-arrow__right"><svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.1538 2C17.2677 5.168 21.3487 9.32 23 11M23 11L14.1538 20M23 11H0" stroke="#26242D" stroke-width="3"/></svg></div>',
	responsive: [
		{
			breakpoint: 992,
			settings: {
				arrows: true,
				prevArrow: '<div class="slick-arrow slick-arrow__left"><svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.8462 2C8.73231 5.168 4.65128 9.32 3 11M3 11L11.8462 20M3 11H26" stroke="#26242D" stroke-width="3"/></svg></div>',
				nextArrow: '<div class="slick-arrow slick-arrow__right"><svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.1538 2C17.2677 5.168 21.3487 9.32 23 11M23 11L14.1538 20M23 11H0" stroke="#26242D" stroke-width="3"/></svg></div>',
			}
		},
	],
});

// $('.ban-slider--js').on('afterChange', function (event, slick, currentSlide, nextSlide) {
// 	currentSlide + 1;
// 	if (currentSlide <= 8) {
// 		console.log(slick);
		
// 		let number_slider_nav_index = (currentSlide + 1)
// 		$('.number-js').text('0' + number_slider_nav_index);
// 	} else {
// 		$('.number-js').text(currentSlide + 1);
// 	}
// });

function arrowApppend(arrow, arrowBlock) {
	arrowBlock.append(arrow);
}
$(document).ready(function () {
	arrowApppend($('.slick-arrow'), $('.arrow-block---js'))
	// if ($(window).width() <= 991) {
	// 	arrowApppend($('.bgSlider-js .slick-arrow'), $('.ban-slider__arrow--js'))
	// }
});

// $('.slider-three').slick({
// 	infinite: true,
// 	dots: false,
// 	slidesToShow: 3,
// 	slidesToScroll: 1,
// 	arrows: true,
// 	prevArrow: '<div class="slick-arrow slick-arrow__left">SVG</div>',
// 	nextArrow: '<div class="slick-arrow slick-arrow__right">SVG</div>',
// 	responsive: [
// 		{
// 			breakpoint: 992,
// 			settings: {
// 				// arrows: false,
// 				slidesToShow: 2,
// 			}
// 		},
// 	]
// });