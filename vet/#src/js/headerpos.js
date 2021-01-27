
let headerBot = $('.header-bot'),
headerPhone = $('.header-top__phone'),
headerRight = $(".header-top__right"),
burger =  $('.burger');

function appendBlockSize() {
	if ($(window).width() <= 726) {
		headerBot.append(headerPhone)
		headerBot.append(burger)
	}else{
		headerPhone.prependTo(headerRight);
		headerRight.append(burger)
	}
}
$(window).resize(function() {
	appendBlockSize();
});
$(document).ready(function () {
	appendBlockSize()
});