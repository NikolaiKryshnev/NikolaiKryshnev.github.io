$(function () {
	if ($(window).width() < 1100) {
		$('.cartProduct-info').after('<div class="cartProduct-info__bot"></div>')
		$('.cartProduct-info__bot').append($('.cartProduct-info .cartProduct-property'))
		$('.cartProduct-info__bot').append($('.cartProduct-info .cartProduct-info__price'))
		$('.cartProduct-info__bot').append($('.cartProduct-info .cartProduct-add'))
	}
})