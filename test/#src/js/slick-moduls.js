//---------------------------------------------
//  Slick slider
//---------------------------------------------
$('.tab-content__item').slick({
	dots: false,
	infinite: true,
	speed: 300,
	slidesToShow: 4,
	slidesToScroll: 4,
	autoplay: true,
	autoplaySpeed: 5000,
	loop: true,
	arrows: true,
	prevArrow: '<svg class="slick-arrow slick-arrow__left" width="17" height="30" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 1L2 15L16 29" stroke="#383838" stroke-width="2"/></svg>',
	nextArrow: '<svg class="slick-arrow slick-arrow__right" width="17" height="30" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L15 15L1 29" stroke="#383838" stroke-width="2"/></svg>',
	responsive: [
		{
			breakpoint: 1175,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			}
		},
		{
			breakpoint: 800,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				arrows: false,
			}
		}
	]
});


$('.reviews-slider-js').slick({
	dots: false,
	slidesToShow: 1,
	loop: true,
	arrows: true,
	prevArrow: '<div class="reviews-arrow reviews-arrow__left"><svg  class="  " width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 1L2 8L9 15" stroke="white" stroke-width="2"/></svg></div>',
	nextArrow: '<div class="reviews-arrow reviews-arrow__right"><svg class=" " width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L8 8L1 15" stroke="white" stroke-width="2"/></svg></div>',
	responsive: [
		{
			breakpoint: 527,
			settings: {
				prevArrow: '<div class="reviews-arrow reviews-arrow__left"><svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.90914 1.54544L1.45459 5.99999L5.90914 10.4545" stroke="white" stroke-width="2"/></svg></div>',
				nextArrow: '<div class="reviews-arrow reviews-arrow__right"><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.54545 1.54544L6 5.99999L1.54545 10.4545" stroke="white" stroke-width="2"/></svg>	</div>',

			}
		},
	]
});

$('.corus-js').slick({
	dots: false,
	slidesToShow: 1,
	loop: true,
	arrows: false,
	prevArrow: '<div class="reviews-arrow reviews-arrow__left"><svg  class="  " width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 1L2 8L9 15" stroke="white" stroke-width="2"/></svg></div>',
	nextArrow: '<div class="reviews-arrow reviews-arrow__right"><svg class=" " width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L8 8L1 15" stroke="white" stroke-width="2"/></svg></div>',
	responsive: [
		{
			breakpoint: 527,
			settings: {
				prevArrow: '<div class="reviews-arrow reviews-arrow__left"><svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.90914 1.54544L1.45459 5.99999L5.90914 10.4545" stroke="white" stroke-width="2"/></svg></div>',
				nextArrow: '<div class="reviews-arrow reviews-arrow__right"><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.54545 1.54544L6 5.99999L1.54545 10.4545" stroke="white" stroke-width="2"/></svg>	</div>',

			}
		},
	]
});

// Cart slider
$('.slider-big-js').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	asNavFor: '.slider-nav-js'
});

$('.slider-nav-js').slick({
	slidesToShow: 3,
	slidesToScroll: 3,
	asNavFor: '.slider-big-js',
	dots: false,
});

// recom slider

$('.recom-js').slick({
	dots: false,
	infinite: true,
	speed: 300,
	slidesToShow: 3,
	slidesToScroll: 3,
	autoplay: true,
	autoplaySpeed: 5000,
	loop: true,
	arrows: true,
	prevArrow: '<svg class="slick-arrow slick-arrow__left" width="17" height="30" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 1L2 15L16 29" stroke="#383838" stroke-width="2"/></svg>',
	nextArrow: '<svg class="slick-arrow slick-arrow__right" width="17" height="30" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L15 15L1 29" stroke="#383838" stroke-width="2"/></svg>',
	responsive: [
		{
			breakpoint: 800,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				arrows: false,
			}
		}
	]
});

// recom slider

$('.personSlider-js').slick({
	dots: false,
	infinite: true,
	speed: 300,
	slidesToShow: 3,
	slidesToScroll: 3,
	autoplay: true,
	autoplaySpeed: 5000,
	loop: true,
	arrows: true,
	prevArrow: '<svg class="slick-arrow slick-arrow__left" width="17" height="30" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 1L2 15L16 29" stroke="#383838" stroke-width="2"/></svg>',
	nextArrow: '<svg class="slick-arrow slick-arrow__right" width="17" height="30" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L15 15L1 29" stroke="#383838" stroke-width="2"/></svg>',
	responsive: [
		{
			breakpoint: 800,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});