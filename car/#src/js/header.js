function appendHeader() {
	if ($(window).width() < 527) {
		let headerContact = $('.header-contact'),
		headerRow = $('.header .row');
			$(headerRow).append($(headerContact))
		}
}
appendHeader()


$('._mapShow').on('click', function (e) {
	$(this).toggleClass("_active");
	$('.header-maps__box').toggleClass("_active");
	$('.header-menu--js').removeClass("_active");
});


$('.burger').on('click', function (e) {
	$(this).toggleClass("active");
	$('.header-menu--js').toggleClass("_active");
	$('.header-maps__box').removeClass("_active");
});



