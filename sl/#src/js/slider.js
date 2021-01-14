//---------------------------------------------
// Slieder
//---------------------------------------------

$('.slider-js').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	prevArrow: '<div class="slider-control slider-control__left "><svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.4 1L2 7.5M2 7.5L8.4 14M2 7.5H18" stroke="#225FA1" stroke-width="2"/></svg></div>',
	nextArrow: '<div class="slider-control slider-control__right slider-control__show "><svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.2 1L17 7.5M17 7.5L10.2 14M17 7.5H-4.76837e-07" stroke="#225FA1" stroke-width="2"/></svg></div>',
	dotes: false,
 });

 //---------------------------------------------
// Scroll
//---------------------------------------------

$('a[href*="#"]').on('click', function (e) {
	e.preventDefault();

	$('html, body').animate({
		scrollTop: $($(this).attr('href')).offset().top
	}, 500, 'linear');
});