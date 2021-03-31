//!SLIDER
//---------------------------------------------------------------------------------------------------------------------------------------

// $('.slider-One').slick({
// 	dots: false,
// 	slidesToShow: 1,
// 	arrows: true,
// 	prevArrow: '<div class="slick-arrow slick-arrow__left">SVG</div>',
// 	nextArrow: '<div class="slick-arrow slick-arrow__right">SVG</div>',
// 	responsive: [
// 		{
// 			breakpoint: 992,
// 			settings: {
// 				arrows: true,
// 				prevArrow: '<div class="slick-arrow slick-arrow__left">SVG</div>',
// 				nextArrow: '<div class="slick-arrow slick-arrow__right">SVG</div>',
// 			}
// 		},
// 	],
// });


for (let i = 0; i < $('.slider--js').length; i++) {

	const sliderBlock = $('.slider--js')[i];

	function sliderShow(sliderBlock, num) {
		$(sliderBlock).slick({
			infinite: true,
			dots: false,
			slidesToShow: num,
			slidesToScroll: 1,
			adaptiveHeight: true,
			arrows: true,
			prevArrow: '<div class="slick-arrow slick-arrow__left"><svg width="27" height="15" viewBox="0 0 27 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.940752 8.07454C0.550228 7.68401 0.550228 7.05085 0.940752 6.66032L7.30471 0.296364C7.69524 -0.0941606 8.3284 -0.0941606 8.71893 0.296364C9.10945 0.686888 9.10945 1.32005 8.71893 1.71058L3.06207 7.36743L8.71893 13.0243C9.10945 13.4148 9.10945 14.048 8.71893 14.4385C8.3284 14.829 7.69524 14.829 7.30471 14.4385L0.940752 8.07454ZM26.8955 8.36743H1.64786V6.36743H26.8955V8.36743Z" fill="black"/></svg></div>',
			nextArrow: '<div class="slick-arrow slick-arrow__right"><svg width="27" height="15" viewBox="0 0 27 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.4915 8.07454C26.882 7.68401 26.882 7.05085 26.4915 6.66032L20.1275 0.296364C19.737 -0.0941606 19.1038 -0.0941606 18.7133 0.296364C18.3228 0.686888 18.3228 1.32005 18.7133 1.71058L24.3702 7.36743L18.7133 13.0243C18.3228 13.4148 18.3228 14.048 18.7133 14.4385C19.1038 14.829 19.737 14.829 20.1275 14.4385L26.4915 8.07454ZM0.536743 8.36743H25.7844V6.36743H0.536743V8.36743Z" fill="black"/></svg></div>',
			
		});
	}
	
	if ($(window).width() >= 991 && $(sliderBlock).children().length > 4) {
		sliderShow(sliderBlock, 4)
	}else if( $(window).width() > 526 && $(window).width() < 991 && $(sliderBlock).children().length > 2){
		sliderShow(sliderBlock, 2)

	}else if($(window).width() <= 526 && $(sliderBlock).children().length > 1){
		sliderShow(sliderBlock, 1)
	}

	if ($(window).width() < 1240) {
		$(sliderBlock).parents('._section').find('.section-title').append(`<div class="blocks-arrow"></div>`)
		$(sliderBlock).parents('._section').find('.blocks-arrow').append($(sliderBlock).find('.slick-arrow'))
	}

};



$('.sliderSercvices--js').slick({
	infinite: true,
	dots: false,
	slidesToShow: 3,
	slidesToScroll: 1,
	adaptiveHeight: true,
	arrows: true,
	prevArrow: '<div class="slick-arrow slick-arrow__left"><svg width="27" height="15" viewBox="0 0 27 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.940752 8.07454C0.550228 7.68401 0.550228 7.05085 0.940752 6.66032L7.30471 0.296364C7.69524 -0.0941606 8.3284 -0.0941606 8.71893 0.296364C9.10945 0.686888 9.10945 1.32005 8.71893 1.71058L3.06207 7.36743L8.71893 13.0243C9.10945 13.4148 9.10945 14.048 8.71893 14.4385C8.3284 14.829 7.69524 14.829 7.30471 14.4385L0.940752 8.07454ZM26.8955 8.36743H1.64786V6.36743H26.8955V8.36743Z" fill="black"/></svg></div>',
	nextArrow: '<div class="slick-arrow slick-arrow__right"><svg width="27" height="15" viewBox="0 0 27 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.4915 8.07454C26.882 7.68401 26.882 7.05085 26.4915 6.66032L20.1275 0.296364C19.737 -0.0941606 19.1038 -0.0941606 18.7133 0.296364C18.3228 0.686888 18.3228 1.32005 18.7133 1.71058L24.3702 7.36743L18.7133 13.0243C18.3228 13.4148 18.3228 14.048 18.7133 14.4385C19.1038 14.829 19.737 14.829 20.1275 14.4385L26.4915 8.07454ZM0.536743 8.36743H25.7844V6.36743H0.536743V8.36743Z" fill="black"/></svg></div>',
	responsive: [
		{
			breakpoint: 992,
			settings: {
				// arrows: false,
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 526,
			settings: {
				// arrows: false,
				slidesToShow: 1,
			}
		},
	]
});

if ($(window).width() < 1240) {
	$('.sliderSercvices--js').parents('._section').find('.section-title').append(`<div class="blocks-arrow"></div>`)

	$('.sliderSercvices--js').parents('._section').find('.blocks-arrow').append($('.sliderSercvices--js .slick-arrow'))

}
