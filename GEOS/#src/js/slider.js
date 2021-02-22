//!SLIDER
//---------------------------------------------------------------------------------------------------------------------------------------
$(document).ready(function () {
	function appendArrow(par, left, right) {
		par.append(left);
		par.append(right);
	}

	var $status = $('.number-js');
	var $slickElement = $('.ban-slider--js');

	$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		//currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
		var i = (currentSlide ? currentSlide : 0) + 1;
		if (i <= 9 && slick.slideCount <= 9) {
			$status.html(`<span>0${i}</span>/0${slick.slideCount}`);
		} else {
			$status.html(`${i}<span class="numberSum">/${slick.slideCount}</span>`);
		}
		$('.banSlider-box__loupe').off();
		$('.banSlider-box__loupe').on('click', function (e) {
			e.preventDefault();
			$.fancybox.open($(`[data-fancybox='fancybox-${i}']`).fancybox());
		})

	});


	$slickElement.slick({
		infinite: false,
		dots: false,
		swipe: false,
		arrows: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		// autoplay: true,
		prevArrow: '<div class="slick-arrow slick-arrow__left"><svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.30322 8.117H21.0001" stroke="#1D1D1D" stroke-width="3"/><path d="M9.42435 1.69263L3 8.11692L9.42435 14.5413" stroke="#1D1D1D" stroke-width="3"/></svg></div>',
		nextArrow: '<div class="slick-arrow slick-arrow__right"><svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6968 8.117H-9.35255e-05" stroke="#1D1D1D" stroke-width="3"/><path d="M11.5756 1.69263L18 8.11692L11.5756 14.5413" stroke="#1D1D1D" stroke-width="3"/></svg></div>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					arrows: true,
					prevArrow: '<div class="slick-arrow slick-arrow__left"><svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.30322 8.117H21.0001" stroke="#1D1D1D" stroke-width="3"/><path d="M9.42435 1.69263L3 8.11692L9.42435 14.5413" stroke="#1D1D1D" stroke-width="3"/></svg></div>',
					nextArrow: '<div class="slick-arrow slick-arrow__right"><svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6968 8.117H-9.35255e-05" stroke="#1D1D1D" stroke-width="3"/><path d="M11.5756 1.69263L18 8.11692L11.5756 14.5413" stroke="#1D1D1D" stroke-width="3"/></svg></div>',
				}
			},
		],
	});

	appendArrow($('.banSlider-box__nav'), $('.banSlider .slick-arrow__left'), $('.banSlider .slick-arrow__right'))
	$(window).resize(function () {
		appendArrow($('.banSlider-box__nav'), $('.banSlider .slick-arrow__left'), $('.banSlider .slick-arrow__right'))
	});


	$('.portfolio-silder--js').slick({
		dots: false,
		infinite: false,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 4,
		autoplay: false,
		autoplaySpeed: 8000,
		loop: true,
		arrows: true,
		prevArrow: '<div class="slick-arrow slick-arrow__left"><svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.30322 8.117H21.0001" stroke="#1D1D1D" stroke-width="3"/><path d="M9.42435 1.69263L3 8.11692L9.42435 14.5413" stroke="#1D1D1D" stroke-width="3"/></svg></div>',
		nextArrow: '<div class="slick-arrow slick-arrow__right"><svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6968 8.117H-9.35255e-05" stroke="#1D1D1D" stroke-width="3"/><path d="M11.5756 1.69263L18 8.11692L11.5756 14.5413" stroke="#1D1D1D" stroke-width="3"/></svg></div>',
		responsive: [
			{
				breakpoint: 1200,
				settings: {	
					prevArrow: '<div class="slick-arrow slick-arrow__left"><svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.30322 8.117H21.0001" stroke="#1D1D1D" stroke-width="3"/><path d="M9.42435 1.69263L3 8.11692L9.42435 14.5413" stroke="#1D1D1D" stroke-width="3"/></svg></div>',
					nextArrow: '<div class="slick-arrow slick-arrow__right"><svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6968 8.117H-9.35255e-05" stroke="#1D1D1D" stroke-width="3"/><path d="M11.5756 1.69263L18 8.11692L11.5756 14.5413" stroke="#1D1D1D" stroke-width="3"/></svg></div>',
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 992,
				settings: {	
					prevArrow: '<div class="slick-arrow slick-arrow__left"><svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.30322 8.117H21.0001" stroke="#1D1D1D" stroke-width="3"/><path d="M9.42435 1.69263L3 8.11692L9.42435 14.5413" stroke="#1D1D1D" stroke-width="3"/></svg></div>',
					nextArrow: '<div class="slick-arrow slick-arrow__right"><svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6968 8.117H-9.35255e-05" stroke="#1D1D1D" stroke-width="3"/><path d="M11.5756 1.69263L18 8.11692L11.5756 14.5413" stroke="#1D1D1D" stroke-width="3"/></svg></div>',
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	});
	appendArrow($('.portfolio .section-title'), $('.portfolio .slick-arrow__left'), $('.portfolio .slick-arrow__right'))
	$(window).resize(function () {
		appendArrow($('.portfolio .section-title'), $('.portfolio .slick-arrow__left'), $('.portfolio .slick-arrow__right'))
	});

});