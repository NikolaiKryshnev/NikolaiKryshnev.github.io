$.each($(".gallery-col"), function (i, val) {
	// console.log($(val).find('.fancybox--img'));
	
	$(val).find('.fancybox--img').attr('data-fancybox', `galleryImg-${i + 1}`);
});


sliderShow($('.slider--js'))