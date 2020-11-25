$('.container--works').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	prevArrow: '<svg class="slick-arrow slick-arrow__left" width="17" height="30" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 1L2 15L16 29" stroke="#383838" stroke-width="2"/></svg>',
	nextArrow: '<svg class="slick-arrow slick-arrow__right" width="17" height="30" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L15 15L1 29" stroke="#383838" stroke-width="2"/></svg>',
	responsive: [
		{
			breakpoint: 991,
			settings: {
				prevArrow: '<div class="slick-arrow__block"><svg class="slick-arrow slick-arrow__left" width="17" height="30" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 1L2 15L16 29" stroke="#383838" stroke-width="2"/></svg></div>',
				nextArrow: '<div class="slick-arrow__block"><svg class="slick-arrow slick-arrow__right" width="17" height="30" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L15 15L1 29" stroke="#383838" stroke-width="2"/></svg></div>',
			}
		},
		{
			breakpoint: 600,
			settings: {
				prevArrow: '<div class="slick-arrow__block"><svg class="slick-arrow slick-arrow__left" width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="23" cy="23" r="23" fill="url(#paint0_linear)"/><path d="M27.4341 13.3013L17.7354 23.0001L27.4341 32.6989" stroke="white" stroke-width="3"/><defs><linearGradient id="paint0_linear" x1="17.8565" y1="-12.7778" x2="11.0423" y2="61.8507" gradientUnits="userSpaceOnUse"><stop stop-color="#FED976"/><stop offset="1" stop-color="#FEB54A"/></linearGradient></defs></svg>',
				nextArrow: '<div class="slick-arrow__block"><svg class="slick-arrow slick-arrow__right" width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg"><circle r="23" transform="matrix(-1 0 0 1 23.6953 23)" fill="url(#paint0_linear)"/><path d="M19.2612 13.3013L28.96 23.0001L19.2612 32.6989" stroke="white" stroke-width="3"/><defs><linearGradient id="paint0_linear" x1="17.8565" y1="-12.7778" x2="11.0423" y2="61.8507" gradientUnits="userSpaceOnUse"><stop stop-color="#FED976"/><stop offset="1" stop-color="#FEB54A"/></linearGradient></defs></svg>',
			}
		}
	]});


$('.sliderWork-js').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	fade: false,
	asNavFor: '.sliderWorkNav-js',
	arrows: false,
});

$('.sliderWorkNav-js').slick({
	slidesToShow: 3,
	slidesToScroll: 3,
	asNavFor: '.sliderWork-js',
	dots: false,
	focusOnSelect: true
});


$('.sliderReview-js').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	prevArrow: '<div class="slick-arrow__block"><svg class="slick-arrow slick-arrow__left" width="17" height="30" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 1L2 15L16 29" stroke="#383838" stroke-width="2"/></svg></div>',
	nextArrow: '<div class="slick-arrow__block"><svg class="slick-arrow slick-arrow__right" width="17" height="30" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L15 15L1 29" stroke="#383838" stroke-width="2"/></svg></div>',
});

$('.sliderReview-js').on('afterChange', function(event, slick, currentSlide, nextSlide){
	currentSlide+1;
	if(currentSlide <= 8){
		 let number_slider_nav_index = (currentSlide +1)
		 $('.sliderNumber-js').text('0'+number_slider_nav_index);
	}else{
		 $('.sliderNumber-js').text(currentSlide +1);
	}
});