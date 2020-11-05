//<slickModul>---------------------------------------

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

$('.command-slider-js').slick({
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
			breakpoint: 1270,
			settings: {
				prevArrow: '<svg class="slick-arrow slick-arrow__left" width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg"><circle r="29" transform="matrix(-1 0 0 1 29 29)" fill="url(#paint0_linear)"/><path d="M33 19L23 29L33 39" stroke="white" stroke-width="3"/><defs><linearGradient id="paint0_linear" x1="7.41639" y1="4.83333" x2="75.1249" y2="9.05645" gradientUnits="userSpaceOnUse"><stop offset="0.0119048" stop-color="#FAC336"/><stop offset="1" stop-color="#F6A103"/></linearGradient></defs></svg>',
				nextArrow: '<svg class="slick-arrow slick-arrow__right"  width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="29" cy="29" r="29" fill="url(#paint0_linear)"/><path d="M25 19L35 29L25 39" stroke="white" stroke-width="3"/><defs><linearGradient id="paint0_linear" x1="7.41639" y1="4.83333" x2="75.1249" y2="9.05645" gradientUnits="userSpaceOnUse"><stop offset="0.0119048" stop-color="#FAC336"/><stop offset="1" stop-color="#F6A103"/></linearGradient></defs></svg>',
			}
		},
		{
			breakpoint: 991,
			settings: {
				prevArrow: '<svg class="slick-arrow slick-arrow__left" width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg"><circle r="29" transform="matrix(-1 0 0 1 29 29)" fill="url(#paint0_linear)"/><path d="M33 19L23 29L33 39" stroke="white" stroke-width="3"/><defs><linearGradient id="paint0_linear" x1="7.41639" y1="4.83333" x2="75.1249" y2="9.05645" gradientUnits="userSpaceOnUse"><stop offset="0.0119048" stop-color="#FAC336"/><stop offset="1" stop-color="#F6A103"/></linearGradient></defs></svg>',
				nextArrow: '<svg class="slick-arrow slick-arrow__right"  width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="29" cy="29" r="29" fill="url(#paint0_linear)"/><path d="M25 19L35 29L25 39" stroke="white" stroke-width="3"/><defs><linearGradient id="paint0_linear" x1="7.41639" y1="4.83333" x2="75.1249" y2="9.05645" gradientUnits="userSpaceOnUse"><stop offset="0.0119048" stop-color="#FAC336"/><stop offset="1" stop-color="#F6A103"/></linearGradient></defs></svg>',
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 600,
			settings: {
				prevArrow: '<svg class="slick-arrow slick-arrow__left" width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg"><circle r="29" transform="matrix(-1 0 0 1 29 29)" fill="url(#paint0_linear)"/><path d="M33 19L23 29L33 39" stroke="white" stroke-width="3"/><defs><linearGradient id="paint0_linear" x1="7.41639" y1="4.83333" x2="75.1249" y2="9.05645" gradientUnits="userSpaceOnUse"><stop offset="0.0119048" stop-color="#FAC336"/><stop offset="1" stop-color="#F6A103"/></linearGradient></defs></svg>',
				nextArrow: '<svg class="slick-arrow slick-arrow__right"  width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="29" cy="29" r="29" fill="url(#paint0_linear)"/><path d="M25 19L35 29L25 39" stroke="white" stroke-width="3"/><defs><linearGradient id="paint0_linear" x1="7.41639" y1="4.83333" x2="75.1249" y2="9.05645" gradientUnits="userSpaceOnUse"><stop offset="0.0119048" stop-color="#FAC336"/><stop offset="1" stop-color="#F6A103"/></linearGradient></defs></svg>',
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}
	]
});


//</slickModul>---------------------------------------
