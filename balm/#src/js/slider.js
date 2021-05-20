//!SLIDER
//---------------------------------------------------------------------------------------------------------------------------------------

$('.banSlider-js').slick({
	dots: true,
	slidesToShow: 1,
	arrows: true,
	autoplay: true,
	autoplaySpeed: 4000,
	speed: 1000,
	prevArrow: '<div class="slick-arrow slick-arrow__left"><svg width="21" height="9" viewBox="0 0 21 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.773678 4.1357C0.578417 4.33097 0.578417 4.64755 0.773678 4.84281L3.95566 8.02479C4.15092 8.22005 4.4675 8.22005 4.66277 8.02479C4.85803 7.82953 4.85803 7.51295 4.66277 7.31768L1.83434 4.48926L4.66277 1.66083C4.85803 1.46557 4.85803 1.14899 4.66277 0.953724C4.4675 0.758462 4.15092 0.758462 3.95566 0.953724L0.773678 4.1357ZM20.7402 3.98926H1.12723V4.98926H20.7402V3.98926Z" fill="#7C7C7C"/></svg></div>',
	nextArrow: '<div class="slick-arrow slick-arrow__right"><svg width="21" height="9" viewBox="0 0 21 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.3525 4.1357C20.5478 4.33097 20.5478 4.64755 20.3525 4.84281L17.1706 8.02479C16.9753 8.22005 16.6587 8.22005 16.4635 8.02479C16.2682 7.82953 16.2682 7.51295 16.4635 7.31768L19.2919 4.48926L16.4635 1.66083C16.2682 1.46557 16.2682 1.14899 16.4635 0.953724C16.6587 0.758462 16.9753 0.758462 17.1706 0.953724L20.3525 4.1357ZM0.385986 3.98926H19.999V4.98926H0.385986V3.98926Z" fill="#7C7C7C"/></svg></div>',

});

function imgAttr() {
	$('.banSlider-js .banSlider-img img').each(function (i, val) {
		let imgsrc = $(this).attr('src'),
			mob = $(this).attr('data-mob'),
			desktop = $(this).attr('data-desk');

		if ($(window).width() < 526 && mob !== '' && typeof mob !== 'undefined') {
			$(this).attr('src', `${mob}`);
		} else if ($(window).width() > 525) {
			$(this).attr('src', `${desktop}`);
		}
	});
}

imgAttr()

function slider(sliderBlock, num) {
	if ($(sliderBlock).parents('._parent-slider').find('.box-arrows')) {
		$(sliderBlock).parents('._parent-slider').find('.box-arrows').remove()
	} else {
	}
	$(sliderBlock).parents('._parent-slider').find('.section-title').append(`<div class="box-arrows"></div>`);
	let boxArrow = $(sliderBlock).parents('._parent-slider').find('.box-arrows');
	$(sliderBlock).slick({
		infinite: true,
		dots: false,
		adaptiveHeight: true,
		slidesToShow: num,
		slidesToScroll: 1,
		adaptiveHeight: true,
		arrows: true,
		speed: 1000,
		prevArrow: '<div class="slick-arrow slick-arrow__left"><svg width="21" height="9" viewBox="0 0 21 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.773678 4.1357C0.578417 4.33097 0.578417 4.64755 0.773678 4.84281L3.95566 8.02479C4.15092 8.22005 4.4675 8.22005 4.66277 8.02479C4.85803 7.82953 4.85803 7.51295 4.66277 7.31768L1.83434 4.48926L4.66277 1.66083C4.85803 1.46557 4.85803 1.14899 4.66277 0.953724C4.4675 0.758462 4.15092 0.758462 3.95566 0.953724L0.773678 4.1357ZM20.7402 3.98926H1.12723V4.98926H20.7402V3.98926Z" fill="#7C7C7C"/></svg></div>',
		nextArrow: '<div class="slick-arrow slick-arrow__right"><svg width="21" height="9" viewBox="0 0 21 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.3525 4.1357C20.5478 4.33097 20.5478 4.64755 20.3525 4.84281L17.1706 8.02479C16.9753 8.22005 16.6587 8.22005 16.4635 8.02479C16.2682 7.82953 16.2682 7.51295 16.4635 7.31768L19.2919 4.48926L16.4635 1.66083C16.2682 1.46557 16.2682 1.14899 16.4635 0.953724C16.6587 0.758462 16.9753 0.758462 17.1706 0.953724L20.3525 4.1357ZM0.385986 3.98926H19.999V4.98926H0.385986V3.98926Z" fill="#7C7C7C"/></svg></div>',
		responsive: [
			{
				breakpoint: 1300,
				settings: {
					appendArrows: boxArrow,

				}
			}
		]
	});
}

function sliderShow(params) {
	for (let i = 0; i < $(params).length; i++) {
		const sliderBox = $(params)[i];
		let itemNum = +$(sliderBox).children('.slider-item').length,
			widthDesNum = +$(sliderBox).attr("data-widthDes"),
			widthTabNum = +$(sliderBox).attr("data-widthTab"),
			widthMob = +$(sliderBox).attr("data-widthMob");

		if (widthDesNum < itemNum && $(window).width() >= 991) {
			slider(sliderBox, widthDesNum)
		} else if (widthTabNum < itemNum && 526 < $(window).width() && $(window).width() < 991) {
			slider(sliderBox, widthTabNum)
		} else if (widthMob < itemNum && 526 > $(window).width()) {
			slider(sliderBox, widthMob)
		} else {
			console.log("not slider" + ' ' + `${$(sliderBox).attr('class')}`)
		}
	}
}

sliderShow($('._slider'))


$('.slider-for').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	dots: false,
	arrows: false,
	asNavFor: '.slider-nav',
});

$('.slider-nav').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	arrows: false,
	asNavFor: '.slider-for',
	dots: false,
	vertical: true,
	// centerMode: true,
	focusOnSelect: true,
	responsive: [
		{
			breakpoint: 1091,
			settings: {
				// vertical: false,
				slidesToShow: 3,

			}
		},
		{
			breakpoint: 600,
			settings: {

			}
		},
		{
			breakpoint: 480,
			settings: {

			}
		}
	]

});




$(window).resize(function () {
	imgAttr()
	$('._slider').filter('.slick-initialized').slick('unslick');
	sliderShow($('._slider'))
});
