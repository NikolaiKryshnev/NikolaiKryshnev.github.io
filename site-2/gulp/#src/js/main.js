//---------------------------------------------
//!Обязательная функция поддержки формата webp
//---------------------------------------------

function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src =
		"data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
	if (support == true) {
		document.querySelector("body").classList.add("webp");
	} else {
		document.querySelector("body").classList.add("no-webp");
	}
});



//---------------------------------------------
// Slick slider options
//--------------------------------------------- 
$('.slick-big--slick').slick({
	dots: true,
	arrows: false
});

 $('.slider-person--slick').slick({
	slidesToShow: 5,
	slidesToScroll: 1,
	variableWidth: true,
	arrows: true,
	asNavFor: '.slider-info--slick',
	prevArrow: '<svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.424368 15.0881L12.1579 27.5493C12.7238 28.1502 13.6412 28.1502 14.2071 27.5493L15.5756 26.0959C16.1405 25.4959 16.1416 24.5235 15.578 23.9222L6.27899 14L15.578 4.07784C16.1416 3.47646 16.1405 2.5041 15.5756 1.90413L14.2071 0.450742C13.6412 -0.150247 12.7237 -0.150247 12.1579 0.450742L0.424429 12.9119C-0.141466 13.5128 -0.141466 14.4871 0.424368 15.0881Z"/></svg>',
	nextArrow: '<svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5756 15.0881L3.84211 27.5493C3.27622 28.1502 2.35876 28.1502 1.79293 27.5493L0.424407 26.0959C-0.140522 25.4959 -0.141608 24.5235 0.421992 23.9222L9.72101 14L0.421992 4.07784C-0.141608 3.47646 -0.140522 2.5041 0.424407 1.90413L1.79293 0.450742C2.35882 -0.150247 3.27628 -0.150247 3.84211 0.450742L15.5756 12.9119C16.1415 13.5128 16.1415 14.4871 15.5756 15.0881Z"/></svg>',
	dots: false,
	centerMode: true,
	
	focusOnSelect: true
 });

 $('.slider-info--slick').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	asNavFor: '.slider-person--slick'
 });

//---------------------------------------------
//Tabs in section-portfolio
//---------------------------------------------

(function($) {
	$(function() {
	  
	  $('ul.portfolio-tabs__caption').on('click', 'li:not(.active)', function() {
		 $(this)
			.addClass('active').siblings().removeClass('active')
			.closest('div.portfolio-tabs').find('div.portfolio-tabs__content').removeClass('active').eq($(this).index()).addClass('active');
	  });
	  
	});
	})(jQuery);

//---------------------------------------------
// Fancybox in section-portfolio
//---------------------------------------------
	$("[data-fancybox]").fancybox({
		
	});


//---------------------------------------------
// FAQ list in section-faq
//---------------------------------------------

	document.addEventListener('DOMContentLoaded', function () {
		let navs = document.querySelectorAll('.faq-question--js');
		for( let i = 0; i < navs.length; i++ ){
			 navs[i].addEventListener('click', selectMenu(i), false);
		}
	 
		function selectMenu(iterator) {
			 return function() {
				  let parents = document.querySelectorAll('.faq-question--js');
				  parents.forEach(function(item, iter) {
					  
	 
						if(iterator == iter) {
							 item.classList.toggle('active');
						}
				  });
  
			 } 
		}

		 });
 