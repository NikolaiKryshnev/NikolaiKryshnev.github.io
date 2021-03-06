//!SLIDER
//---------------------------------------------------------------------------------------------------------------------------------------

$('.slider-One').slick({
	dots: false,
	slidesToShow: 1,
	arrows: true,
	prevArrow: '<div class="slick-arrow slick-arrow__left">SVG</div>',
	nextArrow: '<div class="slick-arrow slick-arrow__right">SVG</div>',
	responsive: [
		{
			breakpoint: 992,
			settings: {
				arrows: true,
				prevArrow: '<div class="slick-arrow slick-arrow__left">SVG</div>',
				nextArrow: '<div class="slick-arrow slick-arrow__right">SVG</div>',
			}
		},
	],
});

$('.slider-three').slick({
	infinite: true,
	dots: false,
	slidesToShow: 3,
	slidesToScroll: 1,
	arrows: true,
	prevArrow: '<div class="slick-arrow slick-arrow__left">SVG</div>',
	nextArrow: '<div class="slick-arrow slick-arrow__right">SVG</div>',
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