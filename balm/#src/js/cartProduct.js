$(function () {
	if ($(window).width() <= 1124) {
		$('.cartProduct-info').after('<div class="cartProduct-info__bot"></div>')
		$('.cartProduct-info__bot').append($('.cartProduct-info .cartProduct-property'))
		$('.cartProduct-info__bot').append($('.cartProduct-info .cartProduct-info__price'))
		$('.cartProduct-info__bot').append($('.cartProduct-info .cartProduct-add'))
	}

	if ($(window).width() <= 767.98) {
		$('.cartProduct-tabs .js-tab-trigger span').append('<div class="icon-plus"></div>');

		for (let i = 0; i < $('.cartProduct-tabs  .js-tab-trigger').length; i++) {
			let elTrigger = $('.cartProduct-tabs .js-tab-trigger')[i];
			let elContent =$('.cartProduct-tabs .js-tab-content')[i];
			$(elTrigger).append($(elContent));
		}
	}
})