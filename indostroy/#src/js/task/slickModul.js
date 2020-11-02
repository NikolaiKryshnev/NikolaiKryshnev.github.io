$('.bgSlider-js').slick({
	dots: true,
	slidesToShow: 1,
	arrows: true,
	prevArrow: '<svg <svg class="slick-arrow slick-arrow__left" width="19" height="32" viewBox="0 0 19 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 2L3 16L17 30" stroke="white" stroke-width="3"/></svg>',
	nextArrow: '<svg class="slick-arrow slick-arrow__right" width="19" height="32" viewBox="0 0 19 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2L16 16L2 30" stroke="white" stroke-width="3"/></svg>',
	responsive: [
		{
			breakpoint: 991,
			settings: {
				arrows: false,
			}
		},
	]
 });