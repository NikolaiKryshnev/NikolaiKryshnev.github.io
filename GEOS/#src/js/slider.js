//!SLIDER
//---------------------------------------------------------------------------------------------------------------------------------------
function numberSlick($status, $slickElement) {
	$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		//currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
		var i = (currentSlide ? currentSlide : 0) + 1;
		if (i <= 9 && slick.slideCount <= 9) {
			$status.html(`<span>0${i}</span>/0${slick.slideCount}`);
		} else {
			$status.html(`${i}<span class="numberSum">/${slick.slideCount}</span>`);
		}
		$('.loupe--js').off();
		$('.loupe--js').on('click', function (e) {
			e.preventDefault();
			if ($('.banCart-slider').hasClass('slick-slide') == true) {
				$.fancybox.open($('.banCart-imgBg--js').fancybox({}));

			} else if ($('.banSlider').hasClass('slick-slide') == true) {
				if ($('.banSlider').length > 0) {
					$.fancybox.open($(`[data-fancybox='fancybox-${i}']`).fancybox({}));

				} else {
					$.fancybox.open($(`[data-fancybox='fancybox-1']`).fancybox({}));

				}
			}

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
	appendBlock($('.blockSlider-arrow--js'), $('.ban-slider--js .slick-arrow__left'));
	appendBlock($('.blockSlider-arrow--js'), $('.ban-slider--js .slick-arrow__right'));

}

$(document).ready(function () {
	numberSlick($('.number-js'), $('.ban-slider--js'));
	function sliderPortfolio() {
		$('.portfolio-silder--js').slick({
			dots: false,
			infinite: false,
			speed: 300,
			slidesToShow: 2,
			slidesToScroll: 2,
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
	}
	if ($(window).width() > 1200 && $('.portfolio-block').length > 2) {
		sliderPortfolio()
	} else if ($(window).width() < 992 && $('.portfolio-block').length > 1) {
		sliderPortfolio()

	}

	appendBlock($('.portfolio .section-title'), $('.portfolio .slick-arrow__right'))
	appendBlock($('.portfolio .section-title'), $('.portfolio .slick-arrow__left'))

	$('.salon-silder--js').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 2,
		slidesToScroll: 2,
		autoplay: false,
		autoplaySpeed: 10000,
		loop: true,
		arrows: false,
		prevArrow: '<div class="slick-arrow slick-arrow__left"><svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.30322 8.117H21.0001" stroke="#1D1D1D" stroke-width="3"/><path d="M9.42435 1.69263L3 8.11692L9.42435 14.5413" stroke="#1D1D1D" stroke-width="3"/></svg></div>',
		nextArrow: '<div class="slick-arrow slick-arrow__right"><svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6968 8.117H-9.35255e-05" stroke="#1D1D1D" stroke-width="3"/><path d="M11.5756 1.69263L18 8.11692L11.5756 14.5413" stroke="#1D1D1D" stroke-width="3"/></svg></div>',
		responsive: [
			{
				breakpoint: 726,
				settings: {
					prevArrow: '<div class="slick-arrow slick-arrow__left"><svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.30322 8.117H21.0001" stroke="#1D1D1D" stroke-width="3"/><path d="M9.42435 1.69263L3 8.11692L9.42435 14.5413" stroke="#1D1D1D" stroke-width="3"/></svg></div>',
					nextArrow: '<div class="slick-arrow slick-arrow__right"><svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6968 8.117H-9.35255e-05" stroke="#1D1D1D" stroke-width="3"/><path d="M11.5756 1.69263L18 8.11692L11.5756 14.5413" stroke="#1D1D1D" stroke-width="3"/></svg></div>',
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 1081,
				settings: {
					prevArrow: '<div class="slick-arrow slick-arrow__left"><svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.30322 8.117H21.0001" stroke="#1D1D1D" stroke-width="3"/><path d="M9.42435 1.69263L3 8.11692L9.42435 14.5413" stroke="#1D1D1D" stroke-width="3"/></svg></div>',
					nextArrow: '<div class="slick-arrow slick-arrow__right"><svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6968 8.117H-9.35255e-05" stroke="#1D1D1D" stroke-width="3"/><path d="M11.5756 1.69263L18 8.11692L11.5756 14.5413" stroke="#1D1D1D" stroke-width="3"/></svg></div>',
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	});
});

function attrDataSlider() {
	for (let i = 0; i < $('.views-line').length; i++) {
		const el = $('.views-line')[i];
		$(el).children('.views-slider--js').attr('data-sliderView', `sliderViews-${i + 1}`);
	}
}
function imgFancybox() {
	for (let i = 0; i < $('.views-col__img').length; i++) {
		const el = $('.views-col__img')[i];
		$(el).attr('data-imgFancybox', `imgFancybox-${i + 1}`).fancybox({});
		$(`[data-imgFancybox='imgFancybox-${i}']`).fancybox({
		})
	}
}

function showSliderViews() {
	let slider = $('.views-slider--js');
	for (let i = 0; i < slider.length; i++) {
		const el = slider[i];
		let dataSliderNumber = $(`[data-sliderView=sliderViews-${i + 1}]`),
			productBlock = $(el).children('.views-col');

		if (dataSliderNumber.parents('.js-tab-content').hasClass('active')) {
			// dataSliderNumber.filter('.slick-initialized').slick('unslick');

			if (productBlock.length > 6 && $(window).width() > 727) {
				sliderViews(dataSliderNumber, 6, productBlock.length)
			} else if (productBlock.length > 4 && $(window).width() < 727 && $(window).width() > 527) {
				sliderViews(dataSliderNumber, 4, productBlock.length)
			} else if (productBlock.length > 2 && $(window).width() < 527) {
				sliderViews(dataSliderNumber, 2, productBlock.length)
			}
		} else {
			dataSliderNumber.filter('.slick-initialized').slick('unslick');
		}

	}
}

function sliderViews(slider, colSlider, realcolSlid) {
	let slArrParBk = $(slider).siblings('.views-line__title');
	$(slider).filter('.slick-initialized').slick('unslick');
	slider.slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: colSlider,
		slidesToScroll: colSlider,
		autoplay: false,
		autoplaySpeed: 10000,
		loop: true,
		arrows: true,
		prevArrow: '<div class="slick-arrow slick-arrow__left"><svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.30322 8.117H21.0001" stroke="#1D1D1D" stroke-width="3"/><path d="M9.42435 1.69263L3 8.11692L9.42435 14.5413" stroke="#1D1D1D" stroke-width="3"/></svg></div>',
		nextArrow: '<div class="slick-arrow slick-arrow__right"><svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6968 8.117H-9.35255e-05" stroke="#1D1D1D" stroke-width="3"/><path d="M11.5756 1.69263L18 8.11692L11.5756 14.5413" stroke="#1D1D1D" stroke-width="3"/></svg></div>',

	});
	if (slArrParBk.length > 0) {
		slArrParBk.children('.block-arrows').remove()
		slArrParBk.append(`<div class="block-arrows"></div>`);
		let viewsBlockArr = slArrParBk.children('.block-arrows');

		appendBlock(viewsBlockArr, $(slider).children('.slick-arrow__left'));
		appendBlock(viewsBlockArr, $(slider).children('.slick-arrow__right'));
	} else {
		for (let i = 0; i < $(slider).parents().find('.section-title').length; i++) {
			const el = $(slider).parents().find('.section-title')[i];
			if ($(el).parents().hasClass('section-recom') == true) {
				$(el).append(`<div class="block-arrows"></div>`);

				appendBlock($(el).children('.block-arrows'), $(slider).children('.slick-arrow__left'));
				appendBlock($(el).children('.block-arrows'), $(slider).children('.slick-arrow__right'));

			} else if ($(el).parents().hasClass('shares') == true) {
				$(el).append(`<div class="sharesNumber-js"></div><div class="block-arrows"></div>`);

				appendBlock($(el).children('.block-arrows'), $(slider).children('.slick-arrow__left'));
				appendBlock($(el).children('.block-arrows'), $(slider).children('.slick-arrow__right'));
			}
		}
	}
}

$(document).ready(function () {
	attrDataSlider()
	showSliderViews()
	imgFancybox()

	// dataAttrBlock($('.banCart-imgBg--js'), 'fancybox', 'fancybox')
	dataAttrBlock($('.banCart-slider'), 'fancyboxSliderBox', 'fancyboxSliderBox')

	function getAttr() {
		// $(`[data-imgFancybox='imgFancybox-${i}']`)
		for (let i = 0; i < $('.banCart-imgBg--js').length; i++) {
			const el = $('.banCart-imgBg--js')[i];
			$(`[data-fancyboxsliderbox='fancyboxSliderBox-${i + 1}']`).css({ 'background-image': `url(${$(el).attr('href')})` })
		}

	}
	getAttr()

});
// $(window).resize(function () {
// 	showSliderViews()
// });


$('.js-tab-trigger').click(function () {
	var id = $(this).attr('data-tab'),
		content = $('.js-tab-content[data-tab="' + id + '"]');

	$('.js-tab-trigger.active').removeClass('active');
	$(this).addClass('active');

	$('.js-tab-content.active').removeClass('active');
	content.addClass('active');

	showSliderViews();
});

$(function () {
	if ($(window).width() > 991 && $('.recom-slider--js .product-col').length > 4) {
		sliderViews($('.recom-slider--js'), 4);
	} else if ($(window).width() > 526 && $(window).width() < 991 && $('.recom-slider--js .product-col').length > 2) {
		sliderViews($('.recom-slider--js'), 2);

	} else if ($(window).width() < 526 && $('.recom-slider--js .product-col').length > 1) {
		sliderViews($('.recom-slider--js'), 1);
	}
})

sliderViews($('.shares--js'), 1)

