//!SLIDER
//---------------------------------------------------------------------------------------------------------------------------------------
// slider
function slider(sliderBlock, num) {
	if($(sliderBlock).parents('._parent-slider').find('.box-arrows')){
	$(sliderBlock).parents('._parent-slider').find('.box-arrows').remove()
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
		appendArrows: boxArrow,
		prevArrow: '<div class="slick-arrow slick-arrow__left"><svg width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.292892 8.70711C-0.0976315 8.31658 -0.0976315 7.68342 0.292892 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41421 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.70711ZM26 9H1V7H26V9Z" fill="#F45959"/></svg></div>',
		nextArrow: '<div class="slick-arrow slick-arrow__right"><svg width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.7071 8.70711C26.0976 8.31658 26.0976 7.68342 25.7071 7.29289L19.3431 0.928932C18.9526 0.538408 18.3195 0.538408 17.9289 0.928932C17.5384 1.31946 17.5384 1.95262 17.9289 2.34315L23.5858 8L17.9289 13.6569C17.5384 14.0474 17.5384 14.6805 17.9289 15.0711C18.3195 15.4616 18.9526 15.4616 19.3431 15.0711L25.7071 8.70711ZM0 9H25V7H0V9Z" fill="#F45959"/></svg></div>',
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
			console.log("not slider")
		}
	}
}

sliderShow($('._slider'))

$(window).resize(function() {
	$('._slider').filter('.slick-initialized').slick('unslick');
	sliderShow($('._slider'))
});

