//!SLIDER
//---------------------------------------------------------------------------------------------------------------------------------------

$('.slider-ban--js').slick({
	dots: true,
	slidesToShow: 1,
	arrows: false,
	responsive: [
		{
			breakpoint: 992,
			settings: {
				arrows: false,
			}
		},
	],
});

function slider(sliderBlock, num) {
	$(sliderBlock).parents('._section').find('.title').append(`<div class="box-arrows"></div>`);
	let boxArrow = $(sliderBlock).parents('._section').find('.box-arrows');

	$(sliderBlock).slick({
		infinite: true,
		dots: false,
		slidesToShow: num,
		slidesToScroll: 1,
		adaptiveHeight: true,
		arrows: true,
		appendArrows: boxArrow,
		prevArrow: '<div class="slick-arrow slick-arrow__left"><svg width="28" height="23" viewBox="0 0 28 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.548136 10.1007C-0.0376511 10.6865 -0.0376511 11.6363 0.548136 12.222L10.0941 21.768C10.6799 22.3538 11.6296 22.3538 12.2154 21.768C12.8012 21.1822 12.8012 20.2324 12.2154 19.6467L3.73012 11.1614L12.2154 2.6761C12.8012 2.09031 12.8012 1.14056 12.2154 0.554775C11.6296 -0.0310116 10.6799 -0.0310116 10.0941 0.554775L0.548136 10.1007ZM27.2324 9.66138L1.6088 9.66138V12.6614L27.2324 12.6614V9.66138Z" fill="#323663"/></svg></div>',
		nextArrow: '<div class="slick-arrow slick-arrow__right"><svg width="28" height="23" viewBox="0 0 28 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.7966 10.1007C27.3824 10.6865 27.3824 11.6363 26.7966 12.222L17.2507 21.768C16.6649 22.3538 15.7151 22.3538 15.1293 21.768C14.5435 21.1822 14.5435 20.2324 15.1293 19.6467L23.6146 11.1614L15.1293 2.6761C14.5435 2.09031 14.5435 1.14056 15.1293 0.554775C15.7151 -0.0310116 16.6649 -0.0310116 17.2507 0.554775L26.7966 10.1007ZM0.112305 9.66138L25.7359 9.66138V12.6614L0.112305 12.6614L0.112305 9.66138Z" fill="#323663"/></svg></div>',
	});
}


// check num slider 
function sliderShow(params) {
	for (let i = 0; i < $(params).length; i++) {
		const sliderBox = $(params)[i];
		let itemNum = +$(sliderBox).children('.slider-item').length,
			widthDesNum = +$(sliderBox).attr("data-widthDes"),
			widthTabNum = +$(sliderBox).attr("data-widthTab"),
			widthMob =  +$(sliderBox).attr("data-widthMob");
		if (widthDesNum <= itemNum && $(window).width() > 991) {
			slider(sliderBox, widthDesNum)
		} else if (widthTabNum <= itemNum && 526 < $(window).width() && $(window).width() <= 991) {
			slider(sliderBox, widthTabNum)
		} else if (widthMob <= itemNum && 526 > $(window).width()) {
			slider(sliderBox, widthMob)
		} else {
			console.log("not slider")
		}
	}
}

sliderShow($('.slider--js'))

$('.sliderLogo--js').slick({
	dots: false,
	slidesToShow: 5,
	slidesToScroll: 1,
	arrows: true,
	appendArrows: $('.intLink .box-arrows'),
	prevArrow: '<div class="slick-arrow slick-arrow__left"><svg width="28" height="23" viewBox="0 0 28 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.548136 10.1007C-0.0376511 10.6865 -0.0376511 11.6363 0.548136 12.222L10.0941 21.768C10.6799 22.3538 11.6296 22.3538 12.2154 21.768C12.8012 21.1822 12.8012 20.2324 12.2154 19.6467L3.73012 11.1614L12.2154 2.6761C12.8012 2.09031 12.8012 1.14056 12.2154 0.554775C11.6296 -0.0310116 10.6799 -0.0310116 10.0941 0.554775L0.548136 10.1007ZM27.2324 9.66138L1.6088 9.66138V12.6614L27.2324 12.6614V9.66138Z" fill="#323663"/></svg></div>',
	nextArrow: '<div class="slick-arrow slick-arrow__right"><svg width="28" height="23" viewBox="0 0 28 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.7966 10.1007C27.3824 10.6865 27.3824 11.6363 26.7966 12.222L17.2507 21.768C16.6649 22.3538 15.7151 22.3538 15.1293 21.768C14.5435 21.1822 14.5435 20.2324 15.1293 19.6467L23.6146 11.1614L15.1293 2.6761C14.5435 2.09031 14.5435 1.14056 15.1293 0.554775C15.7151 -0.0310116 16.6649 -0.0310116 17.2507 0.554775L26.7966 10.1007ZM0.112305 9.66138L25.7359 9.66138V12.6614L0.112305 12.6614L0.112305 9.66138Z" fill="#323663"/></svg></div>',
	responsive: [
		{
			breakpoint: 992,
			settings: {
				arrows: false,
				prevArrow: '<div class="slick-arrow slick-arrow__left">SVG</div>',
				nextArrow: '<div class="slick-arrow slick-arrow__right">SVG</div>',
			}
		},
	],
});