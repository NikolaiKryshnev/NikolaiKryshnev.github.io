$(function () {
	$.each($(".gallery-col"), function (i, val) {
		$(val).find('.fancybox--img').attr('data-fancybox', `galleryImg-${i + 1}`);
	});
	sliderShow($('.slider--js'))
})